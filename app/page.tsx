const description =
  "Andrew is a software engineer at ngrok, where he works on the Gateway team. Previously worked at Twilio and Levers.";

export default function Home() {
  return (
    <>
      <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
        <h2 className="text-center text-2xl font-semibold mt-3">
          Andrew Ryno
        </h2>
        <div className="mt-5">
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <a
          href="https://www.linkedin.com/in/andrewryno/"
          className="text-blue-500 hover:text-blue-700 mx-3"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/andrewryno"
          className="text-blue-500 hover:text-blue-700 mx-3"
        >
          GitHub
        </a>
      </div>
    </>
  );
}
