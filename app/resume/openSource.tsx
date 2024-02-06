export default function OpenSource() {
  return (
    <div className="py-6">
      <h2 className="font-bold pb-4">OPEN SOURCE CONTRIBUTIONS</h2>
      <div className="flex flex-col gap-y-4">
        <div className="">
          <div className="flex">
            <h4 className="font-bold pb-2">
              Flutter Packages Repository (Contributor)
            </h4>
            <div className="ms-auto">
              <div className="flex gap-x-4 text-sm">
                <a
                  href="https://github.com/flutter/packages/pull/5347"
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  PR#5347
                </a>
                <a
                  href="https://github.com/flutter/packages/pull/5498"
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  PR#5498
                </a>
              </div>
            </div>
          </div>

          <ul className="flex flex-col gap-y-2 list-disc ps-8">
            <li>
              Improved documentation and code quality by extracting code
              snippets from READMEs into separate compilable files, ensuring
              accurate syntax and usage.
            </li>
            <li>
              Collaborated on a significant open-source project managed by
              Google, demonstrating effective teamwork in a large-scale, diverse
              environment, and contributed to a widely-used codebase.
            </li>
            <li>
              <span className="font-bold">Skills:</span> Flutter, Documentation
              Standards, Git
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
