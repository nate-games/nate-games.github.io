import { Link } from "react-router-dom";
import { Retro } from "@ns/web";

function Home() {
  return (
    <main>
      <div className="absolute w-full h-full z-[1]">
        <section className="h-full xl:h-[75%] w-full flex flex-col justify-center items-center">
          <p className="text-sm">Welcome back to,</p>
          <h2 className="text-white text-xl flex gap-1 items-end mb-2">
            <img src="/favicon.png" className="h-7 w-7" />
            {""}
            nate-games
          </h2>
          <Link to="/games">
            <button className="flex items-center justify-center text-sm text-white bg-blue-500 gap-1 px-3 py-2 cursor-pointer font-bold rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3 active:scale-95">
              Start playing!
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#fff">
                <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"></path>
              </svg>
            </button>
          </Link>
        </section>
      </div>
      <Retro />
    </main>
  );
}

export default Home;
