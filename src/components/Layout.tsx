import React from 'react'
import Sidebar from './Sidebar'
import NavBar from './NavBar'
import { FilesIcon, PlusIcon} from 'lucide-react';

const navigationItems = [
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
        <NavBar items={navigationItems} />
        
        <div className="flex flex-1">
            <Sidebar items={navigationItems} />
            
            <main className="flex-1 p-4 lg:p-6 bg-background-gradient dark:bg-background-gradient">
                {children}
            </main>
        </div>
    </div>
    )
}