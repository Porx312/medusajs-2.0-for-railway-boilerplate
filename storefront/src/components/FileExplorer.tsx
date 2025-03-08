"use client"

import * as React from "react"
import { ChevronDown, ChevronRight, File, Folder, FolderOpen } from "lucide-react"
import { cn } from "lib/utils"

type FileType = {
  id: string
  name: string
  type: "file" | "folder"
  icon?: React.ReactNode
  children?: FileType[]
}

interface FileExplorerProps {
  files: FileType[]
  className?: string
}

export function FileExplorer({ files, className }: FileExplorerProps) {
  return (
    <div className={cn("text-sm", className)}>
      <div className="space-y-1">
        {files.map((file) => (
          <FileItem key={file.id} file={file} level={0} />
        ))}
      </div>
    </div>
  )
}

interface FileItemProps {
  file: FileType
  level: number
}

function FileItem({ file, level }: FileItemProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const hasChildren = file.type === "folder" && file.children && file.children.length > 0

  const toggleOpen = () => {
    if (hasChildren) {
      setIsOpen(!isOpen)
    }
  }

  return (
    <div>
      <div
        className={cn(
          "flex items-center py-1 px-2 rounded-md hover:bg-gray-800 cursor-pointer",
          level === 0 ? "mt-1" : "mt-0",
        )}
        style={{ paddingLeft: `${level * 12 + 8}px` }}
        onClick={toggleOpen}
      >
        {hasChildren ? (
          <span className="mr-1 text-muted-foreground">
            {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </span>
        ) : (
          <span className="w-5" />
        )}
        <span className="mr-1.5 text-muted-foreground">
          {file.icon ? (
            file.icon
          ) : file.type === "folder" ? (
            isOpen ? (
              <FolderOpen className="h-4 w-4" />
            ) : (
              <Folder className="h-4 w-4" />
            )
          ) : (
            <File className="h-4 w-4" />
          )}
        </span>
        <span className={cn(file.type === "folder" && "font-medium")}>{file.name}</span>
      </div>
      {isOpen && hasChildren && (
        <div>
          {file.children!.map((child) => (
            <FileItem key={child.id} file={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

