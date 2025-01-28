import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../redux/actions";

const Content = () => {
  const { data, isLoading } = useSelector((store) => store);

  

  const dispatch = useDispatch();

  const { iso } = useParams();

  useEffect(() => {
    dispatch(getDetails(iso));
  }, []);

  return <div>Content</div>;
};

export default Content;
