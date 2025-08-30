import BlogHeader from "@/components/blog/blog-header";
import { Post } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { Grid2X2, Tags, UserPen } from "lucide-react";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote-client/rsc";

const prisma = new PrismaClient();

export async function generateStaticParams() {
  const posts = await prisma.post.findMany();

  return posts.map((post: Post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.post.findUnique({ where: { slug: slug } });

  return { title: `${post?.title} | Foreynd`, description: post?.excerpt };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: { slug: slug },
    include: {
      author: true,
      category: true,
      comments: true,
      likes: true,
      tags: true,
    },
  });

  if (!post)
    return (
      <div>
        <h1>Not found!</h1>
      </div>
    );

  return (
    <>
      <BlogHeader />
      <section className="prose-invert lg:prose-lg container mx-auto">
        <header>
          <p className="flex items-center gap-2">
            <UserPen />
            {post.author.name}
          </p>
          <ul className="not-prose m-0 flex list-none items-center gap-2 p-0">
            <Tags />
            {post.tags.map((tag) => (
              <li key={tag.id}>{tag.name}</li>
            ))}
          </ul>
          <p className="flex items-center gap-2">
            <Grid2X2 />
            {post.category?.name}
          </p>
        </header>

        <main>
          <MDXRemote source={post.body} />
        </main>

        <section>
          <h3>Comments</h3>
          {post.comments.map((comment) => (
            <p key={comment.id}>{comment.body}</p>
          ))}
        </section>
      </section>
    </>
  );
}
