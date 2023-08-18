// type post = {
//   id: string;
//   currentUserId: string;
//   parentId: string | null;
//   content: string;
//   author: {
//     name: string;
//     image: string;
//     id: string;
//   };
//   community: {
//     id: string;
//     name: string;
//     image: string;
//   } | null;
//   createdAt: string;
//   comments: {
//     author: {
//       image: string;
//     };
//   }[];
//   isComment?: boolean;
// };

import { posts } from "@/utils/constants/posts";
import Image from "next/image";
import Link from "next/link";

interface IThreadCard {
  post: (typeof posts)[0];
}

export function ThreadCard({ post }: IThreadCard) {
  return (
    <article className="flex w-full flex-col rounded-xl bg-dark-2 p-7">
      <div className="flex items-start justify-between">
        <div className="flex w-full flex-1 gap-4">
          <div className="flex flex-col items-center">
            <Link
              href={`/profile/${post.author.id}`}
              className="relative h-11 w-11"
            >
              <Image
                src={post.author.image}
                alt={post.author.name}
                fill
                className="cursor-pointer rounded-full"
              />
            </Link>
            <div className="thread-card_bar" />
          </div>
          <div className="flex w-full flex-col">
            <Link href={`/profile/${post.author.id}`} className="w-fit">
              <h4 className="cursor-pointer text-base-semibold text-light-1">
                {post.author.name}
              </h4>
            </Link>
            <p className="mt-2 text-small-regular text-light-2">
              {post.content}
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <div className="flex gap-3.5">
                <Image
                  src="/assets/heart-gray.svg"
                  alt="Icon heart"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain"
                />
                <Link href={`/thread/${post.id}`}>
                  <Image
                    src="/assets/reply.svg"
                    alt="Icon reply"
                    width={24}
                    height={24}
                    className="cursor-pointer object-contain"
                  />
                </Link>
                <Image
                  src="/assets/repost.svg"
                  alt="Icon repost"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain"
                />
                <Image
                  src="/assets/share.svg"
                  alt="Icon share"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain"
                />
              </div>
              {post.comments.length > 0 && (
                <Link href={`/thread/${post.id}`}>
                  <p className="mt-1 text-subtle-medium text-gray-1">
                    {post.comments.length} replies
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
