import { Card, Input, games } from "@ns/web";
import { useState, useEffect } from "react";

function Games() {
  const [m, setM] = useState<any[]>(games);
  const [s, setS] = useState<string>("");

  useEffect(() => {
    if (s.length > 0) {
      const found = games.filter((game) => {
        return s.toLowerCase() == ""
          ? game
          : game.title.toLowerCase().includes(s.toLowerCase());
      });
      setM(found);
    } else {
      setM(games);
    }
  }, [s]);

  return (
    <main className="flex justify-center items-center mt-40 pb-10">
      <div>
        <Input state={setS} />
        <br />
        <p className="text-sm inline-block text-left mt-2 max-w-80 text-[#bbb]">
          Games shown on this website{" "}
          <span className="underline font-medium">are a property to</span> their
          respective owners.
        </p>
        <div className="mt-2 flex justify-center items-center flex-wrap max-w-[80vw] gap-4">
          {m.map((game) => {
            return <Card key={game.id} game={game} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default Games;
