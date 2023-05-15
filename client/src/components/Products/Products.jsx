import { useEffect, useState } from "react";
import { ProductsList } from "../ProductsList/ProductsList";

export function Products() {
    const [productsData, setProductsData] = useState([]); 
      
    async function getProducts() {
        const response = await fetch('http://localhost:5000/');
        const products = await response.json();
        setProductsData(products);
    }

    useEffect(() => {
        getProducts();
    }, [])
    
    return (
        <main>
            <h1>Very Legit And Not Suspicious Commerce Site</h1>
            <h2>Featured Products</h2>
            <ProductsList productsList={productsData.products} />
        </main>
    )
}