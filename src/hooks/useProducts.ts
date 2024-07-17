import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<Product[]>("/products", { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setLoading(false);
        setError(err);
      });

    return () => controller.abort();
  }, []);

  return { products, isLoading, error };
};

export default useProducts;
