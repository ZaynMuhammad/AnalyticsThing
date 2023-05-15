import styles from './ProductItem.module.scss'

export function ProductItem({ product, addToCart }) {
  return (
    <li className={styles.productItem}>
      <img className={styles.img} src={product.images[0]} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.price} $</p>
      {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
    </li>
  );
}