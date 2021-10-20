import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";

export default function About() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <>
        <div className="title">
          <h1 className="lg-heading animate-01">
            Hi! I'm <span className="accent">Fede</span>.
          </h1>
          <h3 className="sm-heading animate-01">
            <p>I am a self taught Full Stack Web Developer</p>
          </h3>
          <button className="main-btn animate-01">Check out my work</button>
        </div>
        { <div className="main-image animate-02">
          <Image
            priority
            src="/images/profile-transparent.png"
            className={utilStyles.borderCircle}
            height={350}
            width={350}
            alt="profile"
          />
          </div>}
      </>
    </Layout>
  );
}
