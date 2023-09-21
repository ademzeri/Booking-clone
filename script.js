const email_div = document.querySelector('.email-div');
const password_div = document.querySelector('.password-div');
const form = document.querySelector('form')




form.addEventListener('submit', (e) => {
  const email = document.querySelector('#email').value
  e.preventDefault()
  form.innerHTML = '';
    const newContent = document.createElement('div')
    newContent.innerHTML=
    `
    <div class=" password-div cont mx-auto flex flex-col p-4 my-6 w-fit">
        <div class="mb-6">
            <h1 class="text-2xl font-bold mb-2">Enter your password</h1>
            <p class="">Please enter your Booking.com password for</p>
            <p class="font-bold">${email}</p>
        </div>
        <div class="text-md font-medium flex flex-col gap-2 w-[400px] ">
          <div class="py-2" x-data="{ show: true }">
            <span class="px-1 text-md font-medium">Password</span>
            <div class="relative flex">
              <input placeholder="Enter your password" :type="show ? 'password' : 'text'" class=" mt-2 text-md font-normal block px-3 py-2 rounded-lg w-full 
            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
            focus:placeholder-gray-500
            focus:bg-white 
            focus:border-gray-600  
            focus:outline-none">
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">

                <svg class="h-4 text-gray-700" fill="none" @click="show = !show"
                  :class="{'hidden': !show, 'block':show }" xmlns="http://www.w3.org/2000/svg"
                  viewbox="0 0 576 512">
                  <path fill="currentColor"
                    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                  </path>
                </svg>

                <svg class="h-4 text-gray-700" fill="none" @click="show = !show"
                  :class="{'block': !show, 'hidden':show }" xmlns="http://www.w3.org/2000/svg"
                  viewbox="0 0 640 512">
                  <path fill="currentColor"
                    d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z">
                  </path>
                </svg>

              </div>
            </div>
          </div>
          <button type="button" class=" py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold w-[400px] bg-[#2968ED] text-lg text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all ">
            Sign in
          </button>
        </div>
          <div class="relative flex py-5 items-center w-[400px]">
            <div class="flex-grow border-t border-gray-400"></div>
            <span class="flex-shrink mx-4 ">or</span>
            <div class="flex-grow border-t border-gray-400"></div>
          </div>
          <div class="flex flex-col gap-6">
            <button type="button" class="py-3 px-4 hover:bg-blue-50 inline-flex justify-center items-center gap-2 rounded-md border border-blue-500 font-semibold w-[400px] bg-white text-lg text-blue-500  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all ">
                Sign in with a verification link
            </button>
            <button class=" bg-transparent hover:bg-blue-50 py-2 outline-none text-blue-500 font-semibold mb-3">
                Forgotten your password?
            </button>
          </div>
          <hr>
          <div class="max-w-[400px] text-center p-4">
            <p class="text-sm font-normal">By signing in or creating an account, you agree with our <a class="text-blue-400" href="">Terms & conditions</a> and <a class="text-blue-400" href="">Privacy statement</a></p>
          </div>
          <hr>
          <div class="max-w-[400px] p-4">
            <p class="text-xs font-normal text-center">All rights reserved.<br>
              Copyright (2006 - 2023) - Booking.com™</p>
          </div>
      </div>
    `
    form.appendChild(newContent)
  });