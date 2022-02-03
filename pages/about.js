import Head from "next/head";
import { useEffect, useRef } from "react";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

export default function About() {
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

    gsap.from(".animate-03", {
      duration: 1,
      y: -30,
      opacity: 0,
      ease: "power2",
    });
  }, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="about" ref={el}>
        {
          <div className="about-image animate-03">
            <Image
              priority
              src="/images/profile-transparent.png"
              className="borderCircle"
              height={160}
              width={160}
              alt="profile"
            />
          </div>
        }
        <h3 className="sm-heading">
          <p>I am a self taught Full Stack Web Developer</p>
        </h3>
        <p>
          {" "}
          I am a Digital Marketing specialist who always loved to code and learn
          new languages. I have worked designing websites in Wordpress and plain
          HTML, CSS and JS.         
        </p>
        <p>
          I started my web development journey developing marketing websites with Wordpress. In 2019 I finished the EdX Version of Hardvard's CS50 Introduction to Computer Science and discovered a passion for coding and problem solving in Python. I have since then been honing my developing skills, diving deep into JavaScript, React and databases, mainly Postgres, MySQL and MongoDB.
        </p>
        <Link href="/portfolio">
          <a>
            <button className="sm-btn">Check out my work</button>
          </a>
        </Link>
      </div>
    </Layout>
  );
}
