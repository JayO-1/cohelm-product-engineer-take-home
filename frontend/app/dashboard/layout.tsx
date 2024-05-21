import { DashboardProvider } from "@/context/dashboard-context";
import Sidebar from "@/components/dashboard/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <DashboardProvider>
            <div className="flex h-screen w-full bg-#EBF2FA">
                <Sidebar />
                <div className="flex flex-col w-full h-full ml-64 p-4">
                    {children}
                </div>
            </div>
        </DashboardProvider>
    );
}