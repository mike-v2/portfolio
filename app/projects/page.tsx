import Image from 'next/image'

import { projectData } from "./projectData";

const toolIcons: ToolIconData = {
  "Next.js": {
    src: "/images/nextjs-logo.svg",
    invert: true,
  },
  React: {
    src: "/images/react-logo.svg",
  },
  GitHub: {
    src: "/images/github-logo.svg",
    invert: true,
  },
  "Tailwind CSS": {
    src: "/images/tailwind-logo.svg",
  },
  "ChatGPT API": {
    src: "/images/openai-logo.svg",
    invert: true,
  },
  Firebase: {
    src: "/images/firebase-logo.svg",
  },
  Prisma: {
    src: "/images/prisma-logo.svg",
    invert: true,
  },
  Bootstrap: {
    src: "/images/bootstrap-logo.svg",
    invert: true,
  },
  Supabase: {
    src: "/images/supabase-logo.svg",
  },
  "Daisy UI": {
    src: "/images/daisyui-logo.svg",
  },
  "Google Cloud Functions": {
    src: "/images/cloud_functions.png",
  },
  "Mediastack API": {
    src: "/images/mediastack.png",
  },
  JavaScript: {
    src: "/images/js-logo.svg",
  },
  TypeScript: {
    src: "/images/typescript-logo.svg",
  },
  "Node.js": {
    src: "/images/node-logo.svg",
  },
  Parcel: {
    src: "/images/parcel-logo.png",
  },
};

export default function Projects() {
  return (
    <main>
      <h1 className="text-6xl text- text-center w-full my-20">Projects</h1>

      <div className="mb-16">
        {projectData &&
          projectData.map((project) => <ProjectCard project={project} />)}
      </div>
    </main>
  );
}

function ProjectCard({ project }: { project: ProjectData }) {
  let linkText = "Link";
  if (project.desktopOnly) linkText += " (desktop only)";

  return (
    <div
      className="collapse border-2 border-black rounded-lg w-11/12 mx-auto p-2 mt-12 shadow-lg "
      key={project.imagePath}
    >
      <input type="checkbox" />
      <div className="collapse-title rounded-lg flex flex-col">
        <h2 className="text-3xl">{project.title}</h2>
        <h4 className="text-lg italic">{project.subtitle}</h4>
      </div>
      <div className="collapse-content">
        <div className="divider"></div>
        <div className="mt-8 flex flex-col lg:flex-row lg:gap-x-4 w-full mx-auto">
          <div className="lg:basis-7/12 xl:basis-1/2 relative">
            <div className="text-sm absolute top-0 left-0 -translate-y-6">
              {project.link && (
                <ProjectLink name={linkText} href={project.link} />
              )}
              {project.article && (
                <ProjectLink name="Article" href={project.article} />
              )}
              {project.video && (
                <ProjectLink name="Video" href={project.video} />
              )}
              {project.source && (
                <ProjectLink name="Source" href={project.source} />
              )}
            </div>
            <Image
              src={project.imagePath}
              className="rounded-xl h-auto mx-auto xl:mx-0 xl:ml-auto"
              width={800}
              height={800}
              alt="profile pic"
            />
          </div>
          <div className="w-11/12 lg:basis-5/12 xl:basis-1/2 max-w-xl mx-auto xl:mx-0 xl:mr-auto lg:pr-8 mt-8 lg:mt-0">
            <ProjectCardTab name="Summary" contents={project.summary} />
            <ProjectCardTab name="Main Features" contents={project.features} />
            <ProjectCardTab
              name="Primary Tools Used"
              contents={
                <PrimaryToolsContents primaryTools={project.primaryTools} />
              }
            />
            <ProjectCardTab
              name="Secondary Tools Used"
              contents={project.secondaryTools}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectLink({ name, href }: { name: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 pr-5"
    >
      {name}
    </a>
  );
}

function ProjectCardTab({
  name,
  contents,
}: {
  name: string;
  contents: React.ReactNode | string[];
}) {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow bg-base-200 border border-green-600"
    >
      <summary className="collapse-title text-xl">{name}</summary>
      <div className="collapse-content">
        <div className="px-4">{contents}</div>
      </div>
    </div>
  );
}

function PrimaryToolsContents({ primaryTools }: { primaryTools: string[] }) {
  return (
    <ul className="flex flex-col gap-y-2 ps-8">
      {primaryTools &&
        primaryTools.map((tool) => {
          return (
            <li key={tool.substring(0, 20)}>
              <div className="flex gap-x-3">
                {toolIcons[tool].src !== "" && (
                  <Image
                    src={toolIcons[tool].src}
                    className={`-ms-8 mr-2 ${
                      toolIcons[tool].invert ? "dark:invert" : ""
                    }`}
                    width={25}
                    height={25}
                    alt={`${tool} logo`}
                  />
                )}
                <p>{tool}</p>
              </div>
            </li>
          );
        })}
    </ul>
  );
}