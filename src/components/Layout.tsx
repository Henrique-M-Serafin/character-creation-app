import React from 'react'
import Sidebar from './Sidebar'
import { FilesIcon, PlusIcon} from 'lucide-react';

const sidebarItems = [
  
  {
    icon: <PlusIcon />,
    label: "Create Character",
    path: "/",
  },
  {
    icon: <FilesIcon />,
    label: "Character List",
    path: "/character/list"
  }

];

interface LayoutProps {
    children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
    return (
    <div className="dark:bg-background">
         <div className="flex flex-1">
            <Sidebar items={sidebarItems} />
        <main className="flex-1 p-6 bg-background-gradient dark:bg-background-gradient">
                {children}
        </main>
        </div>
    </div>
    )
}