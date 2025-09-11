'use client';

import Image from "next/image";
import { SpinLoading } from "./spinLoading";

type Props = {
  handleClick?: () => void;
  isLoading: boolean;
}

export function GoogleSignInButton({ handleClick, isLoading }: Props) {
  const Content = () => <>
    <Image src={"/google.png"} alt="Google logo" width={30} height={30}></Image>
    <span>
      Sign in with Google
    </span>
  </>;
  
  return <button onClick={handleClick} disabled={isLoading} className="bg-purple-800 p-4 rounded-md cursor-pointer text-white flex gap-x-4 items-center justify-center w-60">
    {isLoading && <SpinLoading />}
    {!isLoading && <Content />}
  </button>
}