import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import Burger from "../components/burger";
import MobileMenu from "../components/mobileMenu";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { gsap } from "gsap";

const name = "Fede Ruffa";
export const siteTitle = "Full Stack Web Developer";

export default function Layout({ children, home }) {
  const [open, setOpen] = useState(false);

  return (
    <div id="main-grid">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal website and blog in Next.js"
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
            <Link href="/portfolio">
              <a href="">Portfolio</a>
            </Link>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
            <a href="">Contact</a>
          </nav>
        </div>
        <div>
          <Burger open={open} setOpen={setOpen} />
          <MobileMenu open={open} setOpen={setOpen} />
        </div>
      </header>
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
