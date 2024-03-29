import { Anchor } from '@/components/anchor';

const flutterPRs = [
  {
    href: 'https://github.com/flutter/packages/pull/5347',
    name: 'PR#5347',
  },
  {
    href: 'https://github.com/flutter/packages/pull/5478',
    name: 'PR#5478',
  },
  {
    href: 'https://github.com/flutter/packages/pull/5496',
    name: 'PR#5496',
  },
  {
    href: 'https://github.com/flutter/packages/pull/5498',
    name: 'PR#5498',
  },
  {
    href: 'https://github.com/flutter/packages/pull/5521',
    name: 'PR#5521',
  },
  {
    href: 'https://github.com/flutter/packages/pull/5567',
    name: 'PR#5567',
  },
];

export default function OpenSource() {
  return (
    <div className='py-6'>
      <h2 className='pb-4 font-bold'>OPEN SOURCE CONTRIBUTIONS</h2>
      <div className='flex w-full'>
        <h4 className='flex-auto pb-2 font-bold'>
          Flutter Packages Repository (Contributor)
        </h4>
        <div className='flex flex-auto flex-wrap justify-end gap-x-4 text-sm'>
          {flutterPRs &&
            flutterPRs.map((pr) => (
              <Anchor key={pr.name} href={pr.href}>
                {pr.name}
              </Anchor>
            ))}
        </div>
      </div>

      <ul className='flex list-disc flex-col gap-y-2 ps-8'>
        <li>
          Improved documentation and code quality by extracting code snippets
          from READMEs into separate compilable files, ensuring accurate syntax
          and usage.
        </li>
        <li>
          Collaborated on a significant open-source project managed by Google,
          demonstrating effective teamwork in a large-scale, diverse
          environment, and contributed to a widely-used codebase.
        </li>
        <li>
          Enhanced tool support by adding functionality for .java, .gradle, .sh,
          and .m files, integrating 9 commits into the main branch (PR #5567),
          improving language versatility and developer experience.
        </li>
      </ul>
    </div>
  );
}
