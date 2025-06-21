import React from "react";
import Sidebar from "../../components/sidebar";
export default function Index() {
  return (
    <div>
      <Sidebar />
      <div class="p-4 sm:ml-64 bg-teal-900">
        <div class="p-4 rounded-lg dark:border-gray-700 mt-14">
          <div className="bg-teal-500 rounded-2xl p-8 mt-8">
            <h1 className="text-6xl font-bold ">Hi, Soufiane 👋</h1>
            <p className="mt-4">
              Welcome to your personal learning space. Here you can easily
              access your PDF courses and test your knowledge <br /> with
              interactive QCM quizzes. Let’s keep learning and growing—one
              question at a time!
            </p>
          </div>
          <div className="mt-8">
            <h1 className="text-2xl text-teal-200 font-bold">
              What would you like to do today?
            </h1>
            <p className="text-teal-500">
              Ready to dive into your courses or challenge yourself with a quick
              quiz? Choose your path and keep moving forward!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-8">
            <div>
              <a
                href="#"
                class="flex flex-col items-center bg-teal-500 border border-teal-900 rounded-xl shadow-sm md:flex-row md:max-w-xl hover:bg-teal-600 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <svg
                  class="w-64 h-64 text-yellow-300 dark:text-white"
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
                    d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
                  />
                </svg>

                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    📚 Courses
                  </h5>
                  <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Access your course materials anytime, anywhere.
                  </h2>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Browse and read your PDF lessons at your own pace. Each
                    course is organized to help you stay focused and make the
                    most of your study time
                  </p>
                </div>
              </a>
            </div>
            <div>
              <a
                href="#"
                class="flex flex-col items-center bg-teal-500 border border-teal-900 rounded-xl shadow-sm md:flex-row md:max-w-xl hover:bg-teal-600 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <svg
                  class="w-64 h-64 text-yellow-300 dark:text-white"
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
                    d="M12 18.5A2.493 2.493 0 0 1 7.51 20H7.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .92-3.182 2.477 2.477 0 0 1 1.876-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 12 5.5m0 13v-13m0 13a2.493 2.493 0 0 0 4.49 1.5h.01a2.468 2.468 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.477 2.477 0 0 0-1.875-3.344A2.5 2.5 0 0 0 14.5 3 2.5 2.5 0 0 0 12 5.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M20 10.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185"
                  />
                </svg>
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    ✅ QCM Quizzes
                  </h5>
                  <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Test your knowledge and track your progress.
                  </h2>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Answer multiple-choice questions (QCM) based on your
                    courses. It's a quick and effective way to review and see
                    how much you've learned.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
