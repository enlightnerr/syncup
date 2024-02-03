import Image from "next/image";
import { Rubik_Doodle_Triangles } from "next/font/google";

const rubik_traingles = Rubik_Doodle_Triangles({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className=" bg-gray-900 h-screen p-2">
      <div
        className={`heading__container flex flex-col justify-center items-center text-white ${rubik_traingles.className} h-full`}
      >
        <span className="text-[25rem]">Sync</span>
      </div>
    </main>
  );
}
