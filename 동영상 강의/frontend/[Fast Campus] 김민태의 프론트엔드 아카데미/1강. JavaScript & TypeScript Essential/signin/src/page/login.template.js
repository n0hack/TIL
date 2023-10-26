const template = `
<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div class="container mx-auto">
    <div class="flex justify-center px-6 my-12">
      <div class="w-full xl:w-3/4 lg:w-11/12 shadow-xl flex">
        <div class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
          style="background-image: url('https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3369&q=80')"></div>
        <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
          <h1 class="pt-4 text-4xl text-center mb-20">{{title}}</h1>
          <form id="login-form" class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
            <div id="login-fields">            
            </div>
            
            {{#if loginFail}}
            <p class="text-xs italic text-red-500 mb-5">아이디 또는 비밀번호를 확인할 수 없습니다.</p>
            {{/if}}
            
            <div class="mb-4">
              <input class="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
              <label class="text-sm" for="checkbox_id">로그인 정보 기억</label>
            </div>
            <div class="mb-6 text-center">
              <button
                class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit">로그인</button>
            </div>
            
            <div class="text-center">
              <a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                href="/#/signup">회원 가입</a>
            </div>
            <div class="text-center">
              <a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                href="/#/lost-password">비밀번호를 잊으셨나요?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
</div>
`;

export default Handlebars.compile(template);
