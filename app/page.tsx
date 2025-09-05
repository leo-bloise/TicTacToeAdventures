import { GoogleSignInContainer } from "@/components/googleSignInContainer";

export default function Page() {
  return <main className="flex items-center justify-center flex-col gap-y-10">
    <h1 className="text-4xl font-bold text-white"> TicTacToe Adventures</h1>
    <GoogleSignInContainer />
  </main>
}