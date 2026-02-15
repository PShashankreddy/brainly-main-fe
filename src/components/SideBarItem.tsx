import type { ReactElement } from "react";

export function SideBarItem({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded max-w-48 pl-4 transition-all duration-150 cursor-pointer"> 
      <div className="w-6 h-6 flex items-center justify-center">
        {icon}
      </div>

      <div className="text-sm">
        {text}
      </div>

    </div>
  );
}
