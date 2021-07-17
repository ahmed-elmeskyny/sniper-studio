//next
import Link from "next/link";
import Image from "next/image";

//style
import styles from "./layout.module.scss";

//react-icons
import {ImTarget} from "react-icons/im";


const Layout = (props) => {
   
   
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">About Us</Link></li>
                </ul>
               <div className={styles.logo}><ImTarget ></ImTarget></div> 
                <ul>
                    <li><Link href="/">Projects</Link></li>
                    <li><Link href="/">Contact Us</Link></li>
                </ul>
            </div>
            {props.children}

        </div>
    )
}
export default Layout;