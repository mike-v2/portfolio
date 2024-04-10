import Image from 'next/image';

import { Anchor } from '@/components/anchor';
import { BlogPost } from '@/types/postData';
import Header2 from '@/app/blog/components/header2';
import Header4 from '@/app/blog/components/header4';

export const post3: BlogPost = {
  id: '3',
  imagePath: '/images/blog-journal.jpg',
  title: 'Deciphering the Past: A Journey of Transcribing Handwritten Journals',
  date: '2023-09-30',
  link: 'https://www.linkedin.com/posts/michael-mcguiness-react_adding-authentication-to-my-nextjs-app-with-activity-7117230565690380289-NnMw',
  content: (
    <div className='flex flex-col gap-y-4'>
      <p>
        {`Holding my great grandfather's journals, a torrent of possibilities
          rushed through my mind. Visions of a digital sanctuary where these
          pages could come alive—searchable entries that users could revisit and
          bookmark, a space where every passage, every memory, every sentiment
          would be just a click away. I even dreamt of crafting a chatbot, a
          virtual echo of my great grandfather, brought to life through his own
          words and stories. The excitement was palpable, yet all these grand
          aspirations shared one foundational need: an accurate digital
          transcription of the decades-old text.`}
      </p>

      <Header2>
        Challenge: Accurate Transcription of Handwritten Journals
      </Header2>
      <p>
        {`The elegance of my great grandfather's cursive posed a surprising
          obstacle. While today it seems like AI can do anything, transcription
          AIs faltered before this challenge. Initial attempts with Google
          Vision API yielded disappointing results. I was confident I was on the
          right track but felt like I hit a wall. The AI had an accuracy rate of
          just 64% - nowhere near precise enough for preserving family history.`}
      </p>
      <Image
        src='/images/ocrPost/entry-short.jpg'
        width={0}
        height={0}
        sizes='100vw'
        className='mx-auto h-auto w-full max-w-2xl'
        alt='Journal entry with cursive handwriting'
      />

      <div>
        <Header4>Google Vision output of the above entry:</Header4>
        <p>(confidence values are displayed next to each word)</p>
      </div>
      <p>
        66 97 Juve 26 Amen 64 . 40 Sulfer 33 th 40 Saturday 94 , 89 Long 83 , 40
        long 50 after 62 the 99 premt 85 generation 82 has 74 gone 80 . 51 the
        96 great 97 was 84 In 80 which 97 the 99 vations 81 are 95 now 99 locked
        84 , 77 has 62 posssed 60 , 76 June 80 6 87 , 80 1944 95 will 83 be 91 a
        93 great 93 historic 83 day 97 . 79 The 98 day
      </p>

      <Header4>GPT-4 reconstruction of Google Vision output:</Header4>
      <p>
        Jun. 6: Long after the present generation has gone, the great war in
        which the nations are now locked will be remembered. June 6, 1944 will
        be a great historic day. The day
      </p>

      <Header4>Accuracy</Header4>
      <p>
        (measured with{' '}
        <Anchor href='https://app.copyleaks.com/text-compare'>Copyleaks</Anchor>
        )
      </p>
      <Image
        src='/images/ocrPost/compare-before.png'
        width={0}
        height={0}
        sizes='100vw'
        className='mx-auto h-auto w-full max-w-2xl'
        alt='String comparison tool showing 63.9% similarity'
      />

      <Header2>The Solution</Header2>
      <p>
        I noticed that sometimes Google Vision would mix words from different
        lines. But what if I could make the AI focus on one line at a time? With
        this in mind, I turned to{' '}
        <Anchor href='https://github.com/clovaai/CRAFT-pytorch'>
          CRAFT AI
        </Anchor>
        . By identifying and isolating individual lines of text, I hoped to
        present clearer data for Google Vision to interpret.
      </p>

      <p>First, I used CRAFT AI to identify each word:</p>
      <Image
        src='/images/ocrPost/boxes-short.jpg'
        width={0}
        height={0}
        sizes='100vw'
        className='mx-auto h-auto w-full max-w-2xl'
        alt='Journal entry with boxes around each word'
      />
      <p>
        Using some python algorithms, I could use the CRAFT boxes to identify
        the boundaries of each line
      </p>
      <Image
        src='/images/ocrPost/lines-short.jpg'
        width={0}
        height={0}
        sizes='100vw'
        className='mx-auto h-auto w-full max-w-2xl'
        alt='Journal entry with lines separating each line of text'
      />

      <p>
        Then I could make a new image from each line, starting with the first
        line:
      </p>
      <Image
        src='/images/ocrPost/line-1.jpg'
        width={0}
        height={0}
        sizes='100vw'
        className='mx-auto h-auto w-full max-w-2xl'
        alt='The first line of a journal entry'
      />
      <p>Then the second line:</p>
      <Image
        src='/images/ocrPost/line-2.jpg'
        width={0}
        height={0}
        sizes='100vw'
        className='mx-auto h-auto w-full max-w-2xl'
        alt='The second line of a journal entry'
      />
      <p>And third (and so on...)</p>
      <Image
        src='/images/ocrPost/line-3.jpg'
        width={0}
        height={0}
        sizes='100vw'
        className='mx-auto h-auto w-full max-w-2xl'
        alt='The third line of a journal entry'
      />

      <Header4>Results</Header4>
      <Image
        src='/images/ocrPost/compare-after.png'
        width={0}
        height={0}
        sizes='100vw'
        className='mx-auto h-auto w-full max-w-2xl'
        alt='String comparison tool showing 85.7% similarity'
      />
      <p>
        {`The proof was in the transcription. A comparison of the AI's results
          using the entire page versus individual lines showed a remarkable
          improvement. From a mediocre 64%, accuracy soared to a commendable 86%
          !!`}
      </p>

      <Header2>Conclusion</Header2>
      <p>
        {`The journey from an age-old journal to a digitized archive was
          challenging but incredibly rewarding. With every stumbling block, I
          found ways to innovate and move forward. The end product not only
          preserves my family's history but makes it more accessible than ever.`}
      </p>
      <p>
        {`As for the tools and techniques I discovered and employed, they're not
          just about this project. They're about the resilience and
          resourcefulness of self-taught developers. Whether it's a familial
          treasure or a personal project, with determination and the right
          resources, anything is possible.`}
      </p>
      <p>
        View the full{' '}
        <Anchor href='https://github.com/mike-v2/journal-search'>
          source code
        </Anchor>
        .
      </p>
      <p>
        Checkout{' '}
        <Anchor href='https://journal-search.vercel.app'>the website</Anchor> in
        action.
      </p>
    </div>
  ),
};
