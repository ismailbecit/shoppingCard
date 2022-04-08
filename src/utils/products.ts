import { v4 as uuid } from "uuid";
export const Products = [
  {
    id: uuid(),
    img: "https://cdn.dsmcdn.com/ty330/product/media/images/20220215/18/50783795/68274902/2/2_org_zoom.jpg",
    title: "T-shirt",
    content: "Test",
    price: 100,
    count: 1,
  },
  {
    id: uuid(),
    img: "https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0119320_socksmax-multi-erkek-cocuk-corap-8020909011.jpeg",
    title: "Çorap",
    content: "Cok güzel bir çorap bu",
    price: 250,
    count: 1,
  },
  {
    id: uuid(),
    img: "https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0117512_cars-kirmizi-erkek-cocuk-cekcekli-canta-705595390.jpeg",
    title: "Erkek Çocuk Çanta",
    content: "Çok iyi Bir Çanta buu",
    price: 300,
    count: 1,
  },
  {
    id: uuid(),
    img: "https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0096654_nike-cw6735-004-team-hustle-d-10-gs-2000cw6735004.jpeg",
    title: "Ayakkabı",
    content: `Nike Team Hustle D 10
      Big Kids' Basketball Shoe
      TÜM SPORCULAR İÇİN TASARLANDI.
      Nike Team Hustle D 10, oyun zamanından basketbol maçlarına kadar her yerde, her seviyedeki sporcular için idealdir. Tabandaki optimize edilmiş tutuş deseni, daha güvenli bağcıkları ve hem dayanıklı hem `,
    price: 500,
    count: 1,
  },
];
