import ReactDOMClient from 'react-dom/client';
import Game from './Game';
import './index.css';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<Game />);
