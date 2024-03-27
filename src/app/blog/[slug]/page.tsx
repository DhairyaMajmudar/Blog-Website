import { client, urlFor } from "@/lib/sanity";
import { blogPage } from "@/lib/type";
import Image from "next/image";
import { PortableText } from "next-sanity";

async function getData(slug: string) {
  const query = `
*[_type == 'blog' && slug.current == '${slug}']{
  title ,
  "Image":titleImage.asset._ref ,
  content,
  "currentSlug":slug.current,    
}[0]
`;

  const data = await client.fetch(query);
  return data;
}

const page = async ({ params }: { params: { slug: string } }) => {
  const data: blogPage = await getData(params.slug);

  return (
    <>
      <div className="mt-6 ">
        <h1>
          <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
            Dhairya&apos;s Blog
          </span>

          <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl ">
            {data.title}
          </span>
        </h1>

        <Image
          src={urlFor(data.Image).url()}
          alt="Image"
          width={800}
          height={800}
          priority
          className="rounded-lg mt-8 border "
        ></Image>

        <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
          <PortableText value={data.content} />
        </div>
      </div>
    </>
  );
};

export default page;
