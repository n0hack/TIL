import { suit, tossFace } from "./fonts";
import "./globals.css";

export default function AppLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <body className={`${suit.variable} ${tossFace.variable} font-suit antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
