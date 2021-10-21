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
      <div className="about">
      { <div className="main-image animate-02">
          <Image
            priority
            src="/images/profile-transparent.png"
            className={utilStyles.borderCircle}
            height={200}
            width={200}
            alt="profile"
          />
          </div>}
        <div className="title">
          <h3 className="sm-heading">
            <p>I am a self taught Full Stack Web Developer</p>
          </h3>
          <button className="sm-btn">Check out my work</button>

        </div>
      </div>
    </Layout>
  );
}
