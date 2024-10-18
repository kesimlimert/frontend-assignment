import { searchLocation } from "@/app/actions/searchLocation";
import { SearchInput } from "./search";

export function HomeSearch() {

  return (
    <div className="bg-light max-w-2xl p-6 rounded-lg">
      <div className="flex items-center gap-4">
        <SearchInput action={searchLocation} showMapIcon placeholder="Search for location" />
      </div>
    </div>
  );
}
