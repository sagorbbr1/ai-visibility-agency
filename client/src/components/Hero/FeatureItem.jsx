import { FaCheckCircle } from "react-icons/fa";

const FeatureItem = ({ children }) => {
  return (
    <div className="flex items-start gap-3">
      <FaCheckCircle className="mt-1 text-lg text-green-500" />

      <p className="text-[15px] leading-7 text-gray-700">
        {children}
      </p>
    </div>
  );
};

export default FeatureItem;