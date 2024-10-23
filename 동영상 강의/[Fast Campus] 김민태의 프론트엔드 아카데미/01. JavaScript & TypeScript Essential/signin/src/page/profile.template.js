const template = `
<div class="container mx-auto my-60">
    <div>
        <div class="bg-white relative shadow-xl w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
            <div class="flex justify-center">
                <img src="{{userProfile.picture.large}}" alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl border-4 border-white">
            </div>
            
            <div class="mt-16">
                <h1 class="font-bold text-center text-3xl text-gray-900">
                    {{userProfile.name.first}} {{userProfile.name.last}}
                </h1>
                <p class="text-center text-sm text-gray-400 font-medium">Full Stack Developer at Pantazi Software</p>
                <div class="my-5">
                    <a href="#" class="text-indigo-200 block text-center font-medium leading-6 px-6 py-3 bg-indigo-600">Connect with <span class="font-bold">{{userProfile.email}}</span></a>
                </div>
                <div class="flex justify-evenly my-5">
                    <a href="#" class="bg font-bold text-sm text-blue-800 w-full text-center py-3 hover:bg-blue-800 hover:text-white hover:shadow-lg">Facebook</a>
                    <a href="#" class="bg font-bold text-sm text-blue-400 w-full text-center py-3 hover:bg-blue-400 hover:text-white hover:shadow-lg">Twitter</a>
                    <a href="#" class="bg font-bold text-sm text-yellow-600 w-full text-center py-3 hover:bg-yellow-600 hover:text-white hover:shadow-lg">Instagram</a>
                    <a href="#" class="bg font-bold text-sm text-gray-600 w-full text-center py-3 hover:bg-gray-600 hover:text-white hover:shadow-lg">Email</a>
                </div>

                <div class="w-full">
                    <h3 class="font-bold text-gray-600 text-left px-4">Recent Posts</h3>
                    <div class="mt-5 w-full">
                        {{#each posts}}
                        <a href="#" class="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150">
                            <img src="https://pantazisoft.com/img/avatar-2.jpeg" alt="" class="rounded-full h-6 shadow-md inline-block mr-2">
                                {{title}}
                                <span class="text-gray-400 text-sm">24 min ago</span>
                        </a>
                        {{/each}}                        
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
`;

export default Handlebars.compile(template);
