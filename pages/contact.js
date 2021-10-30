import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import ContactForm from '../components/contactForm';

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ContactForm />
    </Layout>
  );
}
