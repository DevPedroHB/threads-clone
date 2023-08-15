"use client";

import { sidebarLinks } from "@/constants";
import { formatStringToId } from "@/utils/format-string-to-id";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Bottombar() {
  const pathname = usePathname();

  return (
    <section className="bottombar">
      <div className="bottombar_container">
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
              className={`bottombar_link ${isActive && "bg-primary-500"}`}
            >
              <Image
                src={sl.icon}
                alt={`Icon ${sl.label}`}
                width={24}
                height={24}
              />
              <p className="text-subtle-medium text-light-1 max-sm:hidden">
                {sl.label.split(/\s+./)[0]}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
