"use client";

import { User } from "@prisma/client";

interface DesktopSidebarProps {
 currentUser: User;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ currentUser }) => {
 return <div></div>;
};

export default DesktopSidebar;
