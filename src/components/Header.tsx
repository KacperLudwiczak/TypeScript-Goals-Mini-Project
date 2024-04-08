import { ReactNode } from "react";

interface ImageProps {
  src: string;
  alt: string;
}

interface HeaderProps {
  image: ImageProps;
  children: ReactNode;
}

export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <img {...image} />
      <h1>{children}</h1>
    </header>
  );
}

 