import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import ProductCard from "./ProductCard";

// const getProductData = async () => {
//   const res = await client.fetch(`*[_type=="product" ]{title,description}`);
//   return res;
// };

const getProductData = async () => {
  const res =
    await client.fetch(`*[_type=="product"]{price,_id,title,description,image,catagory->{name}
}`);
  return res;
};

interface Iproduct {
  title: string;
  description: string;
  price: number;
  _id: string;
  image: IImage;
  catagory: { name: string };
}

const handleAddtoCart = () => {};
export default async function Home() {
  const data: Iproduct[] = await getProductData();
  console.log(data);

  return (
    <div className="grid grid-cols-[repeat(3,auto)] justify-center gap-x-10">
      {data.map((item, index) => (
        <div key={item._id}>
          <ProductCard item={item} />
        </div>
      ))}
    </div>
  );
}
