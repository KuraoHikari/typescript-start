import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationLIst";

export default function ConversationsLayout({ children }: { children: React.ReactNode }) {
 return (
  <Sidebar>
   <div className="h-full">
    <ConversationList />
    {children}
   </div>
  </Sidebar>
 );
}
