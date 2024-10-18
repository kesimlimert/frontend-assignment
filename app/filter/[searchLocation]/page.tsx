import { Filter } from "@/components/filter";

export default function FilterPage({
  params,
}: {
  params: { searchLocation: string };
}) {
  const decodedSearchLocation = decodeURIComponent(params.searchLocation);

  return (
    <div className="py-28">
      <div className="max-w-[1118px] mx-auto px-6 md:px-0">
        <h1 className="text-2xl md:text-md-2xl text-center lg:text-lg-2xl font-bold">
          Search for an offer
        </h1>
        <h3 className="text-subheader text-center md:text-md-subheader lg:text-lg-subheader mt-2">
			Choose from the most advantageous offers
        </h3>
      </div>
	  <div className="bg-light py-12 mt-12">
		<Filter />
	  </div>
    </div>
  );
}
