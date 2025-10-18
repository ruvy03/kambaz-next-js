"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function Breadcrumb({
  course,
}: {
  course: { name: string } | undefined;
}) {
  const pathname = usePathname();

  return (
    <span>
      Course {course?.name} &gt; {pathname.split("/").pop()}
    </span>
  );
}
