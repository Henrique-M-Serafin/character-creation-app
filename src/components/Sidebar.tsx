// Sidebar.tsx
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Separator } from "./ui/separator";
import logo from "../../public/Logo.png";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
}


const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, path }) => {
  
  const location = useLocation();
  const isActive = location.pathname === path;

  return (

    <Link
      to={path}
      className={` px-4 py-2 flex gap-2 font-semibold rounded-md mb-2 hover:bg-accent ${
        isActive ? "bg-accent" : ""
      }`}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {label}
    </Link>
  );
};

interface SidebarProps {
  items: SidebarItemProps[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const navigate = useNavigate();
  return (
    <aside className="w-64 min-h-screen flex flex-col justify-between p-4 gap-2 shadow-md">
    <div className="text-xl text-center flex items-center text-primary font-bold mb-4" onClick={() => navigate("/")}><img src={logo} className="h-12 w-12" alt="Logo"/>Character Creation</div>
    <Separator className="w-full" />
    <div className="flex-1">
      <h2 className="text-xl font-semibold mb-2">Atalhos</h2>
        {items.map((item) => (
            <SidebarItem key={item.path} {...item} />
        ))}
    </div>
    {/* <div className="mt-4 flex flex-col gap-2">
        <Button variant="outline" className="w-full"> 
            Sair
        </Button>
    </div> */}
    </aside>

  );
};

export default Sidebar;
