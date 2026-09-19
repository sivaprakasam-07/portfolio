import { Link } from "react-router-dom";

const Button = ({ children, to, href, variant = "primary" }) => {
  const base =
    "px-6 py-3 rounded-md text-sm font-medium transition";

  const styles =
    variant === "primary"
      ? "bg-[#3b82f6] hover:bg-blue-600 text-white"
      : "border border-gray-600 hover:border-white text-gray-300 hover:text-white";

  if (to) {
    return (
      <Link to={to} className={`${base} ${styles}`}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
      {children}
    </a>
  );
};

export default Button;
