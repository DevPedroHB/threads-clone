import { ThreadCard } from "@/components/ThreadCard";
import { posts } from "@/utils/constants/posts";
import { redirect } from "next/navigation";

interface IThread {
  params: {
    id: string;
  };
}

export default function Thread({ params }: IThread) {
  const post = posts.find((post) => post.id === params.id);

  if (!post) {
    return redirect("/");
  }

  return (
    <section className="relative">
      <div>
        <ThreadCard post={post} />
      </div>
    </section>
  );
}
