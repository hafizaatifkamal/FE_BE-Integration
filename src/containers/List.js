import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setList } from "../redux/actions/ListActions";
import ListComponent from "./ListComponent";

const ListPage = () => {
  const list = useSelector((state) => state.allList.List);
  const dispatch = useDispatch();
  const fetchList = async () => {
    const response = await axios
      .get("https://localhost:5000/lists")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setList(response.data));
  };

  useEffect(() => {
    fetchList();
  }, []);

  console.log("List :", list);
  return (
    <div>
      <ListComponent />
    </div>
  );
};

export default ListPage;