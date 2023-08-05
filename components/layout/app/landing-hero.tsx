"use client";
import { useAuth } from "@clerk/nextjs";
import TypewriterComponent from "typewriter-effect";

const LandingHero = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="space-y-5 py-12 text-center font-bold text-white">
      {isSignedIn ? (
        <div className="flex justify-center">
          <div className="mb-8 space-y-4">
            <h2 className="text-center text-2xl font-bold text-white md:text-4xl">
              You are <span className="text-green-500">signed in</span>, go to
              dashboard and continuse with Allin Ai.
            </h2>
          </div>
        </div>
      ) : (
        <div className="mt-14 flex justify-center">
          <div className="mb-8 space-y-4">
            <h2 className="text-center text-2xl font-bold text-white md:text-4xl">
              You are <span className="text-red-500">not signed in</span> , sign
              in or create a new account.
            </h2>
          </div>
        </div>
      )}
      <div className="space-y-5 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
        <h1>Ai tool for everything.</h1>
        <div className="flex justify-center bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          Generate
          <div className="ml-8">
            <TypewriterComponent
              options={{
                strings: [
                  "Text...",
                  " Code...",
                  " Photo...",
                  " Music...",
                  " Video...",
                ],
                cursor: "|",
                cursorClassName: "Typewriter__cursor text-white font-semibold",
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
