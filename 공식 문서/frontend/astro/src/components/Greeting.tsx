import { useState } from 'preact/hooks';

type Props = {
  messages: string[];
};

export const Greeting = ({ messages }: Props) => {
  const [greeting, setGreeting] = useState(messages[0]);

  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>New Greeting</button>
    </div>
  );
};
