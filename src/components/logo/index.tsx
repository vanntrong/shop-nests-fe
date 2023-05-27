import Image from "next/image";
import Link from "next/link";
import React from "react";

import { PATH } from "@/configs/path.config";

const Logo = () => {
  return (
    <Link href={PATH.HOME}>
      <Image src="/logo.svg" alt="Logo" width={128} height={64} />
    </Link>
  );
};

export default Logo;
