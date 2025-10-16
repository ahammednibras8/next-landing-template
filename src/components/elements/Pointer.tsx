import { MousePointer2 } from "lucide-react";
import { twMerge } from "tailwind-merge";

const Pointer = (props: { name: string; color?: "red" | "blue" }) => {
  const { name, color } = props;

  return (
    <div>
      <MousePointer2 className="mb-1" size={25} />
      <p
        className={twMerge(
          "ml-5 inline-flex rounded-full font-bold text-sm bg-blue-500 px-2 rounded-tl-none",
          color === "red" && "bg-red-500"
        )}
      ></p>
    </div>
  );
};

export default Pointer;
