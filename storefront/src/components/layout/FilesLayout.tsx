import {  Globe,  Shirt} from 'lucide-react'
import { FileExplorer } from '../FileExplorer'
const files = [
  {
    id: "1",
    name: "Drop",
    type: "folder" as const,
    children: [
      
      {
        id: "2",
        name: "New Drop",
        type: "file" as const,
        icon: <Globe className="h-4 w-4 text-blue-500" />,
      }
    ],
  },
  {
    id: "3",
    name: "Typescript",
    type: "folder" as const,
    children: [
     
      {
        id: "12",
        name: "Clothes",
        type: "folder" as const,
        children: [
          {
            id: "13",
            name: "T-shirts.ts",
            type: "file" as const,
            icon: <Shirt className="h-4 w-4 text-cyan-500" />,
          },
          {
            id: "14",
            name: "Hoddies.ts",
            type: "file" as const,
            icon: <Shirt className="h-4 w-4 text-cyan-500" />,
          }
        ],
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
