import React, { useEffect, useState } from "react";
import Container from "../../components/container";

import Item from "./Item";
import api from "../../api";
import millify from "millify";
import HomeLoader from "../../components/loaders/HomeLoader";

const Statistics = () => {
  const [isLoading, setLoading] = useState(true);
  const [totals, setTotals] = useState(null);

  useEffect(() => {
    api
      .get("/reports/total")
      .then((res) => setTotals(res.data.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  
  return (
    <Container desings="!py-0">
      <div className="bg-white shadow-lg rounded-xl p-5 grid grid-cols-3 gap-5 mt-[-34px] md:mt-[-48px]">
        {isLoading ? (
          <HomeLoader />
        ) : (
          <>
            <Item
              color="text-pink-500"
              text="Toplam Vaka"
              value={millify(totals.confirmed)}
            />
            <Item
              color="text-green-500"
              text="Toplam İyileşen"
              value={millify(totals.recovered)}
            />
            <Item
              color="text-gray-500"
              text="Toplam Vefat"
              value={millify(totals.deaths)}
            />
          </>
        )}
      </div>
    </Container>
  );
};

export default Statistics;
