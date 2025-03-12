import { Link } from "react-router";
import "./not-found.css";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <h4>The page you're looking for doesn't exist.</h4>
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYW9zMXRpcTBmeHc2Y2I4Y2VpNmZjM3QydTFldWt0d2YwOWF6N3k0ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BFN8L8zT2VubbTYXJ8/giphy.gif"
        alt="Page Not Found"
      />
      <Link to="/Movie-Bookmarks" className="link">
        Go back to the home page
      </Link>
    </div>
  );
};

export default NotFound;
