import {  Globe, Sticker} from 'lucide-react'
import { FileExplorer } from '../FileExplorer'
import { FaNodeJs,FaJs, FaTshirt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoShirtOutline } from "react-icons/io5";

import { PiPants } from "react-icons/pi"

const files = [
  {
    id: "1",
    name: "Categories",
    type: "folder" as const,
    children: [
      
      {
        id: "2",
        name: "Shirts",
        href: "/shirts",
        type: "file" as const,
        icon: <IoShirtOutline className="h-4 w-4 text-blue-500" />,
      },
      {
        id: "2",
        name: "Pants",
        href: "/pants",
        type: "file" as const,
        icon: <PiPants className="h-4 w-4 text-blue-500" />,
      },
      {
        id: "2",
        name: "Stickers",
        href: "/stickers",
        type: "file" as const,
        icon: <Sticker className="h-4 w-4 text-blue-500" />,
      }
     
    ],
  },
  {
    id: "3",
    name: "Src",
    type: "folder" as const,
    children: [
  
          {
            id: "4",
            name: "Typescript.ts",
            href: "typescript",
            type: "file" as const,
            icon: <SiTypescript className="h-4 w-4 text-blue-400" />,
          },
          {
            id: "5",
            name: "Javascript.js",
            href: "/javascript",
            type: "file" as const,
            icon: <FaJs className="h-4 w-4 text-yellow-400" />,
          },  {
            id: "6",
            name: "Nodejs.js",
            href: "/nodejs",
            type: "file" as const,
            icon: <FaNodeJs className="h-4 w-4 text-green-400" />,
          }
    ],
  }
]
const FilesLayout = () => {
  return (
    <>
    <aside className=" w-full h-full  border-r sidebar-bg border-black ">
        <nav className="space-y-2">
        <div className="p-2 bg-main text-xs font-medium">Explorer</div>
        <div className="p-2">
          <FileExplorer files={files} />
        </div>
        </nav>
      </aside>
    </>
  )
}

export default FilesLayout
