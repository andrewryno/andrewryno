import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Andrew Ryno",
  description: "404 Not Found",
};

export default function NotFound() {
  return (
    <>
      <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
        <h2 className="text-center text-2xl font-semibold mt-3">404 Not Found</h2>
        <div className="mt-5">
          <p className="text-gray-600 mt-2">
            Sorry, you were looking for something that isn&apos;t here.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <a
          href="https://www.linkedin.com/in/andrewryno/"
          className="text-blue-500 hover:text-blue-700 mx-3"
        >
          LinkedIn
        </a>
        <a href="https://github.com/andrewryno" className="text-blue-500 hover:text-blue-700 mx-3">
          GitHub
        </a>
      </div>
    </>
  );
}
