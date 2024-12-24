import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { ProfileCard } from './components/ui/ProfileCard';

export default function Home() {
  return (
    <>
      {/* Background Pattern - Now positioned fixed and extended */}
      <AnimatedBackground />
      
      <main className="min-h-screen flex items-center justify-center relative mx-auto max-w-5xl bg-dark-1 dark:bg-white font-spaceGrotesk">
        <div className="flex items-center justify-center max-sm:flex-col sm:flex-row w-full">
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-8 sm:grid-rows-5 p-5 max-sm:p-4 sm:h-[770px] relative w-full max-sm:gap-3 max-sm:min-h-screen">
            
            {/* Profile Card */}
            <ProfileCard />

            {/* Tech Stack Card */}
            <div className="relative flex w-full rounded-xl border dark:border-dark-5 border-dark-3 transform-gpu bg-dark-1 [box-shadow:0_0px_60px_-20px_#ffffff1f_inset] cursor-grab dark:bg-white sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-5 z-[8]">
              {/* Tech stack content */}
            </div>

            {/* Daily Tools Stack */}
            <div className="relative flex w-full rounded-xl border dark:border-dark-5 border-dark-3 transform-gpu bg-dark-1 [box-shadow:0_0px_60px_-20px_#ffffff1f_inset] cursor-grab dark:bg-white sm:col-start-3 sm:col-end-7 sm:row-start-3 sm:row-end-6 z-[9]">
              {/* Daily tools content */}
            </div>

            {/* Social Links */}
            <div className="relative flex w-full rounded-xl border dark:border-dark-5 border-dark-3 transform-gpu bg-dark-1 [box-shadow:0_0px_60px_-20px_#ffffff1f_inset] cursor-grab dark:bg-white sm:col-start-7 sm:col-end-9 sm:row-start-1 sm:row-end-2 z-[7]">
              {/* Social links content */}
            </div>

            {/* Project Card */}
            <div className="relative flex w-full rounded-xl border dark:border-dark-5 border-dark-3 transform-gpu bg-dark-1 [box-shadow:0_0px_60px_-20px_#ffffff1f_inset] cursor-grab dark:bg-white sm:col-start-7 sm:col-end-9 sm:row-start-2 sm:row-end-4 z-[8]">
              {/* Project content */}
            </div>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="sm:hidden w-full">
          <div className="border-t flex items-center justify-end w-[80%] mx-auto border-dark-3 px-3 py-2 pb-3">
            <p className="text-zinc-600 font-bold">peace out.</p>
          </div>
        </div>
      </main>
    </>
  );
}