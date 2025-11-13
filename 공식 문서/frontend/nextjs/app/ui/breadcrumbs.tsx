"use client";

import { usePathname } from "next/navigation";

export const Breadcrumbs = () => {
  const patahname = usePathname();
  const segments = patahname.split("/");

  return (
    <nav>
      {segments.map((segment, index) => (
        <span key={index}>
          {" > "}
          {segment}
        </span>
      ))}
    </nav>
  );
};
