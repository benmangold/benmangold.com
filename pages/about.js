import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>benmangold.com</title>
        </Head>
        <Container>
          <Intro />
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
            About Me - Empty for now
          </h2>
        </Container>
      </Layout>
    </>
  );
}
