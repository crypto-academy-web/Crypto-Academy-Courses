"use client";

import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/firebase";

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

  console.log(products);

  const handleProductAdded = (newProduct: Product) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  return (
    <div>
      <AddProduct onProductAdded={handleProductAdded} />
      <DisplayAndEditProducts products={products} setProducts={setProducts} />
    </div>
  );
};

export default AdminPanelComponent;
