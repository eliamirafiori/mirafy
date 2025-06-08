import { FaVolumeHigh } from "react-icons/fa6";

export default function Tools() {
  return (
    <div className="flex flex-row items-center gap-2">
      <FaVolumeHigh
        className="hover:text-white transition text-neutral-400"
        size={18}
      />
      <input
        type="range"
        id="volume"
        name="volume"
        min="0"
        max="100"
        value="90"
      />
    </div>
  );
}
