import { TrashIcon } from "@radix-ui/react-icons";

export const ContestOption: React.FC<{
  title: string;
  onDelete: () => void;
}> = (props) => {
  return (
    <div className="border rounded-lg border-zinc-200 py-1.5 px-4 text-zinc-800 text-base flex items-center justify-between">
      <span>{props.title}</span>

      <TrashIcon onClick={props.onDelete} className="w-4 h-4 cursor-pointer" />
    </div>
  );
};
