import React from "react";

export default function Comment() {
  return (
    <>
      <div className="flex justify-around md:flex-row flex-col gap-2">
        <div className="border-2 overflow-y-scroll border-gray-200 rounded-lg p-2 justify-center w-full md:w-[70vw] h-[85vh]">
          <div className="bg-slate-200 h-10 justify-center rounded-md flex items-center">
            <h2 className="text-xl">All comment</h2>
          </div>

          {/* ----------------map for here for all comment---------------- */}
          <div className="mt-4 p-2 gap-2 bg-slate-200 active:bg-primary active:scale-90 w-full h-fit rounded-md flex items-center">
            <div className="bg-gray-200 border-2 max-w-16 w-16 max-h-16 h-16 border-primary rounded-full overflow-hidden">
              <img
                className="max-w-16 w-16 max-h-16 h-16 object-covers"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                alt="sdafa"
              />
            </div>
            <div className="flex flex-col text-sm">
              <div>
                <h2>Nitish kumar</h2>
              </div>
              <div>
                <h3>
                  <span className="text-gray-600 font-bold">Date:</span>{" "}
                  04-03-2023
                </h3>
                <h3>
                  <span className="text-gray-600 font-bold">Time:</span>{" "}
                  06:45:23
                </h3>{" "}
              </div>
              <div>
                <p>
                  <span className="text-gray-600 font-bold">Comment:</span>I
                  read this post and its...
                </p>
              </div>
            </div>
          </div>
          {/* ------------------------till map here----------------------------- */}

          <div className="mt-4 p-2 gap-2 bg-slate-200 active:bg-primary active:scale-90 w-full h-fit rounded-md flex items-center">
            <div className="bg-gray-200 border-2 max-w-16 w-16 max-h-16 h-16 border-primary rounded-full overflow-hidden">
              <img
                className="max-w-16 w-16 max-h-16 h-16 object-covers"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                alt="sdafa"
              />
            </div>
            <div className="flex flex-col text-sm">
              <div>
                <h2>Nitish kumar</h2>
              </div>
              <div>
                <h3>
                  <span className="text-gray-600 font-bold">Date:</span>{" "}
                  04-03-2023
                </h3>
                <h3>
                  <span className="text-gray-600 font-bold">Time:</span>{" "}
                  06:45:23
                </h3>
              </div>
              <div>
                <p>
                  <span className="text-gray-600 font-bold">Comment:</span>I
                  read this post and its...
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-2 gap-2 bg-slate-200 active:bg-primary active:scale-90 w-full h-fit rounded-md flex items-center">
            <div className="bg-gray-200 border-2 max-w-16 w-16 max-h-16 h-16 border-primary rounded-full overflow-hidden">
              <img
                className="max-w-16 w-16 max-h-16 h-16 object-covers"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                alt="sdafa"
              />
            </div>
            <div className="flex flex-col text-sm">
              <div>
                <h2>Nitish kumar</h2>
              </div>
              <div>
                <h3>
                  <span className="text-gray-600 font-bold">Date:</span>{" "}
                  04-03-2023
                </h3>
                <h3>
                  <span className="text-gray-600 font-bold">Time:</span>{" "}
                  06:45:23
                </h3>{" "}
              </div>
              <div>
                <p>
                  <span className="text-gray-600 font-bold">Comment:</span>I
                  read this post and its...
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-2 gap-2 bg-slate-200 active:bg-primary active:scale-90 w-full h-fit rounded-md flex items-center">
            <div className="bg-gray-200 border-2 max-w-16 w-16 max-h-16 h-16 border-primary rounded-full overflow-hidden">
              <img
                className="max-w-16 w-16 max-h-16 h-16 object-covers"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                alt="sdafa"
              />
            </div>
            <div className="flex flex-col text-sm">
              <div>
                <h2>Nitish kumar</h2>
              </div>
              <div>
                <h3>
                  <span className="text-gray-600 font-bold">Date:</span>{" "}
                  04-03-2023
                </h3>
                <h3>
                  <span className="text-gray-600 font-bold">Time:</span>{" "}
                  06:45:23
                </h3>{" "}
              </div>
              <div>
                <p>
                  <span className="text-gray-600 font-bold">Comment:</span>I
                  read this post and its...
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-2 gap-2 bg-slate-200 active:bg-primary active:scale-90 w-full h-fit rounded-md flex items-center">
            <div className="bg-gray-200 border-2 max-w-16 w-16 max-h-16 h-16 border-primary rounded-full overflow-hidden">
              <img
                className="max-w-16 w-16 max-h-16 h-16 object-covers"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                alt="sdafa"
              />
            </div>
            <div className="flex flex-col text-sm">
              <div>
                <h2>Nitish kumar</h2>
              </div>
              <div>
                <h3>
                  <span className="text-gray-600 font-bold">Date:</span>{" "}
                  04-03-2023
                </h3>
                <h3>
                  <span className="text-gray-600 font-bold">Time:</span>{" "}
                  06:45:23
                </h3>{" "}
              </div>
              <div>
                <p>
                  <span className="text-gray-600 font-bold">Comment:</span>I
                  read this post and its...
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-2 gap-2 bg-slate-200 active:bg-primary active:scale-90 w-full h-fit rounded-md flex items-center">
            <div className="bg-gray-200 border-2 max-w-16 w-16 max-h-16 h-16 border-primary rounded-full overflow-hidden">
              <img
                className="max-w-16 w-16 max-h-16 h-16 object-covers"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                alt="sdafa"
              />
            </div>
            <div className="flex flex-col text-sm">
              <div>
                <h2>Nitish kumar</h2>
              </div>
              <div>
                <h3>
                  <span className="text-gray-600 font-bold">Date:</span>{" "}
                  04-03-2023
                </h3>
                <h3>
                  <span className="text-gray-600 font-bold">Time:</span>{" "}
                  06:45:23
                </h3>{" "}
              </div>
              <div>
                <p>
                  <span className="text-gray-600 font-bold">Comment:</span>I
                  read this post and its...
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-2 gap-2 bg-slate-200 active:bg-primary active:scale-90 w-full h-fit rounded-md flex items-center">
            <div className="bg-gray-200 border-2 max-w-16 w-16 max-h-16 h-16 border-primary rounded-full overflow-hidden">
              <img
                className="max-w-16 w-16 max-h-16 h-16 object-covers"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                alt="sdafa"
              />
            </div>
            <div className="flex flex-col text-sm">
              <div>
                <h2>Nitish kumar</h2>
              </div>
              <div>
                <h3>
                  <span className="text-gray-600 font-bold">Date:</span>{" "}
                  04-03-2023
                </h3>
                <h3>
                  <span className="text-gray-600 font-bold">Time:</span>{" "}
                  06:45:23
                </h3>{" "}
              </div>
              <div>
                <p>
                  <span className="text-gray-600 font-bold">Comment:</span>I
                  read this post and its...
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-2 gap-2 bg-slate-200 active:bg-primary active:scale-90 w-full h-fit rounded-md flex items-center">
            <div className="bg-gray-200 border-2 max-w-16 w-16 max-h-16 h-16 border-primary rounded-full overflow-hidden">
              <img
                className="max-w-16 w-16 max-h-16 h-16 object-covers"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                alt="sdafa"
              />
            </div>
            <div className="flex flex-col text-sm">
              <div>
                <h2>Nitish kumar</h2>
              </div>
              <div>
                <h3>
                  <span className="text-gray-600 font-bold">Date:</span>{" "}
                  04-03-2023
                </h3>
                <h3>
                  <span className="text-gray-600 font-bold">Time:</span>{" "}
                  06:45:23
                </h3>{" "}
              </div>
              <div>
                <p>
                  <span className="text-gray-600 font-bold">Comment:</span>I
                  read this post and its...
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-2 gap-2 bg-slate-200 active:bg-primary active:scale-90 w-full h-fit rounded-md flex items-center">
            <div className="bg-gray-200 border-2 max-w-16 w-16 max-h-16 h-16 border-primary rounded-full overflow-hidden">
              <img
                className="max-w-16 w-16 max-h-16 h-16 object-covers"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                alt="sdafa"
              />
            </div>
            <div className="flex flex-col text-sm">
              <div>
                <h2>Nitish kumar</h2>
              </div>
              <div>
                <h3>
                  <span className="text-gray-600 font-bold">Date:</span>{" "}
                  04-03-2023
                </h3>
                <h3>
                  <span className="text-gray-600 font-bold">Time:</span>{" "}
                  06:45:23
                </h3>{" "}
              </div>
              <div>
                <p>
                  <span className="text-gray-600 font-bold">Comment:</span>I
                  read this post and its...
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-2 gap-2 bg-slate-200 active:bg-primary active:scale-90 w-full h-fit rounded-md flex items-center">
            <div className="bg-gray-200 border-2 max-w-16 w-16 max-h-16 h-16 border-primary rounded-full overflow-hidden">
              <img
                className="max-w-16 w-16 max-h-16 h-16 object-covers"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                alt="sdafa"
              />
            </div>
            <div className="flex flex-col text-sm">
              <div>
                <h2>Nitish kumar</h2>
              </div>
              <div>
                <h3>
                  <span className="text-gray-600 font-bold">Date:</span>{" "}
                  04-03-2023
                </h3>
                <h3>
                  <span className="text-gray-600 font-bold">Time:</span>{" "}
                  06:45:23
                </h3>{" "}
              </div>
              <div>
                <p>
                  <span className="text-gray-600 font-bold">Comment:</span>I
                  read this post and its...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* -----------------------comment section end here------------- */}

        {/* ----------------------------middle section start here---------------- */}
        <div className="border-2 p-2 gap-10 overflow-y-scroll border-gray-200 rounded-lg w-full md:w-screen h-[85vh]">
          <div className="flex mt-4 rounded-md p-2 gap-2 bg-slate-200">
            <div className="overflow-hidden w-20 h-28">
              <img
                className="w-20 h-auto"
                src="https://cdn.joyreadings.com/novel_avatar_small_m/2d3c3973e3cb67b3aa5caa819c8762e5.jpg"
                alt="dfasd"
              />
            </div>
            <div>
              <p>
                <span className="font-bold">Novel:</span> God of war Pinnacle
              </p>
              <p>
                <span className="font-bold">Page:</span> God of war pinnacle
                chapter 6
              </p>
              <p>
                <span className="font-bold">Created at:</span> 02-2-2023
              </p>
              <p>
                <span className="font-bold">Last update:</span>03-01-2023
              </p>
            </div>
          </div>
          {/* ----------------bottom commnt details------------ */}
          <div className="bg-slate-200 rounded-md mt-8">
            <div className="flex justify-between p-2">
              <div>
                <h3>
                  <span className="font-bold">Name: </span> Nitish kuamr
                </h3>
                <h3>
                  <span className="font-bold">Date: </span>04-02-2023
                </h3>
                <h3>
                  <span className="font-bold">Time: </span>12:43:45
                </h3>
              </div>
              <div>
                <button className="bg-primary active:scale-95 p-2 rounded-md text-white">
                  Delete comment
                </button>
              </div>
            </div>
            <div className="p-2 gap-2">
              <h3 className="font-bold">Comment:</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                tenetur optio, accusantium quam, nam quae magni suscipit quas
                ipsum est cupiditate inventore architecto voluptas aperiam,
                veritatis excepturi ex. Illo, esse.
              </p>
            </div>
          </div>
        </div>
        {/* ----------------------middle section start form here----------- */}

        <div className="border-2 border-gray-200 rounded-lg w-[80vw] h-auto">
          <div className="bg-slate-200 rounded-md m-2 mb-8">
            <div className="p-2">
              <h2>
                <span className="font-bold">User login: </span>Logged in
              </h2>
              <h2>
                <span className="font-bold">User registered: </span>12-03-2023
              </h2>
              <h2>
                <span className="font-bold">Gmail: </span>xyz gmail.com
              </h2>
              <div className="mt-5 flex justify-between">
                <button className="bg-primary active:scale-95 w-28 p-2 rounded-md text-white">
                  Block
                </button>
                <button className="bg-primary active:scale-95 w-28 p-2 rounded-md text-white">
                  Unblock
                </button>
              </div>
            </div>
          </div>

          <div className="bg-slate-200 rounded-t-md m-2">
            <div className="p-2 justify-center items-center flex">
              <h2>Comment Replay</h2>
            </div>
          </div>
          <div className="bg-slate-200 rounded-b-md m-2">
            <div className="p-2 justify-center items-center flex flex-col gap-2">
              <input
                className="w-full bg-transparent outline-primary border-2 border-primary p-2"
                type="text"
                name="email"
                value={"To: xyz@gmail.com"}
              />
              <textarea
                className="outline-primary w-full bg-transparent border-2 border-primary"
                name=""
                id=""
                cols="38"
                rows="6"
                placeholder="Type comment replay..."
              ></textarea>
              <button className="bg-primary w-full rounded-md h-10 text-white active:scale-95">
                Replay
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
