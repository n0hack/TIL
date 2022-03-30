import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="gnb_box">
      <div className="hd_top">
        <div className="top_wrap ct1 af">
          <ul className="hd_left af">
            <li className="my1">
              <b>내정보</b>
            </li>
            <li className="my2">
              <b>
                <span>1</span>알림
              </b>
            </li>
          </ul>
          <div className="hd_right">
            <p>
              <span>'홍길동'</span>님 반갑습니다.
            </p>
          </div>
        </div>
      </div>
      <div className="h_nav ct1 af">
        <div className="logo">
          <Link to={'/'}>
            <img
              src={require('../../img/layout/logo.jpg')}
              height="65px"
              width="200px"
              alt=""
            />
          </Link>
        </div>
        <nav className="gnb gnb_admin">
          <ul className="af">
            <li className="menulist">
              <Link to={'/UserApproval'}>사용자 관리</Link>
            </li>
            <li className="menulist">
              <Link to={'/AdminResearchProject'}>Research Projects 관리</Link>
            </li>
            <li className="menulist">
              <Link to={'/AdminSoftwareList'}>Software Tools 관리</Link>
            </li>
            <li className="menulist">
              <Link to={'/AdminDataSourceList'}>Data Sources 관리</Link>
            </li>
            {/* 드롭다운 이벤트 */}
            <li className="menulist">
              <Link to={'/floatPopulationList'}>유동인구 조회</Link>
              <ul className="gn_2">
                <li>
                  <Link to={'/community/notice'}>공지사항</Link>
                </li>
              </ul>
            </li>
            <li className="menulist">
              <Link to={'/SubCodeManage'}>Sub code 관리</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
