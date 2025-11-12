import Form from "next/form";
import { redirect } from "next/navigation";

async function createPost(formData: FormData) {
  "use server";
  console.log(formData.get("title"));
  redirect("/docs/components/form/post/1");
}

export default function FormPage() {
  return (
    <Form className="space-x-4" action={createPost}>
      <input className="border px-3 py-1 rounded-md" name="title" />
      <button type="submit">Send</button>
    </Form>
  );
}
