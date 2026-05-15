import Header from "@/components/header";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {


  const w = useTranslations("hero")


  return (
    <>
      <Header />
      <div className=" min-h-screen bg-black">
        <div className="max-w-360 mx-auto p-4">
          <h1 className="text-white text-3xl font-bold text-center mt-10 tracking-[1px] ">{w("title")}</h1>
          <p className="text-white text-center mt-6 text-lg tracking-[1px] ">{w("subtitle")}</p>
          <div>
            <Image
              src="/ALPacino.jpg"
              alt="AL Pacino"
              width={4000}
              height={400}
              className="mx-auto mt-6 rounded-lg shadow-md"
            />
          </div>
          <div>
          </div>
        </div>
      </div>
    </>
  );
}
