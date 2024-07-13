import { client, urlFor } from "@/lib/sanity";
import { blogPage } from "@/lib/type";
import Image from "next/image";
import { PortableText } from "next-sanity";

export const revalidate = 30; // Revildate after 30 sec

async function getData(slug: string) {
  const query = `
*[_type == 'blog' && slug.current == '${slug}']{
  title ,
  "Image":titleImage.asset._ref ,
  "currentSlug":slug.current,    
  content,
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
          <span className="mt-2 block text-3xl text-center leading-8 text-gradient-to-r from-slate-50 to-slate-900 font-bold tracking-tight sm:text-4xl ">
            {data.title}
          </span>
        </h1>

        <div className="flex justify-center">
          <Image
            src={urlFor(data.Image).url()}
            alt="Image"
            width={500}
            height={500}
            priority
            className="rounded-lg mt-8 border border-slate-400"
          ></Image>
        </div>

        <div className="flex flex-row">
          <div className="mt-20 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
            <PortableText value={data.content} components={BlogImage} />
          </div>
        </div>
      </div>
    </>
  );
};

const BlogImage = {
  types: {
    image: ({ value }: any) => (
      <div className="flex justify-center">
        <Image
          src={urlFor(value).url()}
          alt="Title Image"
          height={600}
          width={600}
          className="rounded-sm m-0  border-slate-400  border object-cover"
        />
      </div>
    ),
  },
};

export default page;
