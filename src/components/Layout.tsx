import { Footer } from "./Footer";
import Navbar from "./navbar";

export default function Layout({ children }:any) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
