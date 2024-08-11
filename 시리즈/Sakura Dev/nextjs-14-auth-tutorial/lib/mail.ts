import { log } from "console";
import nodemailer from "nodemailer";
import HandleBars from "handlebars";
import { activationTemplate } from "./emailTemplates/activation";

export async function sendMail({ to, subject, body }: { to: string; subject: string; body: string }) {
  const { SMTP_EMAIL, SMTP_GMAIL_PASS, SMTP_USER, SMTP_PASS } = process.env;
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (e) {
    console.log(e);
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
    console.log({ sendResult });
  } catch (e) {
    log(e);
  }
}

export function comipleActivationTemplate(name: string, url: string) {
  const template = HandleBars.compile(activationTemplate);
  const htmlBody = template({ name, url });

  return htmlBody;
}
