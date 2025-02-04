export default function Steps() {
  return (
    <div className="relative bg-green-500 w-full h-screen flex flex-row ">
      <div className="w-1/2 h-full bg-red-500"></div>
      <div className="w-1/2 h-auto bg-purple-500 p-12 flex flex-col">
        <div className="h-100% bg-red-400"></div>
        <div className="h-full bg-red-400"></div>
        <div className="h-full bg-red-600"></div>
        <div className="h-full bg-red-700"></div>
      </div>
    </div>
  );
}
