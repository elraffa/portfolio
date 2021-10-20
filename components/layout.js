import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { gsap } from 'gsap'

const name = "Fede Ruffa";
export const siteTitle = "Full Stack Web Developer";

export default function Layout({ children, home }) {


  return (
    <div id="main-grid">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <div className="desktop">
          <span className="logo">
            <Link href="/">
              <a>Fede Ruffa</a>
            </Link>
          </span>
          <nav className="menu-desktop">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <a href="">Portfolio</a>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
            <a href="">Contact</a>
          </nav>
        </div>

        <div className="menu-btn">
          <div className="top"></div>
          <div className="middle"></div>
          <div className="bottom"></div>
        </div>

        <nav className="menu-mobile">
          <ul className="menu-mobile-nav">
            <div className="menu-mobile-close-btn">
              <p>x</p>
            </div>
            <li className="nav-item current">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* <section>
      {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </section> */}
      <main id="home">{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer>
        <p>&copy; 2021 - All Rights Reserved.</p>
      </footer>
    </div>
  );
}
