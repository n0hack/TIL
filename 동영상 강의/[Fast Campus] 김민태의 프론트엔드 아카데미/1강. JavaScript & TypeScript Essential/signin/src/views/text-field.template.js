const template = `
<div class="mb-4">
  <label class="block mb-2 text-sm font-bold text-gray-700" for="{{id}}">
    {{label}}
  </label>
  <input
    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
    id="{{id}}"
    name="{{id}}"
    type="{{type}}"
    placeholder="{{placeholder}}"
    {{#if require}}required{{/if}} 
  />
</div>
`;

export default Handlebars.compile(template);
