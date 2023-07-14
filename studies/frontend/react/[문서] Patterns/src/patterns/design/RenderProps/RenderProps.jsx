import Body from './Body';
import Title from './Title';

const RenderProps = () => {
  return (
    <div>
      <Title render={() => <h1>I am render prop!</h1>} />
      <Body render={(data) => <div>{data}입니다!</div>} />
    </div>
  );
};

export default RenderProps;
