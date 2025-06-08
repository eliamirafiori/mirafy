import { FaSpotify } from "react-icons/fa";

import Searchbar from "@/components_old/topbar/searchbar";

import ProfileIcon from "./profile_icon";

export default function Topbar() {
  return (
    <div className="flex w-full h-12 p-4 mt-0 items-center justify-between space-between bg-transparent">
      <FaSpotify size={34} />
      <Searchbar />
      <ProfileIcon />
    </div>
  );
}
