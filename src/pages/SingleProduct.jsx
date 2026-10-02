function SingleProduct() {

  const[product, setProduct] = useState({});

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch("https://fakestoreapi.com/products/"+id);
      const result = await response.json();
      setProduct(result);
    }
    fetchProduct();
  }, [id]);

  return (
    <>
    
    <section>
      <div className="left">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="right">
        <h2>{product.title}</h2>
        <p>Category: {product.category}</p>
        <p>{product.description}</p>
        <p>${product.price.toFixed(2)}</p>
      </div>
    </section>
    </>
  )
}

export default SingleProduct;