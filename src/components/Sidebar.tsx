import { SideBarItem } from "./SideBarItem";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { NoteBookIcon } from "../icons/NoteBookIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { TagIcon } from "../icons/TagIcon";
import { Logo } from "../icons/Logo";

export function Sidebar()
{
  return <div className="h-screen border-r bg-white w-72 fixed left-0 top-0 border-gray-300 pl-6">
    <div className="flex text-2xl pt-8 pl-2 items-center">
      <div className="pr-2 text-purple-600">
      <Logo/>
      </div>
      Brainly
    </div>
    <div className="pt-8 pl-4">
      <SideBarItem icon={<TwitterIcon/>} text="Twitter"/>
      <SideBarItem icon={<YoutubeIcon/>} text="Youtube"/>
      <SideBarItem icon={<NoteBookIcon/>} text="Documents"/>
      <SideBarItem icon={<LinkIcon/>} text="Links"/>
      <SideBarItem icon={<TagIcon/>} text="Tags"/>
    </div> 
  </div>
}