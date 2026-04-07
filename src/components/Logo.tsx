"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="Seven Letters"
      width={180}
      height={63}
      className="h-12 w-auto"
      priority
    />
  );
}
