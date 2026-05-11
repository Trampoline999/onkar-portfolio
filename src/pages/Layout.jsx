import Navbar from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="w-full mx-auto relative min-h-screen overflow-hidden bg-[#0044CC]">
      <div className="pointer-events-none absolute inset-0 bg-[length:60px_60px] bg-[image:linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] mask-image-[radial-gradient(circle_at_center,black_60%,transparent_100%)]" />

      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#0044CC] [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] dark:bg-black"></div>
      <div className="left-0 right-0 z-50 flex justify-center px-4">
        <Navbar />
      </div>
      <main className="relative">{children}</main>
    </div>
  );
};
export default Layout;
