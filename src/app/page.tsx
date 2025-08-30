import Image from "next/image";
import Header from "@/components/header";
import { Linkedin, Mail } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import HeroImage from "@/../public/undraw_space-exploration_dhu1.svg";

const projects = [
  {
    name: "Next.js Portfolio Website",
    description:
      "A personal portfolio built with Next.js, TypeScript, and TailwindCSS, featuring dynamic project showcases and responsive design.",
    url: "https://github.com/bioib/portfolio",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "MongoDB Blog Platform",
    description:
      "A full-stack blog application using Next.js for the frontend and MongoDB for data storage, supporting user authentication and markdown posts.",
    url: "https://github.com/bioib/mongodb-blog-platform",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Task Manager API",
    description:
      "A RESTful API built with TypeScript and MongoDB, providing endpoints for managing tasks, users, and authentication.",
    url: "https://github.com/bioib/task-manager-api",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "TailwindCSS UI Kit",
    description:
      "A collection of reusable UI components styled with TailwindCSS, designed for rapid prototyping in Next.js projects.",
    url: "https://github.com/bioib/tailwindcss-ui-kit",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
];

const contactLinks = [
  {
    name: "Email",
    url: "mailto:fabioyanda@gmail.com",
    icon: <Mail />,
  },
  {
    name: "LinkedIn",
    url: "https://linked.in/in/fabio-yanda",
    icon: <Linkedin />,
  },
  {
    name: "GitHub",
    url: "https://github.com/bioib",
    icon: <SiGithub />,
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section className="container mx-auto py-20">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="mb-4 text-5xl font-bold">
                Welcome to My Portfolio!
              </h2>
              <p className="text-ctp-subtext0 max-w-2xl lg:text-2xl">
                Hi, I&apos;m Fabio Reva Yanda, a passionate Graphic Designer and
                Web Developer dedicated to creating innovative and impactful
                work. With experience in Front End Web Development, I blend
                creativity and technical expertise to deliver engaging and
                functional solutions. Explore my projects below to see how I can
                bring your ideas to life!
              </p>
            </div>
            <Image
              src={HeroImage}
              priority
              alt="Space exploration"
              className="w-1/3"
            />
          </div>
          <div className="flex flex-col gap-6 lg:flex-row">
            <button className="hover:bg-ctp-blue-800 bg-ctp-blue-900 text-ctp-base flex cursor-pointer gap-2 rounded-sm px-4 py-2 font-medium transition-colors duration-100">
              View My Work
            </button>
            <button className="hover:bg-ctp-blue-800 bg-ctp-blue-900 text-ctp-base flex cursor-pointer gap-2 rounded-sm px-4 py-2 font-medium transition-colors duration-100">
              Contact Me
            </button>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-ctp-subtext0 mb-6 flex items-center gap-2 font-mono text-xl tracking-widest uppercase">
            About
            <hr className="from-ctp-subtext0 h-0.5 w-full border-0 bg-gradient-to-r to-transparent opacity-25" />
          </h3>
          <p className="text-lg">
            I&apos;m a dedicated Full-Stack Developer with a passion for
            building modern, scalable, and user-friendly web applications. My
            expertise spans Next.js, JavaScript, TypeScript, Node.js, MongoDB,
            MySQL, and a dash of WordPress, allowing me to create robust
            solutions that bridge front-end elegance with back-end efficiency. I
            thrive on solving real-world problems through innovative technology
            and enjoy staying on the cutting edge by learning new tools and
            frameworks. Whether it&apos;s crafting seamless user experiences or
            tackling complex technical challenges, I&apos;m driven to deliver
            impactful results. Let’s connect to bring your vision to life!
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-ctp-subtext0 mb-6 flex items-center gap-2 font-mono text-xl tracking-widest uppercase">
            Projects
            <hr className="from-ctp-subtext0 h-0.5 w-full border-0 bg-gradient-to-r to-transparent opacity-25" />
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border-ctp-surface0 relative rounded-md border p-3 pb-6"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={160}
                  className="mb-4 h-40 w-full rounded object-cover"
                />
                <h4 className="mb-2 text-xl font-semibold">{project.name}</h4>
                <p className="text-ctp-subtext0 mb-8">{project.description}</p>
                <a
                  href={project.url}
                  className="text-blue hover:text-blue-hover border-ctp-surface1 absolute bottom-2 left-1/2 inline-block w-11/12 -translate-x-1/2 rounded-md border-2 px-4 py-2 text-center font-medium transition-colors"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-ctp-subtext0 mb-6 flex items-center font-mono text-xl tracking-widest uppercase">
            <h3 className="">Get In Touch</h3>
            <hr className="from-ctp-subtext0 w-full` h-0.5 grow-1 border-0 bg-gradient-to-r to-transparent opacity-25" />
          </div>
          <p className="mb-6 text-lg">
            Interested in collaborating? Reach out to me!
          </p>
          <div className="flex items-center justify-center gap-6">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                className="bg-blue text-mantle hover:bg-blue-hover flex items-center gap-2 rounded px-4 py-2 font-semibold transition-colors"
              >
                {link.icon} {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-crust shadow-crust text-text px-4 py-4 text-center shadow">
        <p>
          &copy; {new Date().getFullYear()} Fabio Reva Yanda. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
