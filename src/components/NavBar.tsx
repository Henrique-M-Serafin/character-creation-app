// Sidebar.tsx
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Separator } from "./ui/separator";
import logo from "../../public/Logo.png";
import { Switch } from "./ui/switch";
import { Label } from "@radix-ui/react-label";
import { useTheme } from "./context/ThemeProvider";

interface NavbarItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ icon, label, path }) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  
  return (
    <Link
      to={path}
      className={`px-3 py-2 flex items-center gap-2 font-semibold rounded-md hover:bg-accent dark:hover:bg-accent ${
        isActive ? "bg-accent dark:bg-accent" : ""
      }`}
    >
      {icon && <span className="flex items-center w-5 h-5">{icon}</span>}
      <span className="text-xs lg:text-sm">{label}</span>
    </Link>
  );
};

interface NavbarProps {
  items: NavbarItemProps[];
}

const NavBar: React.FC<NavbarProps> = ({ items }) => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  
  return (
    <nav className="lg:hidden sticky top-0 z-50 w-full bg-card/95 dark:bg-card/95 backdrop-blur-sm border-b border-border dark:border-border shadow-md dark:shadow-lg">
      <div className="px-4 py-3">
        {/* Header com logo e theme toggle */}
        <div className="flex items-center justify-between mb-3">
          <div 
            className="flex items-center gap-2 text-primary dark:text-primary font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} className="h-8 w-8" alt="Logo" />
            <span className="text-lg">Character Creation</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Label className="text-sm dark:text-foreground">{theme === "dark" ? "Dark" : "Light"}</Label>
            <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
          </div>
        </div>

        <Separator className="mb-3" />

        {/* Navigation Items */}
        <div className="flex justify-center gap-2">
          {items.map((item) => (
            <NavbarItem key={item.path} {...item} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
