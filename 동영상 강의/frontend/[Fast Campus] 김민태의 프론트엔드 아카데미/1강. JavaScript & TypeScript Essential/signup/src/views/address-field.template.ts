const template = `
<div id="field-{{id}}">

  <div class="mt-2">
    <label class="block text-sm" for="cus_email">{{label}}</label>
    <div class="flex items-center">
      <input id="address1" name="address1" type="text" value="{{displayAddress}}" placeholder="주소를 검색해 주세요" class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded">
      <button id="search-address" class="bg-gray-300 text-gray-500 px-1 py-1 rounded shadow " style="margin-left: -3rem;">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </button>
    </div>
  </div>

  <div class="mt-2">
    <label class="hidden text-sm block text-gray-600" for="address2">상세 주소</label>
    <input id="address2" name="address2" type="text" placeholder="상세 주소" aria-label="Address 2" class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" >
  </div>

</div>
`;

export default window.Handlebars.compile(template);
