"use client";

import * as React from "react";
import { FaSpotify } from "react-icons/fa";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Spot,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavLibrary } from "@/components/nav-library";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "eliamirafiori",
    email: "el.mirafiori@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  library: [
    {
      name: "Song 1",
      url: "#",
      cover: "#",
    },
    {
      name: "Song 2",
      url: "#",
      cover: "#",
    },
    {
      name: "Song 3",
      url: "#",
      cover: "#",
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex flex-row items-center gap-3">
          <FaSpotify size={55} />
          <p className="text-5xl font-bold">Mirafy</p>
        </div>
        <p className="text-2xl font-semibold">Enjoy the music</p>
      </SidebarHeader>
      <SidebarContent>
        <NavLibrary songs={data.library} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
