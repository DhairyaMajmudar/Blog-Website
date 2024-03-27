import { client, urlFor } from "@/lib/sanity";
import { blogCart } from "@/lib/type";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

async function getdata() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc){
  title, 
  smallDescription,
  "currentSlug":slug.current,
  "Image":titleImage.asset._ref 
}
`;

  const data = await client.fetch(query);
  return data;
}

const Home = async () => {
  const data: blogCart[] = await getdata();

  console.log(data);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
        {data.map((post, id) => {
          return (
            <>
              <Card key={id}>
                <Image
                  src={urlFor(post.Image).url()}
                  alt="Title Image"
                  height={500}
                  width={500}
                  className="rounded-lg h-[200px] object-cover"
                />

                <CardContent className="mt-5">
                  <h3 className="text-lg line-clamp-2 font-bold">
                    {post.title}
                  </h3>
                  <p className="line-clamp-3 text-sm text-gray-600 mt-2 dark:text-gray-300">
                    {post.smallDescription}
                  </p>

                  <Button asChild className="w-full mt-7">
                    <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;
