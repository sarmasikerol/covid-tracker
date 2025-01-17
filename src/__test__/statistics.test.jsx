import { render, screen } from "@testing-library/react";
import Statistics from "../pages/home/Statistics";

test("bileşen renderlandığında ekrana loader gelir", () => {
  render(<Statistics />);

  // elementi çağırma onun aynı zamanda ekranda'mı testini yapmaya eşdeğerdir o yüzden ekstra olarak toBeIntheDocument yazmaya gerek yok
  const loader = screen.getByTestId("loader");
});
