import Image from "next/image";

interface Post {
  title: string;
  price: number;
  image: string;
  location: string;
}

export function PostItem({ post }: { post: Post }) {
	return (
	  <div
		key={post.title}
		className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col"
	  >
		<div className="relative h-[248px]">
		  <Image src={post.image} alt={post.title} fill objectFit="cover" />
		</div>
		<div className="p-4 flex flex-col flex-grow">
		  <h2 className="text-subheader md:text-md-subheader lg:text-lg-subheader text-dark font-bold mb-2">
			{post.title}
		  </h2>
		  <div className="mt-auto">
			<p className="text-sm md:text-md-sm lg:text-lg-sm text-primary font-bold mb-2">
			  {post.price.toLocaleString()}€
			</p>
			<p className="text-sm md:text-md-sm lg:text-lg-sm text-dark">
			  {post.location}
			</p>
		  </div>
		</div>
	  </div>
	);
  }
