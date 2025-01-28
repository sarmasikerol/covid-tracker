import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";  // redux-thunk'ı doğru şekilde import edin
import Content from "../pages/detail/Content";
import { data } from "../constants";

// redux-mock-store'u thunk ile doğru bir şekilde yapılandırın
const mockStore = configureStore([thunk]);

test("store'a veri geldiği durumda ekrana nesnedeki her bir değer için kart basılır", () => {
  // store'u yapılandır
  const store = mockStore({
    isLoading: false,
    error: null,
    data: data,
  });

  // bileşeni renderla
  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  // data nesnesini key ve value'lardan oluşan diziye çevir
  const arr = Object.entries(data);

  // dizideki herbir eleman için ekrana kartlar basılır
  arr.forEach((item) => {
    // ekrana item'ın key değeri geldi mi?
    expect(screen.getByText(item[0])).toBeInTheDocument();

    // ekrana item'ın value değeri null ise Bilinmiyor null değilse valur değerinin kendisi geldi mi?
    expect(screen.getByText(!item[1] ? "Bilinmiyor" : item[1])).toBeInTheDocument();
  });
});
