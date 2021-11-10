import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/invoices">Invoices</Link> |{' '}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
  // return (
  //   <div>
  //     <ul>
  //       <li>
  //         <Link to="/">홈</Link>
  //       </li>
  //       <li>
  //         <Link to="/about">소개</Link>
  //       </li>
  //       <li>
  //         <Link to="/info">정보</Link>
  //       </li>
  //       <li>
  //         <Link to="/profile/velopert">velopert 프로필</Link>
  //       </li>
  //       <li>
  //         <Link to="/info">nohack 프로필</Link>
  //       </li>
  //     </ul>
  //     <hr />
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/profile/:username" component={<Profile />}></Route>
  //       <Route path="*" element={<div>없는 페이지입니다.</div>} />
  //     </Routes>
  //   </div>
  // );
}

export default App;
