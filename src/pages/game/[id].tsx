import { games, GameType } from "@ns/web";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Flash } from "react-ruffle";
import All from "../[...all].tsx";

const Gameplay = ({ game }: { game: GameType }) => {
  const [m, setM] = useState(false);
  const a = game.file.includes("{GAME_ID}")
    ? game.file.replace("{GAME_ID}", game.id)
    : game.file;
  const gameFile =
    a.startsWith("/assets/games/") && a.endsWith("/") && import.meta.env.DEV
      ? a + "index.html"
      : a;

  useEffect(() => {
    setTimeout(() => setM(true), 250);
  }, []);
  return (
    <>
      {game.type == "embed" ? (
        <iframe
          src={gameFile}
          className="w-full h-[calc(100%-2.75rem)] absolute top-0 left-0"
        ></iframe>
      ) : (
        <Flash
          src={gameFile}
          className="h-[calc(100%-2.75rem)] w-full absolute left-0 top-0 flex flex-col gap-2 justify-center items-center"
          config={{
            autoplay: "on",
            unmuteOverlay: "hidden",
            contextMenu: "off",
            preloader: false,
            warnOnUnsupportedContent: false,
          }}
        >
          {m == true ? (
            <>
              <h3 className="text-xl">Failed to load</h3>
              <button
                className="bg-white hover:bg-[#ddd] rounded-md py-2 px-3 text-sm text-black"
                onClick={() => window.location.reload()}
              >
                Try again
              </button>
            </>
          ) : (
            <></>
          )}
        </Flash>
      )}
    </>
  );
};
function Game() {
  const [game, setGame] = useState<{
    started: boolean;
    data: GameType;
  } | null>(null);
  const iframe = useRef<HTMLDivElement | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const results = games.find((g) => g.id == id);
    if (results) {
      setGame({ started: false, data: results });
    } else {
      setGame(null);
    }
  }, [id]);

  return (
    <>
      {game ? (
        <main className="flex justify-center items-center mt-24 pb-5">
          <div>
            <div
              ref={iframe}
              className="w-auto h-[42rem] aspect-video overflow-hidden relative rounded-md mb-2"
            >
              {game.started ? (
                <Gameplay game={game.data} />
              ) : (
                <>
                  <div className="absolute w-full h-full flex flex-col gap-4 justify-center items-center">
                    <img
                      src={
                        game.data.image.includes("{GAME_ID}")
                          ? game.data.image.replace("{GAME_ID}", game.data.id)
                          : game.data.image
                      }
                      className=" rounded-3xl h-32"
                    />
                    <h3 className="text-xl">{game.data.title}</h3>
                    <button
                      className="w-[3.5rem] disabled:w-20 px-1.5 py-2.5 flex justify-center items-center gap-2 transition-all duration-150 rounded-lg text-md text-sm bg-blue-500 hover:bg-blue-600"
                      {...(game.started ? { disabled: true } : {})}
                      onClick={() => {
                        setGame({ ...game, started: true });
                      }}
                    >
                      Play
                    </button>
                  </div>
                </>
              )}
              <div className="w-full h-[2.75rem] text-left flex items-center justify-start absolute bottom-0 left-0 bg-[#111] z-10 overflow-hidden">
                <Link to="/">
                  <h3 className="text-sm text-white hover:text-blue-500 flex items-center gap-1 transition duration-200 ml-3 cursor-pointer hover:scale-105">
                    nate-games.github.io{" "}
                    <img
                      src="/favicon.png"
                      className=" h-6 aspect-square rounded-md align-baseline"
                    />
                  </h3>
                </Link>
                <button
                  onMouseDown={() => {
                    if (iframe.current) {
                      if (document.fullscreenElement) {
                        document.exitFullscreen();
                      } else {
                        iframe.current.requestFullscreen();
                      }
                    }
                  }}
                  className="w-auto h-full transition-all absolute aspect-square outline-none group bottom-0 right-0 flex justify-center items-center hover:bg-[#222]"
                >
                  <svg
                    className="h-6 transition fill-white group-hover:fill-blue-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 14H5v5h5v-2H7zm-2-4h2V7h3V5H5zm12 7h-3v2h5v-5h-2zM14 5v2h3v3h2V5z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <a
              href={`https://github.com/nate-games/nate-games.github.io/discussions/new?category=bug-report&title=${game.data.title} - id@${game.data.id}`}
              target="_blank"
            >
              <button className="cursor-pointer text-sm transition-all duration-75 bg-[#222] text-white px-4 py-2 rounded-md border-[#111] border-b-[6px] hover:bg-[#252525] hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[0px] active:translate-y-[2px]">
                Report a bug
              </button>
            </a>
          </div>
        </main>
      ) : (
        <All />
      )}
    </>
  );
}

export default Game;
