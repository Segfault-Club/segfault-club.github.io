import { A } from "@solidjs/router";

export default function index() {
  return (
    <>
      <section class="flex h-[80vh] snap-start items-center px-[8%] text-white">
        <main class="space-y-7">
          <h1 class="font-logo fade-down text-7xl text-violet-50 md:text-8xl">
            Seg
            <span class="text-red-400 underline decoration-red-400 decoration-wavy decoration-3">
              fault
            </span>{" "}
            Club
          </h1>
          <div class="space-y-2 font-mono text-lg md:text-xl">
            <p class="fade-down [--fade-in-delay:_50ms]">
              Linux, Debugging, Chaos and legendary segfaults
            </p>
            <div class="flex flex-wrap gap-4">
              <a
                class="fade-down rounded bg-slate-700 p-2 transition [--fade-in-delay:_100ms] hover:bg-slate-600"
                href="https://discord.gg/gohar"
                target="_blank"
              >
                Join{" "}
                <span class="fade-down underline decoration-blue-400 decoration-2 [--fade-in-delay:_200ms]">
                  @discord.gg/gohar
                </span>
              </a>
              <A
                class="fade-down rounded bg-blue-500 p-2 decoration-2 transition [--fade-in-delay:_200ms] hover:underline"
                href="activities"
              >
                <span class="fade-down [--fade-in-delay:_250ms]">
                  Our Activities
                </span>
              </A>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
