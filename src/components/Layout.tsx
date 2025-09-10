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


  // {
  //   icon: <SettingsIcon />,
  //   label: "Configurações",
  //   path: "/settings",
  // },
  // {
  //   icon: <UserIcon />,
  //   label: "Perfil",
  //   path: "/profile",
  // },
];

interface LayoutProps {
    children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
    return (
    <div className="">
         <div className="flex flex-1">
            <Sidebar items={sidebarItems} />
        <main className="flex-1 p-6 bg-background-gradient">
                {children}
        </main>
        </div>
    </div>
    )
}