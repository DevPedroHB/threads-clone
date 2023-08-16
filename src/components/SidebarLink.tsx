"use client";

import { sidebarLinks } from "@/utils/constants/sidebar-links";
import { formatStringToId } from "@/utils/format-string-to-id";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { tv, type VariantProps } from "tailwind-variants";

const sidebarLink = tv({
  base: "relative flex",
  variants: {
    variant: {
      leftsidebar: "justify-start gap-4 rounded-lg p-4",
      bottombar:
        "flex-col items-center gap-2 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-2.5",
    },
    isActive: {
      true: "bg-primary-500",
    },
  },
});

const sidebarLinkLabel = tv({
  variants: {
    variant: {
      leftsidebar: "text-light-1 max-lg:hidden",
      bottombar: "text-subtle-medium text-light-1 max-sm:hidden",
    },
  },
});

interface ISidebarLink extends VariantProps<typeof sidebarLink> {
  link: (typeof sidebarLinks)[0];
}

export function SidebarLink({ link, ...props }: ISidebarLink) {
  const route = formatStringToId(link.label, {
    prefix: "/",
    exclude: ["home"],
  });
  const pathname = usePathname();
  const isActive =
    (pathname.includes(route) && route.length > 1) || pathname === route;

  return (
    <Link href={route} className={sidebarLink({ isActive, ...props })}>
      <Image
        src={link.icon}
        alt={`Icon ${link.label}`}
        width={24}
        height={24}
      />
      <p className={sidebarLinkLabel(props)}>
        {props.variant === "leftsidebar"
          ? link.label
          : link.label.split(/\s+./)[0]}
      </p>
    </Link>
  );
}
