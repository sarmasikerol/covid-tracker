import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import Container from "../../components/container";
import { useNavigate } from "react-router-dom";

// Ülke isimlerine karşılık ISO kodlarını içeren eşleme tablosu
const countryToIso = {
  "India": "IN",
  "United States of America": "USA",
  "Brazil": "BR",
  "Turkey": "TR",
  "China": "CHN",
  "Germany": "DE",
  "France": "FR",
  "Russia": "RU",
  "Italy": "IT",
  "Japan": "JP",
  "United Kingdom": "GB",
  "Canada": "CA",
  "Australia": "AU",
  "South Africa": "ZA",
  "Mexico": "MX",
  "South Korea": "KR",
  "Argentina": "AR",
  "Saudi Arabia": "SA"
};

const Map = () => {
  const navigate = useNavigate();
  const geoUrl =
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

  const handleCountryClick = (countryName) => {
    // Ülke ismini ISO koduna çevir
    const isoCode = countryToIso[countryName];
    if (isoCode) {
      navigate(`/detail/${isoCode}`);  // ISO kodunu URL'ye ekle
    } else {
      console.log("ISO kodu bulunamadı:", countryName);
    }
  };

  return (
    <Container desings="max-md:!p-0 mt-10 mb-20">
      <h1 className="p-5 text-2xl font-semibold">Ülke Seçin</h1>
      <div className="border shadow-lg md:rounded-xl bg-gray-200">
        <ComposableMap>
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => handleCountryClick(geo.properties.name)}
                    style={{
                      default: { fill: "white", stroke: "gray" },
                      hover: {
                        fill: "#DB2777",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </Container>
  );
};

export default Map;
