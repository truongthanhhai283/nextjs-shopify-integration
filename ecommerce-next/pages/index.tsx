import { useEffect } from "react";

import play from "playground";

export default function Home() {
  useEffect(() => {
    play();
  }, []);

  return <>Hello World</>;
}
