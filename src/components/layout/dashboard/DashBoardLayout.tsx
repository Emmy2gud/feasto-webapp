import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";
import { Nav } from "./Nav";

export default function DashBoardLayout() {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <SideBar />
    <div className="w-full">
            <Nav/>  
            <main className="flex-1 overflow-y-scroll h-[calc(100vh-4rem)] p-8">
 
        <Outlet />
      </main>
      </div> 

    </div>
  );
}
