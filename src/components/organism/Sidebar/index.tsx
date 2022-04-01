import Image from "next/image";
import loginBanner from "@assets/login-banner.svg";

export default function Sidebar() {
  return (
    <aside className="flex justify-center items-center">
      <Image
        src={loginBanner}
        alt=""
        layout="fixed"
        width={974}
        height={714.52}
      />
    </aside>
  );
}
