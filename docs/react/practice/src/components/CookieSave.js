import React, { useEffect } from 'react';
import cookie from 'react-cookies';

const CookieSave = () => {
  useEffect(() => {
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 3);
    cookie.save('userid', 'react200', {
      expires,
      // httpOnly: true, document.cookie 접근 불가
      // secure: true, https 접속 시에만 쿠키 설정
      path: '/',
    });
    console.log(cookie.load('userid'));
    cookie.remove('userid');
  }, []);

  return (
    <div>
      <h3>React-Cookies Save</h3>
    </div>
  );
};

export default CookieSave;
