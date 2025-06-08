"use client";

import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BreadcrumbComposer() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  console.log(segments);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="/">Building Your Application</BreadcrumbLink>
        </BreadcrumbItem>
        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join("/")}`;

          const capitalized =
            segment.charAt(0).toUpperCase() + segment.slice(1);
          return (
            <>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem key={href} className="hidden md:block">
                <BreadcrumbLink href={href}>
                  {capitalized.replace(/-/g, " ")}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
