//next
import Head from 'next/head';
import Image from 'next/image';

//styles
import styles from '../styles/Home.module.scss';

//components
import Layout from '../components/layout/layout';

//react-icons
import {FaFacebookSquare , FaLinkedinIn } from "react-icons/fa";
import {ImTwitter} from "react-icons/im";
import {AiFillInstagram} from "react-icons/ai";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SNIPER STUDIO</title>
        <meta name="description" content="sniper studio" />
      </Head>

      <Layout>
        <div className={styles.headerContainer}>
          <div className={styles.hero}>
            <div className={styles.heroText}>
              <span className={styles.name}>SNIPER STUDIO</span>
              <div className={styles.slogan} >
                <Image alt="quote" src="/quote.png" width="30px" height="30px"></Image>
                <p>It is a long established fact that a reader will be distracted by  that a reader will be  will be  will be  will be</p>
                <div  className={styles.img}>
                <Image alt="quote" src="/quote.png" width="30px" height="30px"></Image>
                </div>
              </div>
              <div className={styles.social}>
                 <FaFacebookSquare className={styles.icon}></FaFacebookSquare>
                 <FaLinkedinIn className={styles.icon}></FaLinkedinIn>
                 <ImTwitter className={styles.icon} ></ImTwitter>
                 <AiFillInstagram className={styles.icon}></AiFillInstagram>
              </div>
            </div>
            <div className={styles.heroImage}></div>
          </div>
        </div>
      </Layout>
     
    </div>
  )
}
