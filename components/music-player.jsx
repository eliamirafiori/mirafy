"use client";

import { useRef, useState } from "react";
import Howler from "howler";

function HowlerPlayer({ audioSrc }) {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!sound) {
      const newSound = new Howler.Howl({
        src: [audioSrc],
        html5: true,
        format: ["mp3", "wav", "webm"],
        onloaderror: (id, error) => {
          console.error(`Error loading audio: ${error}`, id);
        },
      });
      setSound(newSound);
      newSound.play();
      setIsPlaying(true);
    } else {
      if (!sound.playing()) {
        sound.play();
        setIsPlaying(true);
      } else {
        sound.pause();
        setIsPlaying(false);
      }
    }
  };

  const handlePause = () => {
    if (sound) {
      sound.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <button onClick={handlePlay}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={handlePause}>Pause</button>
      {sound && <div>Playing: {audioSrc}</div>}
    </div>
  );
}

export default HowlerPlayer;
