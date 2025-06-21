import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter
import { auth, db } from "../firebase/firebase"; // Adjust path based on your setup
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // Import Firestore functions
import Header from "../components/header";

export default function Register() {
  const router = useRouter(); // Initialize useRouter
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    studentID: "",
    email: "",
    password: "",
    confirmPassword: "",
    department: "",
    year: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      studentID,
      email,
      password,
      confirmPassword,
      department,
      year,
    } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    console.log(formData);

    try {
      // Create a user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Store additional user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        studentID,
        email,
        department,
        year,
        createdAt: new Date().toISOString(),
      });

      setSuccess("User registered successfully!");
      setError("");


      
      
      // Redirect to the index page
      router.push("/student/"); // Replace "/" with the desired route if needed
    } catch (err: any) {
      setError(err.message || "An error occurred during registration.");
      setSuccess("");
    }
  };

  return (
    <div>
      <Header />
      <section className="bg-white dark:bg-gray-900">
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

          <div className="lg:mt-0 lg:col-span-5 lg:flex flex justify-center items-center">
            <form onSubmit={handleSubmit}>
              <div className="w-full flex justify-center mb-10">
                <h1 className="text-3xl font-bold">Sign up</h1>
              </div>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              {success && <p className="text-green-500 mb-4">{success}</p>}
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="studentID"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Student ID
                  </label>
                  <input
                    type="text"
                    id="studentID"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Student ID"
                    onChange={handleChange}
                    value={formData.studentID}
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <div className="relative">
                  <label
                   htmlFor="small"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select department
                  </label>
                  <select
                    id="department"
                    className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    onChange={handleChange}
                    value={formData.department}
                  >
                <option value="ddd" disabled>
                  Choose a department
                </option>
                <option value="Software enginner">Software engineering</option>
                <option value="Computer enginner">Computer engineering</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <div className="relative">
                  <label
                   htmlFor="small"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select academic year
                  </label>
                  <select
                    id="year"
                    className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    value={formData.year}
                    onChange={handleChange}
                  >
                <option value="dddd" disabled>
                  Choose Year
                </option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="example@domain.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="•••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="•••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-teal-700 hover:bg-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
