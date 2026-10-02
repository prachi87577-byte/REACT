import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Addtocart from "../components/Addtocart";

function Home() {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchProducts() {
			try {
				const response = await fetch("https://fakestoreapi.com/products");
				if (!response.ok) {
					throw new Error("Unable to load products");
				}
				const result = await response.json();
				setProducts(result);
			} finally {
				setIsLoading(false);
			}
		}

		fetchProducts();
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className="product-list">
			{products.map((product) => (
				<div key={product.id} className="product">
					<img src={product.image} alt={product.title} />
					<h3>{product.title}</h3>
					<p>${product.price.toFixed(2)}</p>
				</div>
			))}
            <Addtocart/>
		</div>
	);
}

export default Home;
