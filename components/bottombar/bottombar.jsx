import Player from "./player";
import PlayingSong from "./playing_song";
import Tools from "./tools";

export default function Bottombar() {
  return (
    <div className="flex w-full h-16 p-4 items-center justify-between space-between bg-transparent">
      <PlayingSong
        songCover={"https://placehold.co/1000x1000.png"}
        songName={"My song"}
        songArtist={"Lil Mira"}
      />
      <Player />
      <Tools />
    </div>
  );
}
