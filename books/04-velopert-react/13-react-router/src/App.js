import { Link, Route, Routes, useParams } from 'react-router-dom';
import HistorySample from './HistorySample';
import Profile from './Profile';

function Home() {
  return (
    <>
      <h1>홈</h1>
      <p>홈, 그 페이지는 가장 먼저 보여지는 페이지.</p>
    </>
  );
}

function About() {
  return (
    <>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
    </>
  );
}

const NotFound = () => {
  return <div>Not Found</div>;
};

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/velopert?detail=true&test=hi">
            velopert 프로필
          </Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li>
        <li>
          <Link to="/navigate">히스토리</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />}>
          <Route path=":username" element={<Profile />} />
        </Route>
        <Route path="navigate" element={<HistorySample />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
