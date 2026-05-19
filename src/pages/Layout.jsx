import Navbar from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="w-full mx-auto relative min-h-screen overflow-hidden bg-[var(--bg-color)] transition-colors duration-500 text-black dark:text-white">
      <div className="" />

      <div
        className=""></div>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4">
        <Navbar />
      </div>
      <main className="relative">{children}</main>
    </div>
  );
};
export default Layout;
