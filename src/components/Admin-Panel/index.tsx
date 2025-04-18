"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/firebase";

import Text from "../ui/Text";
import Button from "../ui/Button";
import AddProduct from "./Add-Product";
import DisplayAndEditProducts from "./DisplayAndEditProducts";

interface Product {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: string;
  imageSrc: string;
  amount?: string;
  category?: string;
  createdAt: Timestamp;
}

const AdminPanelComponent = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  const fetchProducts = async () => {
    const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    const productsArray: Product[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Product, "id">),
    }));
    setProducts(productsArray);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductAdded = (newProduct: Product) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    router.push("/");
  };

  return (
    <div className="w-full max-w-[1313px] mx-auto">
      <Button
        onClick={handleLogout}
        className=" bg-accent w-[200px] h-[50px] text-white px-4 py-2 text-[18px] rounded-md ml-auto mt-[60px]"
      >
        Logout
      </Button>
      <div className="flex justify-center mt-[100px] items-center">
        <Text as="h1" className=" text-black font-bold">
          Admin Panel
        </Text>
      </div>
      <AddProduct onProductAdded={handleProductAdded} />
      <DisplayAndEditProducts products={products} setProducts={setProducts} />
    </div>
  );
};

export default AdminPanelComponent;
