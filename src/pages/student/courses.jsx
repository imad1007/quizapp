import React from 'react'
import Sidebar from '../../components/sidebar'
export default function Courses() {
  return (
    <div>
        <Sidebar/>
      <div class="p-4 sm:ml-64 bg-teal-900">
        <div class="p-4 rounded-lg dark:border-gray-700 mt-14">
<section class="">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">PDF Courses</h2>
      <p class="font-light text-white lg:mb-16 sm:text-xl dark:text-gray-400">
        Browse our curated selection of downloadable PDF courses.
      </p>
    </div> 
    <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
      
     
      <div class="items-center bg-teal-700 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="w-full rounded-lg sm:rounded-none h-full " src="https://img-c.udemycdn.com/course/750x422/4143638_8137_9.jpg" alt="Course Cover"/>
        </a>
        <div class="p-5">
          <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="#">Introduction to HTML & CSS</a>
          </h3>
          <span class="text-teal-200 dark:text-gray-400">By John Doe</span>
          <p class="mt-3 mb-4 font-light text-teal-200 dark:text-gray-400">
            Learn the basics of HTML and CSS in this beginner-friendly PDF course.
          </p>
          <a href="/downloads/html-css-course.pdf" class="text-white dark:text-blue-400 hover:underline p-2 rounded-lg font-semibold  bg-teal-400 ">Download PDF</a>
        </div>
      </div>

     
      <div class="items-center bg-teal-700 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="w-full" src="https://res.cloudinary.com/harendra21/image/upload/w_1200/javascriptwithexample/What-Is-JavaScript-Used-For_zu3jwj.jpg" alt="Course Cover"/>
        </a>
        <div class="p-5">
          <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="#">Mastering JavaScript</a>
          </h3>
          <span class="text-teal-200 dark:text-gray-400">By Jane Smith</span>
          <p class="mt-3 mb-4 font-light text-teal-200 dark:text-gray-400">
            Deep dive into JavaScript concepts and techniques with this comprehensive guide.
          </p>
          <a href="/downloads/javascript-course.pdf" class="text-white dark:text-blue-400 hover:underline p-2 rounded-lg font-semibold  bg-teal-400 ">Download PDF</a>
        </div>
      </div>

     
      <div class="items-center bg-teal-700 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="w-full " src="https://miro.medium.com/v2/resize:fit:1000/0*22FkfJ_X4zfachDO.png" alt="Course Cover"/>
        </a>
        <div class="p-5">
          <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="#">Dart Programming for Flutter</a>
          </h3>
          <span class="text-teal-200 dark:text-gray-400">By Mark Wilson</span>
          <p class="mt-3 mb-4 font-light text-teal-200 dark:text-gray-400">
            Learn Dart from scratch and build modern mobile apps with Flutter.
          </p>
          <a href="/downloads/dart-flutter-course.pdf" class="text-white dark:text-blue-400 hover:underline p-2 rounded-lg font-semibold  bg-teal-400 ">Download PDF</a>
        </div>
      </div>


      <div class="items-center bg-teal-700 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="w-full " src="https://img-c.udemycdn.com/course/750x422/5494798_84de_2.jpg" alt="Course Cover"/>
        </a>
        <div class="p-5">
          <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="#">Git & GitHub Essentials</a>
          </h3>
          <span class="text-teal-200 dark:text-gray-400">By Sarah Connor</span>
          <p class="mt-3 mb-4 font-light text-teal-200 dark:text-gray-400">
            Get comfortable with Git version control and collaborating on GitHub.
          </p>
          <a href="/downloads/git-course.pdf" class="text-white dark:text-blue-400 hover:underline p-2 rounded-lg font-semibold  bg-teal-400 ">Download PDF</a>
        </div>
      </div>

    </div>
  </div>
</section>

        </div>
      </div>
    </div>
  )
}
