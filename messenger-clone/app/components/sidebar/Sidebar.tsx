import getCurrentUser from "@/app/actions/getCurrentUser";
import DesktopSidebar from "./DesktopSidebar";

async function Sidebar({ children }: { children: React.ReactNode }) {
 const currentUser = await getCurrentUser();

 return (
  <div className="h-full">
   <DesktopSidebar currentUser={currentUser!} />
   {children}
  </div>
 );
}

export default Sidebar;
