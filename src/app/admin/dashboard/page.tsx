import { Metadata } from "next";

import Breadcrumb from "@/components/Common/Breadcrumb";
import Dashboard from "@/components/Dashboard";

export const metadata: Metadata = {
  title: "Admin Dashboard | Crypto Blog",
  description: "This is Admin Dashboard",
  // other metadata
};

const AdminDashboard = () => {
  return (
    <>
      <Breadcrumb
        pageName="Admin Dashboard"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <Dashboard />
    </>
  );
};

export default AdminDashboard;
