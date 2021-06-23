import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import React, { useState } from "react";

export default function Blog({ allPosts }) {
  const [selectedTag, setSelectedTag] = useState([]);

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      {" "}
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
          tags={heroPost.tags}
          selectedTags={selectedTag}
          setSelectedTags={setSelectedTag}
        />
      )}
      {morePosts.length > 0 && (
        <MoreStories
          posts={morePosts}
          selectedTags={selectedTag}
          setSelectedTags={setSelectedTag}
        />
      )}
    </>
  );
}
