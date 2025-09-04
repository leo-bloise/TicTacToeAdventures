'use client';

import Image from "next/image";

type Props = {
  handleClick?: () => void;
  isLoading: boolean;
}

export function GoogleSignInButton({ handleClick, isLoading }: Props) {
  const Loading = () => {
    return <div className="w-10 h-10 border-4 border-purple-400 p-4 border-t-transparent rounded-full animate-spin"></div>
  }

  const Content = () => <>
    <Image src={"/google.png"} alt="Google logo" width={30} height={30}></Image>
    <span>
      Sign in with Google
    </span>
  </>;
  
  return <button onClick={handleClick} disabled={isLoading} className="bg-purple-800 p-4 rounded-md cursor-pointer text-white flex gap-x-4 items-center justify-center w-60">
    {isLoading && <Loading />}
    {!isLoading && <Content />}
  </button>
}