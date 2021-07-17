//next
import Head from 'next/head';
import Image from 'next/image';

//styles
import styles from '../styles/Home.module.scss';

//components
import Layout from '../components/layout/layout';

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
              <p>It is a long established fact that a reader will be distracted by</p>
            </div>
            <div className={styles.heroImage}>
              <Image alt="sniper studio" src="/bg.png" width="200px" height="300px"></Image>
            </div>
          </div>
        </div>
      </Layout>
     
    </div>
  )
}
