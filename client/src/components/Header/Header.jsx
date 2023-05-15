import { FiUser } from 'react-icons/fi';
import { BsCart3 } from 'react-icons/bs';

import styles from './Header.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <nav>
                <ul className={styles.navList}>
                    <li>Home</li>
                    <li>Products</li>
                    <li><BsCart3 size={20} /></li>
                    <li><FiUser size={20} /></li>
                </ul>
            </nav>
        </header>
    )
}