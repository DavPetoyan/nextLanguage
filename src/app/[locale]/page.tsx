import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header />
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-360 mx-auto">
        <h1 className="text-3xl font-bold text-center mt-10">Welcome to the Home Page</h1>
      </div>
    </div>
    </>
  );
}
