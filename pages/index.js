import Head from "next/head";
import { useEffect, useRef } from "react";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const el = useRef();
  const q = gsap.utils.selector(el);

  useEffect(() => {
    console.log("working");
    gsap.from(q(".animate-01"), {
      duration: 0.5,
      y: -30,
      opacity: 0,
      ease: "power1",
      stagger: 0.4,
    });

    gsap.from(".animate-02", {
      duration: 1,
      x: 60,
      opacity: 0,
      ease: "power2",
    });
  }, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <>
        <div className="title" ref={el}>
          <h1 className="lg-heading animate-01">
            Hi! I'm <span className="accent">Fede</span>.
          </h1>
          <h3 className="sm-heading animate-01">
            <p>I am a self taught Full Stack Web Developer</p>
          </h3>
          <Link href="/portfolio">
            <a>
              <button className="main-btn animate-01">Check out my work</button>
            </a>
          </Link>
          <div className="animate-02 icon">
            <FaLinkedin />
            <FaGithub />
          </div>
        </div>
        {
          <div className="main-image animate-02">
            <Image
              priority
              src="/images/profile-transparent.png"
              className="borderCircle"
              height={350}
              width={350}
              alt="profile"
            />
          </div>
        }
      </>
    </Layout>
  );
}
