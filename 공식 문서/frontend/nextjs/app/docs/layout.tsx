import { Breadcrumbs } from "../ui/breadcrumbs";

export default function DocsLayout({ children }: LayoutProps<"/docs">) {
  return (
    <>
      <Breadcrumbs />
      <main>{children}</main>
    </>
  );
}
