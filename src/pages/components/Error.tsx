interface ErrorProps {
  message: string;
}

const Error = ({ message }: ErrorProps) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-xl mx-auto mt-6">
      <strong className="font-bold">에러: </strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

export default Error;
