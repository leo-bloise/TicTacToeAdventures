'use client';

import Image from "next/image";

export default function Page() {
  return <div>
    <button className="bg-purple-800 p-4 rounded-md cursor-pointer text-white flex gap-x-4 items-center">
      <Image src={"/google.png"} alt="Google logo" width={30} height={30}></Image>
      <span>
        Sign in with Google 
      </span>
    </button>
  </div>
}