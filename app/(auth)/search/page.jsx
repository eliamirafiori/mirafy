import HowlerPlayer from "@/components/music-player";

export default function SearchPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-red-900 aspect-video rounded-xl" />
        <div className="bg-green-900 aspect-video rounded-xl" />
        <div className="bg-blue-900 aspect-video rounded-xl ">
          <HowlerPlayer
            audioSrc={
              "https://audio-edge-5bkfj.fra.h.radiomast.io/ref-128k-mp3-stereo"
            }
          />
          <HowlerPlayer audioSrc={"http://127.0.0.1:8000/streams/3"} />
        </div>
      </div>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min " />
    </div>
  );
}
