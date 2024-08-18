import { css } from '../styled-system/css';

const style = css({
  fontSize: '2xl',
  '& span': {
    color: 'pink.400',
  },
});

function App() {
  return (
    <div className={style}>
      <p className={css({ color: 'primary' })}>Bliss River</p>
      <p className={css({ color: 'bliss.50' })}>Bliss Alizarin</p>
      <span>Span</span>
    </div>
  );
}

export default App;
