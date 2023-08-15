"use client";

import { sidebarLinks } from "@/constants";
import { formatStringToId } from "@/utils/format-string-to-id";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function LeftSidebar() {
  const pathname = usePathname();

  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((sl) => {
          const route = formatStringToId(sl.label, {
            prefix: "/",
            exclude: ["home"],
          });

          const isActive =
            (pathname.includes(route) && route.length > 1) ||
            pathname === route;

          return (
            <Link
              key={sl.label}
              href={route}
              className={`leftsidebar_link ${isActive && "bg-primary-500"}`}
            >
              <Image
                src={sl.icon}
                alt={`Icon ${sl.label}`}
                width={24}
                height={24}
              />
              <p className="text-light-1 max-lg:hidden">{sl.label}</p>
            </Link>
          );
        })}
      </div>
      <div className="mt-10 px-6">
        {/* <SignedIn> */}
        {/* <SignOutButton> */}
        <div className="flex cursor-pointer gap-4 p-4">
          <Image
            src="/assets/logout.svg"
            alt="Icon logout"
            width={24}
            height={24}
          />
          <p className="text-light-1 max-lg:hidden">Logout</p>
        </div>
        {/* </SignOutButton> */}
        {/* </SignedIn> */}
      </div>
    </section>
  );
}
