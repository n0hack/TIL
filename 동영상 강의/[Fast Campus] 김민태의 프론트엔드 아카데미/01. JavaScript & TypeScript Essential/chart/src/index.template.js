const template = `
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <!-- Container -->
    <div class="container mx-auto">
      <div class="flex justify-center px-6 my-12 ">
        <!-- Row -->
        <div class="w-full xl:w-3/4 lg:w-11/12 shadow-xl flex">
          <!-- Col -->
          <div
            class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
            style="background-image: url('https://images.unsplash.com/photo-1602918386084-58983c3bafac?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80')"            
          ></div>
          <!-- Col -->
          <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none p-16">

            <h3 class="pt-4 text-2xl text-center mb-20">Javascript & Typescript Essential Chapter 5 - Chart</h3>

            <div id="chart"></div>
          </div>
        </div>
      </div>
    </div>
</div>
`;

export default Handlebars.compile(template);

