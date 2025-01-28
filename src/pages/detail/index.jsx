import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../redux/actions";
import DetailLoader from "../../components/loaders/DetailLoader";
import Error from "../../components/error";
import Heading from "./Heading";
import Content from "./Content";

const Detail = () => {
  const dispatch = useDispatch();

  const { iso } = useParams();

  useEffect(() => {
    if (iso) {
      // iso değeri varsa
      dispatch(getDetails(iso));
    }
  }, [iso]); 

  return (
    <div className="flex-1 text-white grid place-items-center p-6">
      <div className="bg-white border shadow-2xl min-h-[80%] py-6 px-8 rounded-lg max-w-3xl max-md:w-full md:min-w-[500px]">
        <Heading />

        <Content />
      </div>
    </div>
  );
};

export default Detail;
