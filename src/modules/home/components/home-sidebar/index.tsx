import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { MainSession } from "./main-session";
import { Separator } from "@/components/ui/separator";
import { PersonalSession } from "./personal-session";

export const HomeSidebar = () => {
 return (
  <Sidebar className="pt-16 z-40 border-none" collapsible="icon">
    <SidebarContent className="bg-background">
      <MainSession />
      <Separator />
      <PersonalSession/>
    </SidebarContent>
  </Sidebar>
 ); 
}