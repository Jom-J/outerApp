import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../../store/actions/authActions";

const useDashboardState = (props) => {
  const { profile } = useSelector((state) => state.auth);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, []);

  const onMessage = (e) => {
    e.preventDefault();
    setCount((prevValue) => prevValue + 1);
  };

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return {
    profile,
    count,
    onLogout,
  };
};

export default useDashboardState;
