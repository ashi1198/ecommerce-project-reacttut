import { Product } from "./Product";
export function ProductsGrid({ products, loadCart }) {
  return (
    <>
      <div className="products-grid">
        {products.map((product) => {
          return (
            <Product key={product.id} product={product} loadCart={loadCart} />
          );
          //   when we loop through the array we need keu alwyas if we are displaying the components
        })}
      </div>
    </>
  );
}
