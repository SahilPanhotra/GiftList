import header from "./assets/header.png";
import NavBar from "./components/NavBar";
import nicelist from "./utils/niceList.json";
import MerkleTree from "./utils/MerkleTree";

const serverUrl = "http://localhost:1225";


function App() {
  return (
    <div className="h-screen" style={{ backgroundImage: `url(${header})` }}>
      <NavBar />
      <div className="container pt-16 md:pt-20 mx-auto flex flex-wrap justify-center items-center">
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            Check
            <span className="p-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              If You Won a Gift
            </span>
            or not?
          </h1>
          <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-blue-300 py-2 font-bold mb-2"
                for="name"
              >
                Input Your Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                id="name"
                type="text"
                placeholder="Sam Altman"
              />
            </div>

            <div className="flex items-center justify-center pt-4">
              <button
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                Check
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
