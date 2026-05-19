import Navbar from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="w-full mx-auto relative min-h-screen overflow-hidden bg-[var(--bg-color)] transition-colors duration-500 text-black dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[length:60px_60px] bg-[image:linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] mask-image-[radial-gradient(circle_at_center,black_60%,transparent_100%)] transition-colors duration-500" />

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
