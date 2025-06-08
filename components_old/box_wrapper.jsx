import { twMerge } from "tailwind-merge";

export default function BoxWrapper({ children, className }) {
  return (
    <div
      className={twMerge(
        "bg-neutral-900 rounded-lg h-fit w-full px-5 py-4",
        className
      )}
    >
      {children}
    </div>
  );
}
