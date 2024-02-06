import Education from "./education";
import OpenSource from "./openSource";
import Projects from "./projects";
import Publications from "./publications";
import Skills from "./skills";
import WorkExperience from "./workExperience";

export default function Resume() {
  return (
    <main className="">
      <div className="w-full max-w-5xl px-2 md:px-0 md:w-5/6 lg:w-3/4 mx-auto mt-12">
        <div className="flex">
          <h4 className="font-bold text-xl">Michael McGuiness</h4>
          <p className="flex flex-col justify-center ms-auto">Vancouver, WA</p>
        </div>

        <Divider />

        <WorkExperience />

        <Divider />

        <OpenSource />

        <Divider />

        <Projects />

        <Divider />

        <Education />

        <Divider />

        <Skills />

        <Divider />

        <Publications />
      </div>
    </main>
  );
}

function Divider() {
  return (
    <>
      <div className="divider my-0 before:bg-black after:bg-black dark:before:bg-slate-400 dark:after:bg-slate-400"></div>
      <div className="divider my-0 before:bg-green-600 after:bg-green-600"></div>
    </>
  );
}
