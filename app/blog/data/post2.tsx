import { Anchor } from '@/components/anchor';
import { BlogPost } from '@/types/postData';
import Header4 from '../components/header4';
import CodeBlock from '../components/codeBlock';

export const post2: BlogPost = {
  title: 'Deep Dive into Software Testing: Handling Comment Edits',
  date: '2023-09-27',
  link: 'https://www.linkedin.com/posts/michael-mcguiness-react_softwaretesting-react-nextjs-activity-7112922913929924608-nKlT',
  content: (
    <div className='flex flex-col gap-y-4'>
      <p>Hey LinkedIn Learners,</p>
      <p>
        {`Today, I'd like to share a snippet from one of my software tests,
          written in Jest for a React/Next.js app. While we often talk about the
          importance of building robust features, it's equally crucial to ensure
          those features work flawlessly under various scenarios. Let's delve
          into one such test!`}
      </p>

      <Header4>The Setup</Header4>
      <p>
        {`We've got a post with comments, and users should be able to edit their
          own comments. We start with a mock comment and aim to modify it.`}
      </p>
      <CodeBlock>
        <p>{`const specialComments = [{ ... text: 'old comment' }];`}</p>
      </CodeBlock>

      <Header4>The Sequence</Header4>
      <p>1. Simulate user interaction to expand a post.</p>
      <CodeBlock>{`fireEvent.click(getByText(mockPost.title));`}</CodeBlock>
      <p>{`2. Open the menu that is attached to the user's comment.`}</p>
      <CodeBlock>
        <p>{`fireEvent.click(getByLabelText('Open menu'));`}</p>
        <p>{`fireEvent.click(getByText('Edit'));`}</p>
      </CodeBlock>
      <p>3. Edit the comment content.</p>
      <CodeBlock>
        <p>{`const input = getByLabelText('Edit Comment Input');`}</p>
        <p>{`userEvent.clear(input);`}</p>
        <p>{`await userEvent.type(input, 'This is an edited comment');`}</p>
      </CodeBlock>

      <p>4. Submit the changes.</p>
      <CodeBlock>{`fireEvent.click(getByText('Submit'));`}</CodeBlock>

      <Header4>The Magic</Header4>
      <ul className='list-disc ps-4'>
        <li>
          For UI interactions, we leverage both fireEvent and userEvent
          functions.
        </li>
        <li>
          For typing in inputs, we prefer userEvent over a simple fireEvent.
          Why? Because userEvent.type closely mimics human behavior by focusing
          on the input, and simulating the keypress of each individual
          character, offering a more realistic interaction for our tests.
        </li>
        <li>
          Given the async nature of user events, we deploy async/await to handle
          these gracefully.
        </li>
      </ul>

      <Header4>The Validation</Header4>
      <p>
        {`Post-edit, our test checks if the comment's content has been updated
          in the UI. The expectation? To find the revised comment - 'This is an
          edited comment'.`}
      </p>
      <CodeBlock>{`expect(await findByText('This is an edited comment')).toBeInTheDocument();`}</CodeBlock>

      <p>
        The importance of such tests? Ensuring that our users experience a
        seamless and bug-free environment while interacting with the app.
      </p>
      <p>
        Check out the{' '}
        <Anchor href='https://github.com/mike-v2/journal-search/blob/main/tests/postBox.test.tsx'>
          full test
        </Anchor>
        .
      </p>
      <p>
        Would love to hear your thoughts or any tips on enhancing software
        testing!
      </p>
    </div>
  ),
};
