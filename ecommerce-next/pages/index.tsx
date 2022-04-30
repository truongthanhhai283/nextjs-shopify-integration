import { useEffect } from "react";

import play from "playground";
import InterestingTypes from "interestingTypes";
import testGenericType from "genericType";
import testInferring from "inferring";

export default function Home() {
  useEffect(() => {
    // play();
    // InterestingTypes();
    // testGenericType();
    testInferring();
  }, []);

  return <>Hello World</>;
}
