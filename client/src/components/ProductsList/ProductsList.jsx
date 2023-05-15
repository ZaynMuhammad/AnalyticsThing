import { ProductItem } from "../ProductItem/ProductItem"
import styles from './ProductsList.module.scss'

export function ProductsList({ productsList }) {
    console.log(productsList)

    if (!productsList) return <h1>loading...</h1>

    return (
        <ul className={styles.productListContainer}>
            {productsList.map(product => (
                <ProductItem key={product._id} product={product} />
            ))}
        </ul>
    )
}