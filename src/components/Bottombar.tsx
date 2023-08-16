import { sidebarLinks } from "@/utils/constants/sidebar-links";
import { SidebarLink } from "./SidebarLink";

export function Bottombar() {
  return (
    <section className="fixed bottom-0 z-10 w-full rounded-t-3xl bg-glassmorphism p-4 backdrop-blur-lg xs:px-7 md:hidden">
      <div className="flex items-center justify-between gap-3 xs:gap-5">
        {sidebarLinks.map((link) => (
          <SidebarLink key={link.label} link={link} variant="bottombar" />
        ))}
      </div>
    </section>
  );
}
