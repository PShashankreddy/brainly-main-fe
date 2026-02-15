import { NoteBookIcon } from "../icons/NoteBookIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import { useEffect } from "react";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export function Card({ title, link, type }: CardProps) 
{
   useEffect(() => {
    if (type === "twitter" && (window as any).twttr) {
      (window as any).twttr.widgets.load();
    }
  }, [type, link]);
  return (
    <div>
      <div className="p-4 bg-white rounded-md shadow-md border-gray-300 max-w-72 border min-h-48 min-w-72">
        <div className="flex justify-between">
          <div className="flex items-center text-md">
            <div className="text-gray-500 pr-2">
              <NoteBookIcon />
            </div>
            {title}
          </div>

          <div className="flex items-center">
            <a
              href={link}
              target="_blank" 
              rel="noopener noreferrer"
              className="pr-2 text-gray-500"
            >
              <ShareIcon />
            </a>

            <div className="text-gray-500">
              <DeleteIcon />
            </div>
          </div>
        </div>

        <div className="pt-4">
          {type === "youtube" && (
          <iframe
          className="w-full"
          src={`https://www.youtube.com/embed/${
          link.includes("youtu.be")
          ? link.split("youtu.be/")[1].split("?")[0]
          : link.split("v=")[1].split("&")[0]
        }`} 
        title="YouTube video player"
        allowFullScreen
        />)}


          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href="https://twitter.com/CineChitraalu/status/2022552623044513997?s=20" target="_blank"></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}
