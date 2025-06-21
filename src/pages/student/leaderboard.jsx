import React from "react";
import Sidebar from "../../components/sidebar";
export default function Leaderboard() {
  return (
    <div>
      <Sidebar />
      <div class="p-4 sm:ml-64 bg-teal-900">
        <div class="p-4 rounded-lg dark:border-gray-700 mt-14">
          <section class=" dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
              <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  🏆Leaderboard🏆
                </h2>
                {/* <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p> */}
              </div>
              <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div class="text-center text-gray-500 dark:text-gray-400 bg-teal-700 p-4 shadow-md rounded-lg">
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
                      <div class="w-3/4 h-2 mx-4 bg-teal-500 rounded-sm dark:bg-gray-700 ">
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
                      <div class="w-3/4 h-2 mx-4 bg-teal-500 rounded-sm dark:bg-gray-700">
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
                <div class="text-center text-gray-500 dark:text-gray-400 bg-teal-700 p-4 shadow-md rounded-lg">
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
                      <div class="w-3/4 h-2 mx-4 bg-teal-500 rounded-sm dark:bg-gray-700 ">
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
                      <div class="w-3/4 h-2 mx-4 bg-teal-500 rounded-sm dark:bg-gray-700">
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
                <div class="text-center text-gray-500 dark:text-gray-400 bg-teal-700 p-4 shadow-md rounded-lg">
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
                      <div class="w-3/4 h-2 mx-4 bg-teal-500 rounded-sm dark:bg-gray-700 ">
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
                      <div class="w-3/4 h-2 mx-4 bg-teal-500 rounded-sm dark:bg-gray-700">
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
                <div class="text-center text-gray-500 dark:text-gray-400 bg-teal-700 p-4 shadow-md rounded-lg">
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
                      <div class="w-3/4 h-2 mx-4 bg-teal-500 rounded-sm dark:bg-gray-700 ">
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
                      <div class="w-3/4 h-2 mx-4 bg-teal-500 rounded-sm dark:bg-gray-700">
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
                <div class="text-center text-gray-500 dark:text-gray-400 bg-teal-700 p-4 shadow-md rounded-lg">
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
                      <div class="w-3/4 h-2 mx-4 bg-teal-500 rounded-sm dark:bg-gray-700 ">
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
                      <div class="w-3/4 h-2 mx-4 bg-teal-500 rounded-sm dark:bg-gray-700">
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
                <div class="text-center text-gray-500 dark:text-gray-400 bg-teal-700 p-4 shadow-md rounded-lg">
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
                      <div class="w-3/4 h-2 mx-4 bg-teal-500 rounded-sm dark:bg-gray-700 ">
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
                      <div class="w-3/4 h-2 mx-4 bg-teal-500 rounded-sm dark:bg-gray-700">
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
                <div class="text-center text-gray-500 dark:text-gray-400 bg-teal-700 p-4 shadow-md rounded-lg">
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
                      <div class="w-3/4 h-2 mx-4 bg-teal-500 rounded-sm dark:bg-gray-700 ">
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
                      <div class="w-3/4 h-2 mx-4 bg-teal-500 rounded-sm dark:bg-gray-700">
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
                <div class="text-center text-gray-500 dark:text-gray-400 bg-teal-700 p-4 shadow-md rounded-lg">
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
                      <div class="w-3/4 h-2 mx-4 bg-teal-500 rounded-sm dark:bg-gray-700 ">
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
                      <div class="w-3/4 h-2 mx-4 bg-teal-500 rounded-sm dark:bg-gray-700">
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
    </div>
  );
}
