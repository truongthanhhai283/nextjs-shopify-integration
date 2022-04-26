import { useEffect } from "react";

import play from "playground";
import InterestingTypes from "interestingTypes";

export default function Home() {
  useEffect(() => {
    // play();
    InterestingTypes();
  }, []);

  return <>Hello World</>;
}
