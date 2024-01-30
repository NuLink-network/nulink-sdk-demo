import { memo } from "react";
import { run as singleRun } from "@@/src/features/nulink-pre/apis.test";
import { run as multiRun } from "@@/src/features/nulink-pre/multi.approve.test";
import { run as storageRun } from "@@/src/features/nulink-pre/external.storage.test";

const Test = memo(() => {
  console.log("process.env: ", process.env);
  console.log(
    "process.env.REACT_APP_STORAGE: " + process.env.REACT_APP_STORAGE
  );

  const testHandler = () => {
    //storageRun()
      multiRun()
      //singleRun()
      .then((data) => {
        console.log("finish");
      });
    // .catch((err) => {
    //   console.log(err);
    // });
  };
  return (
    <div>
      <button onClick={testHandler}>Test</button>
    </div>
  );
});

export default Test;
