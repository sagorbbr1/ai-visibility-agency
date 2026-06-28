import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
        AI
      </div>

      <div>
        <h2 className="text-xl font-black">
          AI Visibility
        </h2>

        <p className="text-xs text-gray-500">
          Agency
        </p>
      </div>
    </Link>
  );
};

export default Logo;