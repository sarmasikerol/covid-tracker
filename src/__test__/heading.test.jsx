import { Provider } from "react-redux";
import Heading from "../pages/detail/Heading";
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { data } from "../constants";

// redux kullanılan bileşenleri test ederken test edeceğimiz senaryodaki store'un datasına göre store'un sahte bir versiyonunu oluşturmalıyız
const mockStore = configureStore([thunk]);

it("store yüklenme durumundayken ekrana loader basılır", () => {
    // store'un yüklenme durumundaki state'inin kopyasını oluştur
    const store = mockStore({ isLoading: true, error: null, data: null });
  
    // bileşeni render ederken bağımlı olduğu bütün sağlayıcılar ile sarmalamalıyız
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Heading />
        </BrowserRouter>
      </Provider>
    );
  
    // ekrana loader geliyor mu?
    screen.getByTestId("header-loader");
  });

it("store da yüklenme bittiğinde ekranda loader yoktur", () => {
  // store'un yüklenme durumunun bittiği durumu
  const store = mockStore({ isLoading: false, error: null, data: null });

  // bileşeni render ederken bağımlı olduğu bütün sağlayıcılar ile sarmalamalıyız
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Heading />
      </BrowserRouter>
    </Provider>
  );

  // ekranda header-loader elementinin olmadığını test edicez

  // elementin ekranda olmamasını beklediğimiz için query ile aldık
  const ele = screen.queryByTestId("header-loader");

  // element null mu ?
  expect(ele).toBeNull();
});

it("store'a veri geldiğinde ekrana veriler basılır", () => {
  // store'un yüklenme durumunun bittiği durumu
  const store = mockStore({
    isLoading: false,
    error: null,
    data,
  });

  // bileşeni render ederken bağımlı olduğu bütün sağlayıcılar ile sarmalamalıyız
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Heading />
      </BrowserRouter>
    </Provider>
  );

  // ülke ismi ekrana geldi mi?
  screen.getByRole("heading", { iso: data.iso });

  // bayrak ekrana geldimi?
  const flagImg = screen.getByAltText("flag");

  // bayrağın kaynağı doğru mu ?
  //   expect(flagImg).toHaveAttribute("src", `https://`)
});
