export default function Education() {
  return (
    <div className="py-6">
      <h2 className="font-bold">EDUCATION</h2>
      <div className="flex flex-col gap-y-2 pt-4">
        <div className="flex justify-between">
          <p>
            <span className="font-bold sm:whitespace-nowrap">
              Bachelor of Science in Mathematics
            </span>
            , Cum Laude
          </p>
          <div className="divider divider-horizontal"></div>
          <p>Washington State University</p>
          <div className="divider divider-horizontal"></div>
          <p className="font-bold sm:whitespace-nowrap">2007 - 2010</p>
        </div>
        <div className="flex justify-between">
          <p>
            <span className="font-bold sm:whitespace-nowrap">
              Bachelor of Science in Biotechnology
            </span>
            , Cum Laude
          </p>
          <div className="divider divider-horizontal"></div>
          <p>Washington State University</p>
          <div className="divider divider-horizontal"></div>
          <p className="font-bold sm:whitespace-nowrap">2007 - 2010</p>
        </div>
      </div>
    </div>
  );
}
