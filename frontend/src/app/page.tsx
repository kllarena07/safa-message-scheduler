import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Manny from "../../public/Manny.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="flex flex-col w-dvh h-dvh items-center justify-center gap-2">
      <Image src={Manny} alt="Manny" className="w-32 h-32 rounded-2xl object-cover mb-8" />
      <div className="flex flex-col items-center transition-opacity duration-1000">
        <h1 className="font-sf text-7xl font-bold text-center">Schedule announcements<br />ahead of time.</h1>
        <p className="text-gray-500 text-center sm:text-xl max-w-2xl mt-5 mb-10">The easiest way to schedule future announcements.</p>
      </div>
      <Button>
        <LoginLink>Enter Manny Control Panel</LoginLink>
      </Button>
    </section>
  );
}
