import { FiSearch } from "react-icons/fi";

export default function Searchbar() {
  return (
    <div className="flex items-center rounded-full p-2 bg-gray-900">
      <FiSearch size={21} />
      {/* TODO: style the input */}
      <input type="text" name="search_song" id="search_song" />
    </div>
  );
}
