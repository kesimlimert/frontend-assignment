import SliderComponent from "./slider";

export async function References() {
  const data = await fetch("http://localhost:3000/api/references");
  const references = await data.json();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-28">
      <div className="max-w-xl">
        <h2 className="text-2xl md:text-md-2xl text-dark lg:text-lg-2xl font-bold">
          References
        </h2>
        <p className="text-subheader md:text-md-subheader text-dark lg:text-lg-subheader text-left mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus rutrum
          donec ultricies eras id ac.
        </p>
      </div>
	  <SliderComponent references={references} />
    </div>
  );
}
