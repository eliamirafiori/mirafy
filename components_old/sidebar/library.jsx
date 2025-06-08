"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

export default function Library({}) {
  function onAddHandler() {
    console.log("Library Widget Clicked");
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onAddHandler}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
    </div>
  );
}

// 28:30 min
