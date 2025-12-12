import todo from "@/components/todo";
export const Header = () => {
  return (
    <div className="w-94.75 h-72.5 rounded-2xl shadow-2xl flex justify-around items-center flex-col bg-white to-do-list">
      <div className="w-86.25 h-46.75 flex flex-col justify-between items-center">
        <h1 className="text-black text-center">To-Do list</h1>
        <div className="flex flex-col gap-y-5">
          {" "}
          <div>
            <input
              type="text"
              className="border-b-gray-100 text-black h-10"
              placeholder="Add a new task..."
              // onChange={inputChange}
            />{" "}
            <button className="w-14.75 h-10 bg-blue-500 rounded-md hover:to-sky-200">
              Add{" "}
            </button>
          </div>{" "}
          {/* <ol>
            {inputChange.map(({ tasks }) => (
              <li>{tasks}</li>
            ))}
          </ol> */}
          <div className="flex gap-x-1.5">
            <button className="rounded-md px-3 py-2 bg-blue-500">All</button>
            <button className="rounded-md px-3 py-2 bg-gray-100 text-black">
              Active
            </button>
            <button className="rounded-md px-3 py-2 bg-gray-100 text-black">
              Completed
            </button>
          </div>
        </div>
        <div className="text-black">No tasks yet. Add one above!</div>
      </div>
      <div className="flex gap-x-1">
        <p className="text-black">Powered by</p>
        <button className="text-blue-400">Pinecone academy</button>
      </div>
    </div>
  );
};
