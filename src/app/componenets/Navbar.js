const { default: Link } = require("next/link")
import styles from "@/app/styles/component.module.css"
const Navbar = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.nav}><Link className={styles.Link} href="/">Home</Link></div>
                <div className={styles.nav}><Link className={styles.Link} href="/addcustomer">Add Customer</Link></div>
                <div className={styles.nav}><Link className={styles.Link} href="/viewcustomer">View Customer</Link></div>
            </div>
        </>
    )
}

export default Navbar;