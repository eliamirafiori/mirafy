import Image from "next/image";

export default function PlayingSong({ songCover, songName, songArtist }) {
  return (
    <div className="flex flex-row items-center gap-3">
      <Image
        className="rounded-md aspect-square object-cover"
        src={songCover}
        width={55}
        height={55}
      />
      <div className="flex flex-col">
        <p className="text-sm text-white">{songName}</p>
        <p className="text-sm text-gray-600">{songArtist}</p>
      </div>
    </div>
  );
}
