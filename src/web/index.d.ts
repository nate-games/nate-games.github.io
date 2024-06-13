import { ReactNode, JSX } from 'react';

type GameType = {
  id: string;
  file: string;
  type: "embed" | "flash";
  title: string;
  image: string;
};

declare function Button({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}): JSX.Element;

declare function Card({
  game,
}: {
  game: {
    id: string;
    file: string;
    type: "embed" | "flash";
    title: string;
    image: string;
  };
}): JSX.Element;

declare function Input({ state }: { state: any }): JSX.Element;

declare function Navbar(): JSX.Element;

declare function Retro(): JSX.Element;

declare const games: GameType[];

export { Button, Card, type GameType, Input, Navbar, Retro, games };
