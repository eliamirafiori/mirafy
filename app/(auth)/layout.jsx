import { redirect } from "next/navigation";

import { verifySession } from "@/lib/auth";
import { getHealth } from "@/lib/health";

import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import BreadcrumbComposer from "@/components/breadcrumb-composer";

export default async function AuthLayout({ children }) {
  /*
  const result = await verifySession();

  if (!result.user) {
    return redirect("/");
  }

  const health = await getHealth();
  */


  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <BreadcrumbComposer />
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
