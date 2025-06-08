import Image from "next/image";

export default function ProfileIcon() {
  // GUIDE: https://dev.to/shawon/creating-perfect-rounded-images-in-nextjs-using-tailwind-css-24ac
  return (
    <Image
      className="rounded-full aspect-square object-cover"
      src="https://placehold.co/1000x1000.png"
      width={34}
      height={34}
    />
  );
}
