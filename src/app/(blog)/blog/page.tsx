import BlogHeader from "@/components/blog/blog-header";
import { PrismaClient } from "@prisma/client";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import Link from "next/link";

const prisma = new PrismaClient();

export default async function BlogHome() {
  const posts = await prisma.post.findMany({
    where: { status: "PUBLISHED" },
    skip: 0,
    take: 10,
  });

  return (
    <>
      <BlogHeader />
      <main className="container mx-auto mt-20 grid grid-cols-1 gap-16">
        {posts.map((post) => (
          <section key={post.id} className="prose prose-base">
            <Link href={`/blog/${post.slug}`}>
              <MDXRemote source={post.excerpt!} />
            </Link>
          </section>
        ))}
      </main>
    </>
  );
}
