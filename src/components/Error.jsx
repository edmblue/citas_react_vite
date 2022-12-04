const Error = ({ children }) => {
  return (
    <div className="bg-red-700 text-white text-center uppercase font-bold py-3 mb-5 rounded">
      {children}
    </div>
  );
};

export default Error;
