import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDogs } from "../redux/actions";

export default function Home() {
  const dispatch = useDispatch();
  const Dogs = useSelector((state) => state.dogs);
  useEffect(() => {
    dispatch(getDogs());
  }, []);

  return <></>;
}
