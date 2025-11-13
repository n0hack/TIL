import type { Metadata } from "next";
import { suit, tossFace } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextJS v16",
};

export default function AppLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <body className={`${suit.variable} ${tossFace.variable} font-suit antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
