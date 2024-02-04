'use client';

import Image from 'next/image';
import { Rubik_Doodle_Triangles } from 'next/font/google';
import { sync_hz } from './assest';

const rubik_traingles = Rubik_Doodle_Triangles({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
  return (
    <main className=" h-screen bg-gray-900 p-2">
      {/* <div
        className={`heading__container flex flex-col items-center justify-center text-white ${rubik_traingles.className} h-full`}
      >
        <span className="text-[25rem]">Sync</span>
      </div> */}
      <div className="brand__container flex h-full items-center justify-center p-5">
        <Image src={sync_hz} alt="brand logo" className="w-full" />
      </div>
    </main>
  );
}
