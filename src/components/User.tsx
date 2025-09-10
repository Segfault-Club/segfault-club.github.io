interface UserProps {
  username: string;
  avatarUrl: string;
  githubUrl: string;
}

export default function User(props: UserProps) {
  return (
    <a href = {props.githubUrl} target="_blank" class="flex items-center space-x-4 rounded p-5 text-2xl transition hover:bg-slate-600">
      <img
        src={props.avatarUrl}
        alt="Discord Profile Picture"
        class="h-12 w-12 rounded-full shadow-md shadow-black"
      />
      <span class="text font-mono text-slate-200">{props.username}</span>
    </a>
  );
}
