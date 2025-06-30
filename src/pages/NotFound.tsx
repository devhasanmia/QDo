import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 px-4">
      <h1 className="text-9xl font-extrabold text-gray-300 dark:text-gray-700">404</h1>
      <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mt-4">
        Oops! Page not found.
      </p>
      <p className="text-gray-500 dark:text-gray-400 mt-2 mb-6 max-w-md text-center">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
