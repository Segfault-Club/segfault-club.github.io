import User from "../components/User";

export default function Members() {
  return (
    <section class="h-screen w-full snap-start overflow-y-scroll bg-slate-900/60 p-4 text-white backdrop-blur-sm [scrollbar-width:none]">
      <h2 class="m-4 text-center text-4xl text-slate-300">Our Members</h2>
      <ul class="mx-auto my-10 grid max-w-3xl grid-cols-2 gap-5 max-md:grid-cols-1">
        <li>
          <User
            username="Thatmagicalcat"
            avatarUrl="https://cdn.discordapp.com/avatars/815189874478546954/fba107a0a4978c1e11063386102ba7ff.png?size=1024"
            githubUrl="https://github.com/thatmagicalcat"
          />
        </li>
        <li>
          <User
            username="Wicks"
            avatarUrl="https://cdn.discordapp.com/avatars/1159829981803860009/80e4790205157fa6b4152f07c4f27ecf.png?size=1024"
            githubUrl="https://github.com/Wickslynx"
          />
        </li>
        <li>
          <User
            username="DuskyElf"
            avatarUrl="https://cdn.discordapp.com/avatars/820957214264000513/fed1f113e379ef2b2921afb54b154394.png?size=1024"
            githubUrl="https://github.com/DuskyElf"
          />
        </li>
        <li>
          <User
            username="ItsCoral"
            avatarUrl="https://cdn.discordapp.com/avatars/950347120962064464/460f6977493399d10b689174924db21f.png?size=1024"
            githubUrl="https://github.com/ItsCoral0301"
          />
        </li>
        <li>
          <User
            username="The master of rick rolls"
            avatarUrl="https://cdn.discordapp.com/avatars/950521169432432700/92b68d623d59a2be9650b80999d0e345.png?size=1024"
            githubUrl="https://github.com/Diego-evaristo-crtl"
          />
        </li>
      </ul>
    </section>
  );
}
