import { memo } from "react";
import { proxyReencryptionAPIsTestRun } from "@@/src/features/nulink-pre/testApis";

const Test = memo(() => {
  console.log("process.env: ", process.env);
  console.log(
    "process.env.REACT_APP_STORAGE: " + process.env.REACT_APP_STORAGE
  );

  const testHandler = () => {

    proxyReencryptionAPIsTestRun()
      .then((data) => {
        console.log("finish");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button onClick={testHandler}>Test</button>
    </div>
  );
});

export default Test;
