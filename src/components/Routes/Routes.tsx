import { useEffect, useState } from "react";
import Routers from "./routerMap";
import { connect } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import * as accountActions from "@@/src/modules/account/actions";
import * as connectActions from "@@/src/modules/connect/actions";

const RoutesList = (props: any) => {
  let [routerState, setRouterState] = useState("");
  if (props?.routerState?.data && routerState !== props?.routerState?.data) {
    setRouterState(props?.routerState?.data);
  }

  const defaultRouter = () => (
    <Routes>
      {Routers.map((item, index) => (
        <Route path={item.path} key={index} element={<item.component />} />
      ))}
    </Routes>
  );

  const _init = async () => {
    // await some_function()
  };

  useEffect(() => {
    _init();
  }, []);

  return defaultRouter();
};

export default connect((state) => state, {
  ...accountActions,
  ...connectActions,
})(RoutesList);
