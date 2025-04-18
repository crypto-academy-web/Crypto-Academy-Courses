// useProducts.ts
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { StaticImageData } from "next/image";

export interface Product {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: "free" | "paid";
  imageSrc: StaticImageData;
  category: string;
  amount?: number;
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const snapshot = await getDocs(collection(db, "products"));
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Product, "id">),
        }));
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
