import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../redux/actions";
import Error from "../../components/error";
import ContentLoader from "../../components/loaders/ContentLoader";
import Card from "./Card";

const Content = () => {
  const { data, error, isLoading } = useSelector((store) => store);
 
console.log(data)
  // data nesnenini diziye çevir
  const arr = Object.entries(data || {});

  const dispatch = useDispatch();

  const { iso } = useParams();

  useEffect(() => {
    dispatch(getDetails(iso));
  }, []);

  return (
    <div className="grid grid-cols-1  md:grid-cols-3 gap-6 mt-6">
      {isLoading ? (
        <ContentLoader />
      ) : error ? (
        <Error info={error} retry={() => dispatch(getDetails(iso))} />
      ) : (
        arr.map((item, key) => <Card key={key} item={item} />)
      )}
    </div>
  );
};

export default Content;
