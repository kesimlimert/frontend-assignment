import { Filter } from "@/components/filter";
import Image from "next/image";
import { PostList } from "@/components/post-list";

interface Post {
  title: string;
  price: number;
  image: string;
  location: string;
}

export default async function FilterPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const location = searchParams.location;
  const city = searchParams.city;
  const minPrice = searchParams["min-price"];
  const maxPrice = searchParams["max-price"];

  const data = await fetch("http://localhost:3000/api/posts");
  const posts: Post[] = await data.json();

  const filteredPosts = posts.filter((post) => {
    if (
      location &&
      !post.title.toLowerCase().includes(location.toString().toLowerCase())
    ) {
      return false;
    }
    if (city && !post.location.toLowerCase().includes(city.toString().toLowerCase())) {
      return false;
    }
    if (minPrice && post.price < parseFloat(minPrice.toString())) {
      return false;
    }
    if (maxPrice && post.price > parseFloat(maxPrice.toString())) {
      return false;
    }
    return true;
  });

  console.log(filteredPosts);

  return (
    <div className="pt-12">
      <div className="max-w-[1118px] mx-auto px-6 md:px-0">
        <h1 className="text-2xl md:text-md-2xl text-center lg:text-lg-2xl font-bold">
          Search for an offer
        </h1>
        <h3 className="text-subheader text-center md:text-md-subheader lg:text-lg-subheader mt-2">
          Choose from the most advantageous offers
        </h3>
      </div>
      <div className="bg-light py-12 mt-12">
        <Filter searchLocation={location} />
      </div>
      <div className="max-w-[1118px] mx-auto px-6 md:px-0">
        <PostList posts={filteredPosts} />
      </div>
    </div>
  );
}
