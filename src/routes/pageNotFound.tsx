import { A } from "@solidjs/router";
import User from "../components/User";

export default function index() {
  return (
    <>
      <section class="flex h-[80vh] snap-start items-center px-[8%] font-mono text-white">
        <main class="space-y-10">
          <div class="flex-wrag static flex gap-4">
            <h1 class="fade-down absolute bottom-130 left-130 text-6xl tracking-tight text-violet-50 md:text-7xl">
              404 :({" "}
            </h1>
            <h2 class="fade-down text-4xl tracking-tight text-violet-50 md:text-5xl">
              <span class="text-red-400">SIGSEGV</span> :Touched inaccesible URL
              space
            </h2>
          </div>
          <div class="static flex flex-wrap gap-4">
            <A
              class="fade-down absolute bottom-70 left-130 rounded bg-blue-600 p-2 decoration-2 transition [--fade-in-delay:_200ms] hover:underline"
              href="/"
            >
              <span class="fade-down [--fade-in-delay:_250ms]">
                {" "}
                See core file{" "}
              </span>
            </A>
          </div>
        </main>
      </section>
    </>
  );
}
