import {
  FaBackwardStep,
  FaPlay,
  FaForwardStep,
  FaShuffle,
  FaRepeat,
} from "react-icons/fa6";

export default function Player() {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex flex-row items-center gap-3">
        <FaShuffle
          className="hover:text-white transition text-neutral-400"
          size={13}
        />
        <FaBackwardStep
          className="hover:text-white transition text-neutral-400"
          size={18}
        />
        <FaPlay
          className="hover:text-white transition text-neutral-400"
          size={34}
        />
        <FaForwardStep
          className="hover:text-white transition text-neutral-400"
          size={18}
        />
        <FaRepeat
          className="hover:text-white transition text-neutral-400"
          size={13}
        />
      </div>
      <div className="flex flex-row items-center gap-2">
        <p className="text-sm">--:--</p>
        <input
          type="range"
          id="timeline"
          name="timeline"
          min="0"
          max="100"
          value="90"
        />
        <p className="text-sm">--:--</p>
      </div>
    </div>
  );
}
