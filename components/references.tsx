import SliderComponent from "./slider";

export async function References() {
  const baseURL = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';
  const data = await fetch(`${baseURL}/api/references`);
  const references = await data.json();

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
