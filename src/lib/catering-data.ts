import african from "@/assets/food-african.jpg";
import arabic from "@/assets/food-arabic.jpg";
import asian from "@/assets/food-asian.jpg";
import european from "@/assets/food-european.jpg";
import mediterranean from "@/assets/food-mediterranean.jpg";
import american from "@/assets/food-american.jpg";

export type Cuisine =
  | "Afrikansk"
  | "Arabisk"
  | "Asiatisk"
  | "Europeisk"
  | "Medelhavet"
  | "Amerikansk";

export type Dish = {
  id: string;
  name: string;
  cuisine: Cuisine;
  description: string;
  price: number; // per person
  image: string;
};

export const cuisines: Cuisine[] = [
  "Afrikansk",
  "Arabisk",
  "Asiatisk",
  "Europeisk",
  "Medelhavet",
  "Amerikansk",
];

export const dishes: Dish[] = [
  {
    id: "jollof-festbuffe",
    name: "Jollof Festbuffé",
    cuisine: "Afrikansk",
    description:
      "Kryddig västafrikansk jollof med grillad kyckling, plantain och pikanta såser.",
    price: 285,
    image: african,
  },
  {
    id: "tagine-marrakech",
    name: "Tagine Marrakech",
    cuisine: "Afrikansk",
    description:
      "Långkokt lammtagine med saffran, mandel och torkade aprikoser, serveras med couscous.",
    price: 325,
    image: african,
  },
  {
    id: "mezze-royale",
    name: "Mezze Royale",
    cuisine: "Arabisk",
    description:
      "Lyxig arabisk mezze med hummus, baba ganoush, kebab, datteltallrik och granatäpple.",
    price: 295,
    image: arabic,
  },
  {
    id: "mansaf",
    name: "Mansaf med saffransris",
    cuisine: "Arabisk",
    description:
      "Traditionell rätt med långkokt lamm i jameedsås toppad med rostade mandlar.",
    price: 345,
    image: arabic,
  },
  {
    id: "sushi-omakase",
    name: "Premium Sushi Omakase",
    cuisine: "Asiatisk",
    description:
      "Handgjord sushi och sashimi på handplockad rå fisk med yuzu och tryffelmajonnäs.",
    price: 425,
    image: asian,
  },
  {
    id: "bao-fusion",
    name: "Asiatisk Bao-fusion",
    cuisine: "Asiatisk",
    description:
      "Fluffiga bao buns fyllda med fläsksida, gochujang-glaserad kyckling och pickles.",
    price: 265,
    image: asian,
  },
  {
    id: "nordic-arv",
    name: "Nordiskt Arv",
    cuisine: "Europeisk",
    description:
      "Säsongens råvaror, viltragu och rotfrukter med en modern svensk twist.",
    price: 365,
    image: european,
  },
  {
    id: "duck-confit",
    name: "Confit de Canard",
    cuisine: "Europeisk",
    description:
      "Klassisk fransk anka confit med pommes sarladaise och vinreduktion.",
    price: 385,
    image: european,
  },
  {
    id: "mezze-deluxe",
    name: "Mezze Deluxe",
    cuisine: "Medelhavet",
    description:
      "Krämig hummus, tabbouleh, falafel, oliver och nybakat pitabröd.",
    price: 245,
    image: mediterranean,
  },
  {
    id: "fisk-medelhavet",
    name: "Medelhavsfisk",
    cuisine: "Medelhavet",
    description:
      "Grillad havsabborre med citron, fänkål, kapris och olivolja från Kalamata.",
    price: 335,
    image: mediterranean,
  },
  {
    id: "bbq-board",
    name: "BBQ Smokehouse Board",
    cuisine: "Amerikansk",
    description:
      "Långrökt brisket, pulled pork, majsbröd, coleslaw och pickles på rustik bricka.",
    price: 315,
    image: american,
  },
  {
    id: "soul-supper",
    name: "Soul Supper",
    cuisine: "Amerikansk",
    description:
      "Buttermilk-friterad kyckling, mac & cheese, collard greens och cornbread.",
    price: 275,
    image: american,
  },
];
