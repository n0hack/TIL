import { useState } from 'preact/hooks';

type GreetingProps = {
  messages: string[];
};

const Greeting = ({ messages }: GreetingProps) => {
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! 방문 감사합니다.</h3>
      <button onClick={() => setGreeting(randomMessage())}>새로운 인사</button>
    </div>
  );
};

export default Greeting;
