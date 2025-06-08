import BoxWrapper from "@/components_old/box_wrapper";
import SidebarItem from "@/components_old/sidebar/sidebar_item";
import Library from "@/components_old/sidebar/library";

export default function Sidebar({ children }) {
  return (
    <div className="flex h-[calc(100vh-4rem-3rem)] overflow-auto">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-fit w-[300px] p-2">
        <BoxWrapper className="flex flex-col gap-y-4">
          <SidebarItem key="Home" label="Home" href="/" />
          <SidebarItem key="Search" label="Search" href="/search" />
        </BoxWrapper>
        <BoxWrapper className="overflow-y-auto h-full">
          <Library />
        </BoxWrapper>
      </div>
    </div>
  );
}
