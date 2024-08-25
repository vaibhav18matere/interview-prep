import useDocumentTitle from "@/hooks/useDocumentTitle";
import { BreadcrumbWithCustomSeparator } from "./Breadcrumb";
import { Footer } from "./Footer";
import { Navbar } from "./navbar";

export default function Layout({ children }:any) {
  const headElement = useDocumentTitle("Interview Prep"); 
  return (
    <>
    {headElement}
      <Navbar />
      <BreadcrumbWithCustomSeparator />
      <main>{children}</main>
      <Footer />
    </>
  );
}