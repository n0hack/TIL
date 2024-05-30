export const registerTemplate = `<form method="post" action="/auth/register">\
<div>\
  <label>회원명:</label>\
  <input type="text" name="username"/><br/>\
</div>\
<div>\
  <label>비밀번호:</label>\
  <input type="password" name="password"/><br/>\
</div>\
<div>\
  <input type="submit" value="회원가입"/>\
</div>\
</form>`;

export const loginTemplate =
  '<form method="post" action="/auth/login">\
<div>\
  <label>회원명:</label>\
  <input type="text" name="username"/><br/>\
</div>\
<div>\
  <label>비밀번호:</label>\
  <input type="password" name="password"/><br/>\
</div>\
<div>\
  <input type="submit" value="로그인"/>\
</div>\
</form>';
