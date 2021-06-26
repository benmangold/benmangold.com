import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import React, { useState } from "react";

export default function Blog({ allPosts }) {
  const [selectedTags, setSelectedTags] = useState([]);

  allPosts = allPosts.filter((post) => {
    if (selectedTags.length == 0) {
      return true;
    } else {
      const postTags = post.tags.split(" ");
      const displayTags = selectedTags.map((selectedTag) => {
        if (postTags.includes(selectedTag)) {
          return selectedTag;
        } else {
          return null;
        }
      });
      if (displayTags.filter((el) => el != null).length > 0) {
        return true;
      } else return false;
    }
  });

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
          tags={heroPost.tags}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
      )}
      {morePosts.length > 0 && (
        <MoreStories
          posts={morePosts}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
      )}
    </>
  );
}
