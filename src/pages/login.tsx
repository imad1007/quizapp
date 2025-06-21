import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import Header from "../components/header";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = formData;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in user:", userCredential.user);

      setSuccess("Login successful!");
      setError("");
      
      // Redirect to student dashboard or desired route
      router.push("/student/");
    } catch (err: any) {
      setError(err.message || "Login failed.");
      setSuccess("");
    }
  };

  return (
    <>
      <Header />
      <div>
        <section className="bg-white dark:bg-gray-900 h-screen">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7 flex justify-center relative w-full h-screen bg-cover bg-center">
              <Image
                src="/images/register_image.jpg"
                alt="mockup"
                className="relative"
                width={700}
                height={600}
              />
            </div>

            <div className="lg:mt-0 lg:col-span-5 mt-20">
              <form className="mt-40" onSubmit={handleSubmit}>
                <div className="w-full flex justify-center">
                  <h1 className="text-3xl font-bold">Sign in</h1>
                </div>
                {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
                {success && <p className="text-green-500 mt-4 text-center">{success}</p>}

                <div className="mb-6 w-full">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="example@st.uskudar.edu.tr"
                    required
                  />
                </div>

                <div className="mb-6 w-full">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="•••••••••"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-teal-500 text-white text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 hover:bg-teal-800"
                >
                  Login
                </button>

                <p className="mt-10 text-center text-sm">
                  Don't have an account?{" "}
                  <a href="/register" className="text-teal-700 underline">
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
