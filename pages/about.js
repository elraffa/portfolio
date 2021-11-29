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
          HTML, CSS and JS. In the last few years I have become acquainted with
          new frameworks such as React, Django, Laravel
        </p>
        <p>
          Ut feugiat metus vel metus lobortis vehicula. Fusce nec nisi
          facilisis, laoreet turpis vitae, hendrerit purus. Nunc lacinia, lorem
          eu egestas tempus, turpis elit varius leo, vel hendrerit mauris diam
          non nulla. Vestibulum scelerisque ornare mollis. Integer maximus
          facilisis turpis id suscipit. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Morbi sed
          suscipit ex. Ut convallis elit turpis, nec blandit diam ultrices
          varius. Cras tempor lorem et odio feugiat, efficitur vehicula ante
          commodo. Proin dignissim tortor in neque fermentum mattis. Phasellus
          rhoncus ullamcorper sem, nec consequat quam tincidunt at. Duis maximus
          erat lectus, ac placerat felis venenatis vitae. Phasellus pellentesque
          cursus nulla sit amet imperdiet. Praesent rutrum sodales lacus, et
          mattis lectus scelerisque id.{" "}
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
