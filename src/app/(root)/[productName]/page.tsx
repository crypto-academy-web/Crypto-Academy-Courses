import { db } from "@/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Metadata } from "next";
import Hero from "@/components/ProductSinglePage/Hero";
import Description from "@/components/ProductSinglePage/Description";
import { StaticImageData } from "next/image";
// import { Product } from "@/types/product";

interface Product {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: "free" | "paid";
  imageSrc: StaticImageData;
  category: string;
  amount?: number;
}

interface Params {
  params: {
    productName: string;
  };
}

async function getProductData(productName: string): Promise<Product | null> {
  const decodedName = decodeURIComponent(productName).replace(/-/g, " ");
  const q = query(
    collection(db, "products"),
    where("title", "==", decodedName)
  );
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const productDoc = querySnapshot.docs[0];
    return { id: productDoc.id, ...(productDoc.data() as Omit<Product, "id">) };
  }

  return null;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const product = await getProductData(params.productName);
  return {
    title: product?.title || "Product Not Found",
    description: product?.description || "",
  };
}

export default async function ProductPage({ params }: Params) {
  const product = await getProductData(params.productName);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className="w-full px-[70px] mob:px-5 bg-[#F6F6F6] h-[44px] flex items-center">
        <div className="w-full max-w-[1313px] mx-auto">
          <p className="text-[10px] text-[#20263033]/20">
            Home {">>"} Trading Courses {">>"} {product.title}
          </p>
        </div>
      </div>

      <Hero product={product} />
      <Description />
    </div>
  );
}
