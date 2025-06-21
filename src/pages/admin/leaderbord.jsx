import React from "react";

export default function Leaderbord() {
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/tr/b/ba/%C3%9Csk%C3%BCdar_%C3%9Cniversitesi_logo.png"
                  className="h-14 w-14"
                  alt="Flowbite Logo"
                />
                <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">
                  USKUDAR-IQ
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-sm shadow-sm dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/admin"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="ms-3">Home</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/addCours/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14m-7 7V5"
                  />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">
                  Add course
                </span>
                {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                 
                </span> */}
              </a>
            </li>
            <li>
              <a
                href="/admin/createQuiz"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14m-7 7V5"
                  />
                </svg>

                <span class="flex-1 ms-3 whitespace-nowrap">ADD QCMs</span>
              </a>
            </li>
            {/* <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
              </a>
            </li> */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">
                  Leaderbord
                </span>
              </a>
            </li>
            {/* <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Log out</span>
              </a>
            </li> */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m15 19-7-7 7-7"
                  />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Log out</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div className="">
        <section class="bg-white dark:bg-gray-900">
          
      <div class="p-4 sm:ml-64 bg-gray-900">
        <div class="p-4 rounded-lg dark:border-gray-700 mt-14">
          <section class=" dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
              <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-1  00 dark:text-white">
                  🏆Leaderboard🏆
                </h2>
                {/* <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p> */}
              </div>
              <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div class="text-center text-gray-500 dark:text-gray-400 bg-gray-700 p-4 shadow-md rounded-lg">
                  <img
                    class="mx-auto mb-4 w-36 h-36 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    alt="Bonnie Avatar"
                  />
                  <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Bonnie Green</a>
                  </h3>
                  <p className="text-gray-300">Software engineer</p>
                                  <div className="">
                    <div class="flex items-center mt-2 ">
                      <div class="w-3/4 h-2 mx-4 bg-gray-500 rounded-sm dark:bg-gray-700 ">
                        <div
                          class="h-2 bg-yellow-300 rounded-sm"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                      <span class="text-sm font-medium text-white dark:text-gray-400">
                        70%
                      </span>
                    </div>
                    <div class="flex items-center ">
                      <div class="w-3/4 h-2 mx-4 bg-gray-500 rounded-sm dark:bg-gray-700">
                        <div
                          class="h-2 bg-yellow-300 rounded-sm"
                          style={{ width: "17%" }}
                        ></div>
                      </div>
                      <span class="text-sm font-medium text-white dark:text-gray-400">
                        17%
                      </span>
                    </div>
                  </div>
                  <h2 className="text-2xl text-white font-semibold">#1.</h2>

                </div>
                <div class="text-center text-gray-500 dark:text-gray-400 bg-gray-700 p-4 shadow-md rounded-lg">
                  <img
                    class="mx-auto mb-4 w-36 h-36 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                    alt="Helene Avatar"
                  />
                  <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Helene Engels</a>
                  </h3>
                  <p className="text-gray-300">Software engineer</p>
                  <div className="">
                    <div class="flex items-center mt-2 ">
                      <div class="w-3/4 h-2 mx-4 bg-gray-500 rounded-sm dark:bg-gray-700 ">
                        <div
                          class="h-2 bg-yellow-300 rounded-sm"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                      <span class="text-sm font-medium text-white dark:text-gray-400">
                        70%
                      </span>
                    </div>
                    <div class="flex items-center ">
                      <div class="w-3/4 h-2 mx-4 bg-gray-500 rounded-sm dark:bg-gray-700">
                        <div
                          class="h-2 bg-yellow-300 rounded-sm"
                          style={{ width: "17%" }}
                        ></div>
                      </div>
                      <span class="text-sm font-medium text-white dark:text-gray-400">
                        17%
                      </span>
                    </div>
                  </div>
                  <h2 className="text-2xl text-white font-semibold">#2.</h2>

                </div>
                <div class="text-center text-gray-500 dark:text-gray-400 bg-gray-700 p-4 shadow-md rounded-lg">
                  <img
                    class="mx-auto mb-4 w-36 h-36 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="Jese Avatar"
                  />
                  <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Jese Leos</a>
                  </h3>
                  <p className="text-gray-300">Software engineer</p>
                                  <div className="">
                    <div class="flex items-center mt-2 ">
                      <div class="w-3/4 h-2 mx-4 bg-gray-500 rounded-sm dark:bg-gray-700 ">
                        <div
                          class="h-2 bg-yellow-300 rounded-sm"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                      <span class="text-sm font-medium text-white dark:text-gray-400">
                        70%
                      </span>
                    </div>
                    <div class="flex items-center ">
                      <div class="w-3/4 h-2 mx-4 bg-gray-500 rounded-sm dark:bg-gray-700">
                        <div
                          class="h-2 bg-yellow-300 rounded-sm"
                          style={{ width: "17%" }}
                        ></div>
                      </div>
                      <span class="text-sm font-medium text-white dark:text-gray-400">
                        17%
                      </span>
                    </div>
                  </div>
                  <h2 className="text-2xl text-white font-semibold">#3.</h2>
 
                </div>
                <div class="text-center text-gray-500 dark:text-gray-400 bg-gray-700 p-4 shadow-md rounded-lg">
                  <img
                    class="mx-auto mb-4 w-36 h-36 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                    alt="Joseph Avatar"
                  />
                  <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Joseph Mcfall</a>
                  </h3>
                  <p className="text-gray-300">Software engineer</p>
                                  <div className="">
                    <div class="flex items-center mt-2 ">
                      <div class="w-3/4 h-2 mx-4 bg-gray-500 rounded-sm dark:bg-gray-700 ">
                        <div
                          class="h-2 bg-yellow-300 rounded-sm"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                      <span class="text-sm font-medium text-white dark:text-gray-400">
                        70%
                      </span>
                    </div>
                    <div class="flex items-center ">
                      <div class="w-3/4 h-2 mx-4 bg-gray-500 rounded-sm dark:bg-gray-700">
                        <div
                          class="h-2 bg-yellow-300 rounded-sm"
                          style={{ width: "17%" }}
                        ></div>
                      </div>
                      <span class="text-sm font-medium text-white dark:text-gray-400">
                        17%
                      </span>
                    </div>
                  </div>
                  <h2 className="text-2xl text-white font-semibold">#4.</h2>

                </div>
                <div class="text-center text-gray-500 dark:text-gray-400 bg-gray-700 p-4 shadow-md rounded-lg">
                  <img
                    class="mx-auto mb-4 w-36 h-36 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                    alt="Sofia Avatar"
                  />
                  <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Lana Byrd</a>
                  </h3>
                  <p className="text-gray-300">Software engineer</p>
                                  <div className="">
                    <div class="flex items-center mt-2 ">
                      <div class="w-3/4 h-2 mx-4 bg-gray-500 rounded-sm dark:bg-gray-700 ">
                        <div
                          class="h-2 bg-yellow-300 rounded-sm"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                      <span class="text-sm font-medium text-white dark:text-gray-400">
                        70%
                      </span>
                    </div>
                    <div class="flex items-center ">
                      <div class="w-3/4 h-2 mx-4 bg-gray-500 rounded-sm dark:bg-gray-700">
                        <div
                          class="h-2 bg-yellow-300 rounded-sm"
                          style={{ width: "17%" }}
                        ></div>
                      </div>
                      <span class="text-sm font-medium text-white dark:text-gray-400">
                        17%
                      </span>
                    </div>
                  </div>
                  <h2 className="text-2xl text-white font-semibold">#5.</h2>

                </div>
                <div class="text-center text-gray-500 dark:text-gray-400 bg-gray-700 p-4 shadow-md rounded-lg">
                  <img
                    class="mx-auto mb-4 w-36 h-36 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
                    alt="Leslie Avatar"
                  />
                  <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Leslie Livingston</a>
                  </h3>
                  <p className="text-gray-300">Software engineer</p>
                                  <div className="">
                    <div class="flex items-center mt-2 ">
                      <div class="w-3/4 h-2 mx-4 bg-gray-500 rounded-sm dark:bg-gray-700 ">
                        <div
                          class="h-2 bg-yellow-300 rounded-sm"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                      <span class="text-sm font-medium text-white dark:text-gray-400">
                        70%
                      </span>
                    </div>
                    <div class="flex items-center ">
                      <div class="w-3/4 h-2 mx-4 bg-gray-500 rounded-sm dark:bg-gray-700">
                        <div
                          class="h-2 bg-yellow-300 rounded-sm"
                          style={{ width: "17%" }}
                        ></div>
                      </div>
                      <span class="text-sm font-medium text-white dark:text-gray-400">
                        17%
                      </span>
                    </div>
                  </div>
                  <h2 className="text-2xl text-white font-semibold">#6.</h2>

                </div>
                <div class="text-center text-gray-500 dark:text-gray-400 bg-gray-700 p-4 shadow-md rounded-lg">
                  <img
                    class="mx-auto mb-4 w-36 h-36 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    alt="Michael Avatar"
                  />
                  <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Michael Gough</a>
                  </h3>
                  <p className="text-gray-300">Software engineer</p>
                <div className="">
                    <div class="flex items-center mt-2 ">
                      <div class="w-3/4 h-2 mx-4 bg-gray-500 rounded-sm dark:bg-gray-700 ">
                        <div
                          class="h-2 bg-yellow-300 rounded-sm"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                      <span class="text-sm font-medium text-white dark:text-gray-400">
                        70%
                      </span>
                    </div>
                    <div class="flex items-center ">
                      <div class="w-3/4 h-2 mx-4 bg-gray-500 rounded-sm dark:bg-gray-700">
                        <div
                          class="h-2 bg-yellow-300 rounded-sm"
                          style={{ width: "17%" }}
                        ></div>
                      </div>
                      <span class="text-sm font-medium text-white dark:text-gray-400">
                        17%
                      </span>
                    </div>
                  </div>
                  <h2 className="text-2xl text-white font-semibold">#7.</h2>

                </div>
                <div class="text-center text-gray-500 dark:text-gray-400 bg-gray-700 p-4 shadow-md rounded-lg">
                  <img
                    class="mx-auto mb-4 w-36 h-36 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
                    alt="Neil Avatar"
                  />
                  <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Neil Sims</a>
                  </h3>
                  <p className="text-gray-300">Software engineer</p>
                                  <div className="">
                    <div class="flex items-center mt-2 ">
                      <div class="w-3/4 h-2 mx-4 bg-gray-500 rounded-sm dark:bg-gray-700 ">
                        <div
                          class="h-2 bg-yellow-300 rounded-sm"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                      <span class="text-sm font-medium text-white dark:text-gray-400">
                        70%
                      </span>
                    </div>
                    <div class="flex items-center ">
                      <div class="w-3/4 h-2 mx-4 bg-gray-500 rounded-sm dark:bg-gray-700">
                        <div
                          class="h-2 bg-yellow-300 rounded-sm"
                          style={{ width: "17%" }}
                        ></div>
                      </div>
                      <span class="text-sm font-medium text-white dark:text-gray-400">
                        17%
                      </span>
                    </div>
                  </div>
                  <h2 className="text-2xl text-white font-semibold">#8.</h2>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
        </section>
      </div>
    </div>
  );
}
