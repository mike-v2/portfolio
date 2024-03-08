export default function Skills() {
  return (
    <div className="py-6">
      <h2 className="font-bold">TECHNICAL SKILLS</h2>
      <ul className="flex flex-col gap-y-2 pt-4">
        <li>
          <span className="font-bold">Front End:</span> HTML, CSS, JavaScript,
          Typescript, React, Next.js, Tailwind CSS
        </li>
        <li>
          <span className="font-bold">Back End:</span> Prisma, Supabase,
          Firebase, Mongoose/MongoDB
        </li>
        <li>
          <span className="font-bold">Cloud Services:</span> Google Cloud
          Storage, Google Cloud Run, Google Cloud Functions
        </li>
        <li>
          <span className="font-bold">Others:</span> Jest, Git, Python, C#
        </li>
        <li>
          <span className="font-bold">Concepts:</span>Testing, Version Control,
          REST API, AJAX, AGILE, PostgreSQL, NoSQL
        </li>
      </ul>
    </div>
  );
}
