import Image from "next/image";
import  Header from '../components/header'
export default function Home() {
  return (
    <div>
      <Header/>
      <section className="bg-white dark:bg-gray-900 h-">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        
          <div className="mr-auto place-self-center lg:col-span-7 ">
            <h1 className="max-w-xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Welcome to USKUDAR-IQ
            </h1>
            <p className="max-w-xl mb-6 font-semibold text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 ">
              Test Your Knowledge, Win Exciting Prizes! Engage in weekly quizzes
              across diverse subjects and challenge your mind! Compete with your
              peers, climb the leaderboard, and earn a chance to win amazing
              gifts. Whether you're sharpening your skills or just having fun,
              there's always something for everyone. Get started now and prove
              you're the best!
            </p>
            <a
              href="/register"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-pur rounded-lg bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-900 text-white"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className=" lg:mt-0 lg:col-span-5 lg:flex flex justify-center items-center">
            <Image
              src="/images/herophoto.png"
              alt="mockup"
              width={300}
              height={250}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
