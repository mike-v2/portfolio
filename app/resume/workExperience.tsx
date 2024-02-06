import { JobData } from "@/types/jobData";

const jobData: JobData[] = [
  {
    title: "Full Stack Engineer",
    company: "Sliike",
    date: "Oct 2023 - Present",
    description: [
      "Collaboratively developed reusable UI components in React/Next.js",
      "Developed a secure and user-friendly authentication system leveraging Express, Passport, and MongoDB",
    ],
  },
  {
    title: "Tutor",
    company: "Various organizations and Freelance",
    date: "2008 - 2023",
    description: [
      "Provided tutoring in Math, Physics, and Biology, offering one-on-one and group assistance",
      "Developed interpersonal skills through empathy, patience, and clear communication",
      "Gained proficiency in explaining complex concepts in an understandable manner",
    ],
  },
];

export default function WorkExperience() {
  return (
    <div className="py-6">
      <h2 className="font-bold">WORK EXPERIENCE</h2>
      {jobData && jobData.map((job) => <Job {...job} />)}
    </div>
  );
}

function Job({ title, company, date, description }: JobData) {
  return (
    <>
      <div className="flex justify-between pt-4">
        <p className="font-bold">{title}</p>
        <div className="divider divider-horizontal"></div>
        <p>{company}</p>
        <div className="divider divider-horizontal"></div>
        <p className="font-bold">{date}</p>
      </div>
      <ul className="flex flex-col gap-y-2 list-disc ps-8 pt-4">
        {description && description.map((item) => <li>{item}</li>)}
      </ul>
    </>
  );
}
