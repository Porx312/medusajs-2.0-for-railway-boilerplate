import {   Sticker} from 'lucide-react'
import { FileExplorer } from '../FileExplorer'
import { SiTypescript, SiPython, SiReact, SiAngular, SiC,SiVuedotjs  } from "react-icons/si";
import { FaJs, FaNodeJs, FaJava } from "react-icons/fa";
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
        id: "3",
        name: "Pants",
        href: "/pants",
        type: "file" as const,
        icon: <PiPants className="h-4 w-4 text-blue-500" />,
      },
      {
        id: "4",
        name: "Stickers",
        href: "/stickers",
        type: "file" as const,
        icon: <Sticker className="h-4 w-4 text-blue-500" />,
      }
     
    ],
  },
  {
    id: "5",
    name: "Src",
    type: "folder" as const,
    children: [
  
      {
        id: "6",
        name: "Typescript.ts",
        href: "/typescript",
        type: "file" as const,
        icon: <SiTypescript className="h-4 w-4 text-blue-400" />,
      },
      {
        id: "7",
        name: "Javascript.js",
        href: "/javascript",
        type: "file" as const,
        icon: <FaJs className="h-4 w-4 text-yellow-400" />,
      },
      {
        id: "8",
        name: "Nodejs.js",
        href: "/nodejs",
        type: "file" as const,
        icon: <FaNodeJs className="h-4 w-4 text-green-400" />,
      },
      {
        id: "9",
        name: "Java.java",
        href: "/java",
        type: "file" as const,
        icon: <FaJava className="h-4 w-4 text-red-600" />,
      },
      {
        id: "10",
        name: "Python.py",
        href: "/python",
        type: "file" as const,
        icon: <SiPython className="h-4 w-4 text-yellow-500" />,
      },
      {
        id: "11",
        name: "React.jsx",
        href: "/react",
        type: "file" as const,
        icon: <SiReact className="h-4 w-4 text-blue-500" />,
      },
      {
        id: "12",
        name: "Angular.ts",
        href: "/angular",
        type: "file" as const,
        icon: <SiAngular className="h-4 w-4 text-red-500" />,
      },
      {
        id: "13",
        name: "Vue.vue",
        href: "/vue",
        type: "file" as const,
        icon: <SiVuedotjs className="h-4 w-4 text-green-500" />,
      },
      {
        id: "14",
        name: "C.c",
        href: "/c",
        type: "file" as const,
        icon: <SiC className="h-4 w-4 text-blue-600" />,
      },
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
