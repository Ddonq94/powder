import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/powder.svg"
        alt="Powder Logo"
        width={100}
        height={24}
        priority
      />
    </Link>
  );
};
