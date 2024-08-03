import useDynamicTitle from "@/hooks/useDynamicTitle";
import { BreadcrumbWithCustomSeparator } from "./Breadcrumb";
import { Footer } from "./Footer";
import { Navbar } from "./navbar";

export default function Layout({ children }:any) {
  useDynamicTitle("Interview Prep"); 
  return (
    <>
      <Navbar />
      <BreadcrumbWithCustomSeparator />
      <main>{children}</main>
      <Footer />
    </>
  );
}