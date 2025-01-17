import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import Container from "../../components/container";

const Map = () => {
  const geoUrl =
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

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
