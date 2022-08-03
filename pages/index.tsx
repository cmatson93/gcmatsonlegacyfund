import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GC Matson Legacy Fund</title>
        <meta
          name="description"
          content="Landing page for George C. Matson III Legacy Fund"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/jyz2frn.css"
        ></link>
      </Head>

      <div className={styles.customShapeDividerTop1659476769}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            className={styles.shapeFill}
            fill="#ffffff"
          ></path>
        </svg>

        <Image
          className={styles.image}
          src="/../public/UncleG1.jpeg"
          alt="Picture of the author"
          width={650}
          height={800}
        />
      </div>

      <nav className={styles.nav}>
        <a href="#">Donate</a>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>George C Matson III Legacy Fund</h1>

        <p className={styles.description}>
          Quisque eu commodo mauris. Vestibulum condimentum eu ligula et
          efficitur. Proin at magna sit amet quam rutrum efficitur in ac risus.
          Curabitur sed bibendum metus. Curabitur lectus dolor, accumsan a est
          a, convallis cursus lorem. Pellentesque diam massa, rutrum ut tempus
          at, rutrum a dolor. Integer finibus ut lorem ut euismod. In efficitur
          nisl mi, nec sodales turpis condimentum id. Sed tempus metus velit,
          vitae tincidunt augue imperdiet nec. Sed in pharetra risus. Vivamus
          commodo erat id mauris condimentum sollicitudin. Quisque sagittis
          lacinia nulla ac volutpat. Quisque tristique mollis eros, quis rutrum
          sapien rhoncus rutrum. Nam accumsan lacus mi, eu vehicula lectus
          rhoncus quis. Integer nec imperdiet felis. Sed vitae ligula laoreet,
          rutrum elit vel, lobortis tortor.
        </p>
      </main>

      <footer className={styles.footer}>{/* TODO: Add footer */}</footer>
    </div>
  );
};

export default Home;
