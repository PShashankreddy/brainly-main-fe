import { SideBarItem } from "./SideBarItem";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { NoteBookIcon } from "../icons/NoteBookIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { TagIcon } from "../icons/TagIcon";
import { Logo } from "../icons/Logo";
import { useState } from "react";

export function Sidebar({ onFilterChange }: { onFilterChange?: (type: string | null) => void })
{
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleFilterClick = (type: string | null) => {
    setActiveFilter(type);
    onFilterChange?.(type);
  };

  return <div className="h-screen border-r bg-white w-72 fixed left-0 top-0 border-gray-300 pl-6">
    <div className="flex text-2xl pt-8 pl-2 items-center">
      <div className="pr-2 text-purple-600">
      <Logo/>
      </div>
      Brainly
    </div>
    <div className="pt-8 pl-4">
      <div onClick={() => handleFilterClick('tweet')} className="cursor-pointer">
        <SideBarItem icon={<TwitterIcon/>} text="Twitter"/>
      </div>
      <div onClick={() => handleFilterClick('youtube')} className="cursor-pointer">
        <SideBarItem icon={<YoutubeIcon/>} text="Youtube"/>
      </div>
      <SideBarItem icon={<NoteBookIcon/>} text="Documents"/>
      <SideBarItem icon={<LinkIcon/>} text="Links"/>
      <SideBarItem icon={<TagIcon/>} text="Tags"/>
    </div> 
  </div>
}