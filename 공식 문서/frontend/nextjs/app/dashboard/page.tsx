import { Metadata } from "next";

export default function DashboardPage({}: PageProps<"/dashboard">) {
  return <div>DashboardPage</div>;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Dashboard!",
  };
}
