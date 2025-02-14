import { ReactNode } from "react";

import Navbar from "@/components/navigation/navigation";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />

      {children}
    </div>
  );
};

export default Layout;
