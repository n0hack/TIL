const template = `
<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">

    <div class="leading-loose">
      <form id="sign-up-form" class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
        <p class="text-gray-800 font-medium mb-5 text-center">{{title}}</p>
        <div id="required-fields">
        
        </div>
        
        <p class="mt-8 text-gray-300 text-sm">Additional information</p>

        <div id="optional-fields">
        
        </div>

        <div class="mt-4">
          <button id="btn-join" class="px-4 py-1 text-white font-light tracking-wider bg-gray-300 rounded" type="submit">회원 가입</button>
        </div>    
      </form>
    </div>

  </div>
</div>
`;

export default window.Handlebars.compile(template);
