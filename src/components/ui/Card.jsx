const Card = ({ children }) => {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition">
      {children}
    </div>
  );
};

export default Card;
