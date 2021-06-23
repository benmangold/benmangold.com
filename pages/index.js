import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";

import Blog from "../components/blog";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>benmangold.com</title>
        </Head>
        <Container>
          <Intro />
          <Blog allPosts={allPosts} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
