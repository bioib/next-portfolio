import { PrismaClient, Role, Status } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Hapus data lama (untuk development)
  await prisma.verificationToken.deleteMany();
  await prisma.session.deleteMany();
  await prisma.authenticator.deleteMany();
  await prisma.account.deleteMany();
  await prisma.like.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.post.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  // Buat User (5 user, Fabio sebagai ADMIN)
  const users = [];
  const userData = [
    {
      id: "user-1",
      email: "fabio@foreynd.space",
      name: "Fabio Reva Yanda",
      role: Role.ADMIN,
      bio: "Full-Stack Developer | Expert in Next.js, TypeScript, Node.js, and Supabase",
      image: "https://foreynd.space/images/fabio.jpg",
    },
    {
      id: "user-2",
      email: "user2@example.com",
      name: "John Doe",
      role: Role.USER,
      bio: "Guest contributor",
      image: "https://example.com/user2.jpg",
    },
    // Tambahkan 3 user lain
    ...Array.from({ length: 3 }, (_, i) => ({
      id: `user-${i + 3}`,
      email: `user${i + 3}@example.com`,
      name: `User ${i + 3}`,
      role: Role.USER,
      bio: `Contributor ${i + 3}`,
      image: `https://example.com/user${i + 3}.jpg`,
    })),
  ];

  for (const data of userData) {
    const user = await prisma.user.upsert({
      where: { email: data.email },
      update: {},
      create: data,
    });
    users.push(user);
  }

  // Buat Category (kategori teknologi)
  const categories = [
    {
      name: "Next.js",
      slug: "nextjs",
    },
    {
      name: "TypeScript",
      slug: "typescript",
    },
    { name: "Node.js", slug: "nodejs" },
    { name: "Supabase", slug: "supabase" },
    {
      name: "Full-Stack",
      slug: "fullstack",
    },
  ];

  const createdCategories = [];
  for (const cat of categories) {
    const category = await prisma.category.create({ data: cat });
    createdCategories.push(category);
  }

  // Buat Tag (tag untuk SEO)
  const tags = [
    { name: "Tutorial", slug: "tutorial" },
    { name: "Coding", slug: "coding" },
    { name: "Web Development", slug: "web-development" },
    { name: "JavaScript", slug: "javascript" },
    { name: "Database", slug: "database" },
  ];

  const createdTags = [];
  for (const tag of tags) {
    const createdTag = await prisma.tag.create({ data: tag });
    createdTags.push(createdTag);
  }

  // Buat Post (10 postingan asli terkait teknologi)
  const postsData = [
    {
      title: "Membangun Aplikasi Full-Stack dengan Next.js dan Supabase",
      body: `
# Membangun Aplikasi Full-Stack dengan Next.js dan Supabase

Next.js adalah framework React yang kuat untuk membangun aplikasi web modern, sementara Supabase menyediakan backend-as-a-service dengan PostgreSQL. Dalam artikel ini, kita akan membahas cara mengintegrasikan keduanya.

## Langkah 1: Setup Proyek Next.js
Gunakan perintah berikut:
\`\`\`bash
npx create-next-app@latest my-blog
\`\`\`

## Langkah 2: Konfigurasi Supabase
Buat proyek di Supabase, tambahkan URL database dan API key ke \`.env.local\`.

## Langkah 3: Integrasi Prisma
Definisikan schema Prisma dan jalankan migrasi:
\`\`\`prisma
model Post {
  id    Int    @id @default(autoincrement())
  title String
  body  String
}
\`\`\`

## Kesimpulan
Kombinasi Next.js dan Supabase memungkinkan pengembangan cepat dan efisien. Cobalah untuk proyek Anda!
      `,
      authorId: users[0].id, // Fabio
    },
    {
      title: "Mengoptimalkan TypeScript untuk Proyek Skala Besar",
      body: `
# Mengoptimalkan TypeScript untuk Proyek Skala Besar

TypeScript membantu menjaga kode tetap terorganisir. Berikut adalah tips untuk proyek besar:

## 1. Gunakan Interface
Interface lebih baik untuk tipe objek:
\`\`\`typescript
interface User {
  id: string;
  name: string;
}
\`\`\`

## 2. Utility Types
Gunakan \`Partial\`, \`Pick\`, atau \`Omit\` untuk fleksibilitas.

## 3. Strict Mode
Aktifkan \`"strict": true\` di \`tsconfig.json\`.

## Kesimpulan
TypeScript meningkatkan produktivitas dan kualitas kode jika digunakan dengan benar.
      `,
      authorId: users[0].id,
    },
    {
      title: "Mengenal Node.js Event Loop untuk Pemula",
      body: `
# Mengenal Node.js Event Loop untuk Pemula

Node.js cepat karena event loop-nya. Artikel ini menjelaskan cara kerjanya secara sederhana.

## Apa itu Event Loop?
Event loop memungkinkan Node.js menangani operasi non-blocking seperti I/O.

## Contoh Praktis
\`\`\`javascript
setTimeout(() => console.log('Timer selesai'), 1000);
console.log('Cetak dulu');
\`\`\`

## Kesimpulan
Memahami event loop penting untuk mengoptimalkan performa Node.js.
      `,
      authorId: users[1].id, // User lain
    },
    {
      title: "Menggunakan Supabase Auth dengan Next.js",
      body: `
# Menggunakan Supabase Auth dengan Next.js

Supabase menyediakan autentikasi yang mudah diintegrasikan dengan Next.js.

## Langkah 1: Setup Supabase Client
Install paket Supabase:
\`\`\`bash
npm install @supabase/supabase-js
\`\`\`

## Langkah 2: Konfigurasi Auth
Gunakan Supabase Auth untuk login dengan email atau OAuth.

## Kesimpulan
Supabase Auth menyederhanakan autentikasi untuk aplikasi Next.js.
      `,
      authorId: users[0].id,
    },
    {
      title: "Membangun API REST dengan Node.js dan Express",
      body: `
# Membangun API REST dengan Node.js dan Express

Express adalah framework populer untuk API di Node.js.

## Langkah 1: Setup Proyek
\`\`\`bash
npm init -y
npm install express
\`\`\`

## Langkah 2: Buat Endpoint
\`\`\`javascript
const express = require('express');
const app = express();
app.get('/api', (req, res) => res.json({ message: 'Hello API' }));
\`\`\`

## Kesimpulan
Express memudahkan pembuatan API yang skalabel.
      `,
      authorId: users[2].id,
    },
    {
      title: "Panduan MongoDB untuk Pemula",
      body: `
# Panduan MongoDB untuk Pemula

MongoDB adalah database NoSQL yang fleksibel.

## Langkah 1: Install MongoDB
Unduh dan install MongoDB Community Edition.

## Langkah 2: Koneksi dengan Node.js
Gunakan driver resmi:
\`\`\`javascript
const { MongoClient } = require('mongodb');
\`\`\`

## Kesimpulan
MongoDB cocok untuk aplikasi dengan data tidak terstruktur.
      `,
      authorId: users[0].id,
    },
    {
      title: "SEO untuk Blog Next.js: Tips dan Trik",
      body: `
# SEO untuk Blog Next.js: Tips dan Trik

SEO penting untuk meningkatkan visibilitas blog Anda.

## Langkah 1: Metadata
Gunakan metadata dinamis di Next.js:
\`\`\`typescript
export const metadata = {
  title: 'My Blog',
  description: 'Tech tutorials',
};
\`\`\`

## Langkah 2: Sitemap
Buat sitemap untuk membantu crawler.

## Kesimpulan
SEO yang baik meningkatkan traffic organik.
      `,
      authorId: users[0].id,
    },
    {
      title: "Mengelola State di React dengan Redux Toolkit",
      body: `
# Mengelola State di React dengan Redux Toolkit

Redux Toolkit menyederhanakan manajemen state.

## Langkah 1: Install
\`\`\`bash
npm install @reduxjs/toolkit react-redux
\`\`\`

## Langkah 2: Buat Slice
\`\`\`typescript
import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1; },
  },
});
\`\`\`

## Kesimpulan
Redux Toolkit memudahkan state management.
      `,
      authorId: users[1].id,
    },
    {
      title: "Membuat Formulir Kontak dengan Next.js dan Supabase",
      body: `
# Membuat Formulir Kontak dengan Next.js dan Supabase

Formulir kontak meningkatkan interaksi pengguna.

## Langkah 1: Setup Form
Gunakan komponen React untuk form:
\`\`\`tsx
<input type="text" name="name" />
\`\`\`

## Langkah 2: Simpan ke Supabase
Gunakan Supabase client untuk menyimpan data.

## Kesimpulan
Formulir kontak meningkatkan engagement.
      `,
      authorId: users[0].id,
    },
    {
      title: "Migrasi dari JavaScript ke TypeScript",
      body: `
# Migrasi dari JavaScript ke TypeScript

TypeScript menambah tipe statis ke JavaScript.

## Langkah 1: Install TypeScript
\`\`\`bash
npm install typescript --save-dev
\`\`\`

## Langkah 2: Konversi File
Ubah \`.js\` ke \`.ts\` dan tambahkan tipe.

## Kesimpulan
TypeScript meningkatkan keandalan kode.
      `,
      authorId: users[2].id,
    },
  ];

  for (const postData of postsData) {
    const slug = postData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .slice(0, 50)
      .replace(/^-|-$/g, "");

    const randomCategory =
      createdCategories[Math.floor(Math.random() * createdCategories.length)];
    const randomTags = createdTags.slice(0, Math.floor(Math.random() * 3) + 1);

    await prisma.post.create({
      data: {
        title: postData.title,
        slug,
        body: postData.body,
        excerpt:
          postData.body.replace(/```[\s\S]*?```/g, "").slice(0, 150) + "...",
        status: Status.PUBLISHED,
        viewCount: Math.floor(Math.random() * 1000),
        publishedAt: new Date(),
        author: { connect: { id: postData.authorId } },
        category: { connect: { id: randomCategory.id } },
        tags: { connect: randomTags.map((tag) => ({ id: tag.id })) },
      },
    });
  }

  // Buat Comment (5 komentar pada post pertama)
  const firstPost = await prisma.post.findFirst();
  if (firstPost) {
    for (let i = 1; i <= 5; i++) {
      await prisma.comment.create({
        data: {
          body: `Komentar ${i}: Artikel ini sangat membantu!`,
          approved: true,
          post: { connect: { id: firstPost.id } },
          user: {
            connect: { id: users[Math.floor(Math.random() * users.length)].id },
          },
        },
      });
    }
  }

  console.log("Seeding selesai!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
