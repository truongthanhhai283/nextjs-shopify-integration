import { useEffect } from "react";

import play from "playground";
import InterestingTypes from "interestingTypes";
import testGenericType from "genericType";

export default function Home() {
  useEffect(() => {
    // play();
    // InterestingTypes();
    testGenericType();
  }, []);

  return <>Hello World</>;
}
