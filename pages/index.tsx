import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/future/image"
import styles from "../styles/Home.module.css"

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
				<h1 className={styles.title}>
					George C Matson III Legacy Fund
				</h1>

				<p className={styles.description}>
					{
						"Welcome to the G.C. Matson III Legacy Fund, a tribute to the remarkable life of G.C. Matson III (February 14, 1965 - July 31, 2022) – a cherished baseball coach, devoted family man, and passionate community advocate. GC's children and family are committed to honoring his memory by utilizing the funds raised to carry forward his legacy of giving back to the community. Through grants, scholarships, and partnerships, the G.C. Matson III Legacy Fund aims to empower young athletes, strengthen families, and make a positive impact. Together, let us continue his extraordinary work, creating a brighter future for generations to come."
					}
				</p>
			</main>

			<footer className={styles.footer}>{/* TODO: Add footer */}</footer>
		</div>
	)
}

export default Home
