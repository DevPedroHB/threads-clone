import { sidebarLinks } from "@/utils/constants/sidebar-links";
import Image from "next/image";
import { SidebarLink } from "./SidebarLink";

export function LeftSidebar() {
  return (
    <section className="custom-scrollbar sticky left-0 top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto border-r border-r-dark-4 bg-dark-2 pb-5 pt-28 max-md:hidden">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => (
          <SidebarLink key={link.label} link={link} variant="leftsidebar" />
        ))}
      </div>
      <div className="mt-10 px-6">
        <div className="flex cursor-pointer gap-4 p-4">
          <Image
            src="/assets/logout.svg"
            alt="Icon logout"
            width={24}
            height={24}
          />
          <p className="text-light-1 max-lg:hidden">Logout</p>
        </div>
      </div>
    </section>
  );
}
