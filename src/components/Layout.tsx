import React from 'react'
import Sidebar from './Sidebar'
import { CastleIcon, FilesIcon, PlusIcon} from 'lucide-react';

const sidebarItems = [
  
  {
    icon: <CastleIcon />,
    label: "Home",
    path: "/"
  },
  {
    icon: <PlusIcon />,
    label: "Create Character",
    path: "/character/create",
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
    <div className="h-screen flex flex-col">
         <div className="flex flex-1">
            <Sidebar items={sidebarItems} />
        <main className="flex-1 p-6 bg-background-gradient">
                {children}
        </main>
        </div>
    </div>
    )
}