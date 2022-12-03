const naverLogin = (id) => {
  return '네이버';
};

const kakaoLogin = (id) => {
  return '카카오';
};

const facebookLogin = (id) => {
  return '페이스북';
};

const googleLogin = (id) => {
  return '구글';
};

// 객체로 매핑해서 함수만 모아 놓음
const SocialLoginMap = {
  naver: naverLogin,
  kakao: kakaoLogin,
  facebook: facebookLogin,
  google: googleLogin,
};

const socialLogin = (where, id) => {
  let domain = SocialLoginMap[where](id);
  return `${domain} ${id}`;
};

console.log(socialLogin('naver', 'ming'));
console.log(socialLogin('google', 'ming'));
