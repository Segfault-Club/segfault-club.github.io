import { A } from "@solidjs/router";
import User from "../components/User";

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

      <section class="h-screen w-full snap-start overflow-y-scroll bg-slate-900/60 p-4 text-white backdrop-blur-sm [scrollbar-width:none]">
        <h2 class="m-6 text-center text-4xl font-bold text-slate-300 underline underline-offset-10">
          Our Committee Members
        </h2>
        <ul class="mg:gap-7 mx-auto mt-15 flex max-w-3/4 flex-wrap items-center justify-center lg:gap-12">
          <li>
            <User
              username="Thatmagicalcat"
              avatarUrl="https://avatars.githubusercontent.com/u/85670037"
              githubUrl="https://github.com/thatmagicalcat"
            />
          </li>
          <li>
            <User
              username="Wicks"
              avatarUrl="https://avatars.githubusercontent.com/u/167521638"
              githubUrl="https://github.com/Wickslynx"
            />
          </li>
          <li>
            <User
              username="DuskyElf"
              avatarUrl="https://avatars.githubusercontent.com/u/91879372"
              githubUrl="https://github.com/DuskyElf"
            />
          </li>
          <li>
            <User
              username="ItsCoral"
              avatarUrl="https://avatars.githubusercontent.com/u/200485543"
              githubUrl="https://github.com/ItsCoral0301"
            />
          </li>
          <li>
            <User
              username="Diego Evaristo"
              avatarUrl="https://avatars.githubusercontent.com/u/186722487"
              githubUrl="https://github.com/foo8664"
            />
          </li>
          <li>
            <User
              username="infiKNIGHTe"
              avatarUrl="https://avatars.githubusercontent.com/u/142007233"
              githubUrl="https://github.com/infiknighte"
            />
          </li>
        </ul>
      </section>
    </>
  );
}
