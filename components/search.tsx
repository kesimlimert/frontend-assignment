import { MapPin, Search } from "lucide-react";

type SearchInputProps = {
  action: (formData: FormData) => void;
  showMapIcon: boolean;
  placeholder: string;
};

export function SearchInput({ action, placeholder }: SearchInputProps) {
  return (
    <div className="relative w-full">
        <MapPin
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light"
          size={16}
          color="#1C3988"
        />
      <form className="flex flex-grow gap-3" action={action}>
        <input
          type="text"
          name="location"
          placeholder={placeholder}
          className="w-full pr-3 py-2 rounded-lg border border-darkGray pl-10"
        />
        <button type="submit" className="btn-primary flex pl-4 items-center text-sm">
          <Search size={16} className="mr-3" />
          Search
        </button>
      </form>
    </div>
  );
}
