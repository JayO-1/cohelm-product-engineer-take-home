import { DashboardProvider } from "@/context/dashboard-context";
import Sidebar from "@/components/sidebar";

export default function PriorAuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <DashboardProvider>
            <div className="flex h-screen w-full bg-gray-100">
                <Sidebar />
                <div className="flex flex-col w-full h-full ml-64 p-4">
                    {children}
                </div>
            </div>
            {/* <div className="w-full max-w-6xl mx-auto">
                {children}
            </div> */}
        </DashboardProvider>
    );
}