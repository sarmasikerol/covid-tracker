import { render, screen } from "@testing-library/react";
import Statistics from "../pages/home/Statistics";

test("bileşen renderlandığında ekrana loader gelir", async () => {
  render(<Statistics />);

  // elementi çağırma onun aynı zamanda ekranda'mı testini yapmaya eşdeğerdir o yüzden ekstra olarak toBeIntheDocument yazmaya gerek yok
  screen.getByTestId("loader");

  // ELEMENTİ ASENKRON şekilde render olduğu için alamadık
  await screen.findByText(
    "Toplam Vaka",
    {},
    {
      timeout: 3000,
    }
  );
  await screen.findByText(
    "Toplam İyileşen",
    {},
    {
      timeout: 3000,
    }
  );
  await screen.findByText(
    "Toplam Vefat",
    {},
    {
      timeout: 3000,
    }
  );
});

/*
! Seçiciler
1) Method Tipi | 2) All İfadesi | 3)Seçici Method

* get > render anında DOM'da olan elementleri almak için kullanılır | elementi bulamazsa hata verir

* query > elementin ekranda olma durumu kesin değilse kullanılır get ile benzer çalışır | elementi bulamazsa hata vermez

* find > elementin ekrana basılmasının asenkron olduğu durumlarda kullanılır
* not: find methodu promise döndürdüğü için async await ile kullanılmalı

* eğer seçici methoda all ifadesi eklersek seçici koşula uyan bütün elemanları getirir
* not: all kullanılırsa dönen cevapta 1 eleman olsa bile dizi döner
* not: all kullanılmazsa ama ekranda koşula uyan 1 den fazla cevap versa hata verir
*/
