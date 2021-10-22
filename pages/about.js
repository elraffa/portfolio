import Head from "next/head";
import { useEffect, useRef } from "react";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
            maximus ipsum. Aenean sed iaculis enim. Donec consequat sapien quis
            rutrum placerat. Nam elementum venenatis eros non feugiat. Duis ac
            massa lorem. Aliquam eros tellus, viverra ut convallis placerat,
            ornare quis tellus. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Etiam ultrices, arcu ac
            consectetur mollis, tortor sem bibendum nisl, in fermentum justo
            turpis et nibh. Maecenas sed nisi ipsum. Sed ligula magna,
            scelerisque id tellus vel, facilisis efficitur neque. Cras in
            molestie felis.
          </p>

          <p>
            Ut feugiat metus vel metus lobortis vehicula. Fusce nec nisi
            facilisis, laoreet turpis vitae, hendrerit purus. Nunc lacinia,
            lorem eu egestas tempus, turpis elit varius leo, vel hendrerit
            mauris diam non nulla. Vestibulum scelerisque ornare mollis. Integer
            maximus facilisis turpis id suscipit. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi
            sed suscipit ex. Ut convallis elit turpis, nec blandit diam ultrices
            varius. Cras tempor lorem et odio feugiat, efficitur vehicula ante
            commodo. Proin dignissim tortor in neque fermentum mattis. Phasellus
            rhoncus ullamcorper sem, nec consequat quam tincidunt at. Duis
            maximus erat lectus, ac placerat felis venenatis vitae. Phasellus
            pellentesque cursus nulla sit amet imperdiet. Praesent rutrum
            sodales lacus, et mattis lectus scelerisque id.{" "}
          </p>
          <button className="sm-btn">Check out my work</button>
        </div>
    </Layout>
  );
}
