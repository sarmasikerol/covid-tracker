import { render, screen, waitFor } from "@testing-library/react";
import Statistics from "../pages/home/Statistics";
import api from "../api";
import millify from "millify";

// API modülünü mockla
jest.mock("../api");

describe("Statistics Component Tests", () => {
  // Her testten önce mock fonksiyonlarını sıfırla
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Component renders loader initially", async () => {
    // Mock API çağrısı boş bir cevap döndürsün
    api.get.mockResolvedValueOnce({ data: [] });

    // Bileşeni renderla
    render(<Statistics />);

    // Loader elementinin ekranda olduğunu doğrula
    expect(screen.getByTestId("home-loader")).toBeInTheDocument();
  });

  test("Statistics appear after the loader", async () => {
    const totals = {
      confirmed: 701166431,
      recovered: 590451974,
      critical: 2877,
      deaths: 7014639,
      lastChange: "2024-06-04T00:28:51+00:00",
      lastUpdate: "2024-08-09T09:13:41+00:00",
    };

    // Mock API çağrısı sahte bir cevap döndürsün
    api.get.mockResolvedValueOnce({ data: [totals] });

    // Bileşeni renderla
    render(<Statistics />);

    // Loader'ın kaybolmasını bekle
    await waitFor(() =>
      expect(screen.queryByTestId("home-loader")).not.toBeInTheDocument()
    );

    // İstatistiklerin doğru bir şekilde renderlandığını doğrula
    expect(screen.getByText(/toplam vaka/i)).toBeInTheDocument();
    expect(screen.getByText(millify(totals.confirmed))).toBeInTheDocument();

    expect(screen.getByText("Toplam İyileşen")).toBeInTheDocument();
    expect(screen.getByText(millify(totals.recovered))).toBeInTheDocument();

    expect(screen.getByText(/toplam vefat/i)).toBeInTheDocument();
    expect(screen.getByText(millify(totals.deaths))).toBeInTheDocument();
  });

  test("Displays error message on API failure", async () => {
    // Mock API çağrısı hata döndürsün
    api.get.mockRejectedValueOnce(new Error("Zaman aşımına uğradı"));

    // Bileşeni renderla
    render(<Statistics />);

    // Loader'ın kaybolmasını bekle
    await waitFor(() =>
      expect(screen.queryByTestId("home-loader")).not.toBeInTheDocument()
    );

    // Hata mesajının ekranda olduğunu doğrula
    expect(screen.getByText(/bir hata oluştu/i)).toBeInTheDocument();

    // İstatistik başlıklarının ekranda olmadığını doğrula
    expect(screen.queryByText(/toplam vaka/i)).not.toBeInTheDocument();
  });
});