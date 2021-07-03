import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/TopNav.module.css'

function TopNav() {
    return (
        <div className={styles.TopNav}>
            <p>
                This is the best thing ever
            </p>
        </div>
    )
}

export default TopNav