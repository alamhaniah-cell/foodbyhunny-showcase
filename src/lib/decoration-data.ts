import backdrop from "@/assets/decor-backdrop.jpg";
import balloons from "@/assets/decor-balloons.jpg";
import table from "@/assets/decor-table.jpg";
import chairs from "@/assets/decor-chairs.jpg";
import flowers from "@/assets/decor-flowers.jpg";
import lighting from "@/assets/decor-lighting.jpg";

export type DecorCategory =
  | "Ballonger"
  | "Bordsdekorationer"
  | "Stolsöverdrag"
  | "Blommor"
  | "Bakgrunder"
  | "Ljusdekorationer";

export type Decoration = {
  id: string;
  name: string;
  category: DecorCategory;
  description: string;
  price: number;
  image: string;
};

export const decorCategories: DecorCategory[] = [
  "Ballonger",
  "Bordsdekorationer",
  "Stolsöverdrag",
  "Blommor",
  "Bakgrunder",
  "Ljusdekorationer",
];

export const decorations: Decoration[] = [
  {
    id: "balloon-arch-gold",
    name: "Guldballonsbåge",
    category: "Ballonger",
    description: "Elegant ballongbåge i beige, guld och cream för entré eller fotostation.",
    price: 2495,
    image: balloons,
  },
  {
    id: "balloon-cluster",
    name: "Ballongkluster",
    category: "Ballonger",
    description: "Skräddarsydda ballongkluster i valfri palett – perfekt för baby shower och födelsedagar.",
    price: 1295,
    image: balloons,
  },
  {
    id: "table-luxe",
    name: "Bordsdukning Luxe",
    category: "Bordsdekorationer",
    description: "Komplett bordsdukning med guldbestick, kristallglas och linnedukar (per bord).",
    price: 895,
    image: table,
  },
  {
    id: "centerpiece-eucalyptus",
    name: "Centerpiece Eucalyptus",
    category: "Bordsdekorationer",
    description: "Naturligt centerpiece med eucalyptus, ljusstakar och vita stearinljus.",
    price: 495,
    image: table,
  },
  {
    id: "chair-cover-white",
    name: "Stolsöverdrag Vit",
    category: "Stolsöverdrag",
    description: "Premium vita stolsöverdrag med satinrosett i valfri färg (per stol).",
    price: 65,
    image: chairs,
  },
  {
    id: "chiavari-gold",
    name: "Chiavari Guld",
    category: "Stolsöverdrag",
    description: "Eleganta gyllene chiavari-stolar med vit sittdyna (per stol).",
    price: 95,
    image: chairs,
  },
  {
    id: "bouquet-romance",
    name: "Romance Bukett",
    category: "Blommor",
    description: "Lyxig bukett med vita rosor, peoner och eucalyptus.",
    price: 1495,
    image: flowers,
  },
  {
    id: "flower-runner",
    name: "Blomslinga",
    category: "Blommor",
    description: "Lång blomslinga för långbord eller bröllopsbåge (per meter).",
    price: 695,
    image: flowers,
  },
  {
    id: "backdrop-floral",
    name: "Blomsterbackdrop",
    category: "Bakgrunder",
    description: "Imponerande blomsterbackdrop med guldram för fotostation och ceremoni.",
    price: 3995,
    image: backdrop,
  },
  {
    id: "backdrop-draped",
    name: "Drapad Backdrop",
    category: "Bakgrunder",
    description: "Mjukt drapad backdrop i creme med varm ljussättning.",
    price: 2495,
    image: backdrop,
  },
  {
    id: "string-lights",
    name: "Ljusslingor",
    category: "Ljusdekorationer",
    description: "Varma edison-ljusslingor för utomhus- och inomhusevent (per 10 meter).",
    price: 395,
    image: lighting,
  },
  {
    id: "candle-set",
    name: "Ljus-set Premium",
    category: "Ljusdekorationer",
    description: "Set med 24 stearinljus i mässingshållare för stämningsfull belysning.",
    price: 595,
    image: lighting,
  },
];
