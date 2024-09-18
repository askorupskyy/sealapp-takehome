import { Separator } from "../ui/separator";

export const LayoutTitle: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl lg:text-4xl font-bold text-zinc-800">
        {props.children}
      </h1>
      <Separator />
    </div>
  );
};
