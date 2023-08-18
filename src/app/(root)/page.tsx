import { ThreadCard } from "@/components/ThreadCard";
import { posts } from "@/utils/constants/posts";

export default function Home() {
  return (
    <>
      <h1 className="head-text text-left">Home</h1>
      <section className="mt-9 flex flex-col gap-10">
        {posts.length === 0 ? (
          <p className="no-result">No threads found</p>
        ) : (
          <>
            {posts.map((post) => (
              <ThreadCard key={post.id} post={post} />
            ))}
          </>
        )}
      </section>
    </>
  );
}
