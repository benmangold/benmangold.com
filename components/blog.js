import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";

export default function Blog({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <span>
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
        />
      )}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </span>
  );
}

