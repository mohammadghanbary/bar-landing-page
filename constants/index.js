const navLinks = [
  {
    id: "cocktails",
    title: "نوشیدنی ها",
  },
  {
    id: "about",
    title: "درباره ما",
  },
  {
    id: "contact",
    title: "ارتباط با ما",
  },
];

const cocktailLists = [
  {
    name: "Chapel Hill Shiraz",
    country: "AU",
    detail: "Battle",
    price: "$10",
  },
  {
    name: "Caten Malbee",
    country: "AU",
    detail: "Battle",
    price: "$49",
  },
  {
    name: "Rhino Pale Ale",
    country: "CA",
    detail: "750 ml",
    price: "$20",
  },
  {
    name: "Irish Guinness",
    country: "IE",
    detail: "600 ml",
    price: "$29",
  },
];

const mockTailLists = [
  {
    name: "Tropical Bloom",
    country: "US",
    detail: "Battle",
    price: "$10",
  },
  {
    name: "Passionfruit Mint",
    country: "US",
    detail: "Battle",
    price: "$49",
  },
  {
    name: "Citrus Glow",
    country: "CA",
    detail: "750 ml",
    price: "$20",
  },
  {
    name: "Lavender Fizz",
    country: "IE",
    detail: "600 ml",
    price: "$29",
  },
];

const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const featureLists = [
  "ترکیبی بی‌نقص و متعادل",
  "تزیین شده با ظرافتی مثال‌زدنی",
  "همیشه یخ‌زده و خنک",
  "حرفه‌ای تکان داده و هم زده شده",
];

const goodLists = [
  "مواد اولیه منتخب و باکیفیت",
  "فن‌آوری‌های خاص و منحصربه‌فرد",
  "نمایش هنر بارتندری حرفه‌ای",
  "ترکیبات تازه و عطرآگین",
];

const storeInfo = {
  heading: "ما کجا هستیم؟",
  address: "خیابان رازی - جنب خیابان فزهنگ",
  contact: {
    phone: "0114222342",
    email: "hello@jsmcocktail.com",
  },
};

const openingHours = [
  { day: "شنبه", time: "11:00am – 11pm" },
  { day: "یکشنبه", time: "11:00am – 8pm" },
  { day: "دوشنبه", time: "9:00am – 8am" },
  { day: "سه شنبه", time: "11:00am – 9pm" },
  { day: "چهارشنبه", time: "11:00am – 9pm" },
  { day: "پنجشنبه", time: "11:00am – 9pm" },
  { day: "جمعه", time: "11:00am – 9pm" },

];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
];

const allCocktails = [
  {
    id: 1,
    name: "Classic Mojito",
    image: "/images/drink1.png",
    title: "مواد اولیه ساده، طعمی قوی و متمایز",
    description:
      "مارگاریتا، این نوشیدنی خوشطعم و پرکشش، با تکیلا، آب لیموترش و لیقور پرتقال تهیه میشود. درست کردنش آسان است، اما شخصیت بینظیری دارد! برای تجربهای کامل، لبهی لیوان را با نمک بپوشانید - این نوشیدنی ایدئال برای شبهای تابستانی است.",
  },
  {
    id: 2,
    name: "Raspberry Mojito",
    image: "/images/drink2.png",
    title: "یک کلاسیک پرطرفدار که همیشه نتیجه میدهد",
    description:
      "مارگاریتا، این نوشیدنی خوشطعم و پرکشش، با تکیلا، آب لیموترش و لیقور پرتقال تهیه میشود. درست کردنش آسان است، اما شخصیت بینظیری دارد! برای تجربهای کامل، لبهی لیوان را با نمک بپوشانید - این نوشیدنی ایدئال برای شبهای تابستانی است.",
  },
  {
    id: 3,
    name: "Violet Breeze",
    image: "/images/drink3.png",
    title: "مواد اولیه ساده، طعمی قوی و متمایز",
    description:
      "مارگاریتا، این نوشیدنی خوشطعم و پرکشش، با تکیلا، آب لیموترش و لیقور پرتقال تهیه میشود. درست کردنش آسان است، اما شخصیت بینظیری دارد! برای تجربهای کامل، لبهی لیوان را با نمک بپوشانید - این نوشیدنی ایدئال برای شبهای تابستانی است.",
  },
  {
    id: 4,
    name: "Curacao Mojito",
    image: "/images/drink4.png",
    title: "با دقت آماده شده، با عشق سرو میشود",
    description:
      "مارگاریتا، این نوشیدنی خوشطعم و پرکشش، با تکیلا، آب لیموترش و لیقور پرتقال تهیه میشود. درست کردنش آسان است، اما شخصیت بینظیری دارد! برای تجربهای کامل، لبهی لیوان را با نمک بپوشانید - این نوشیدنی ایدئال برای شبهای تابستانی است.",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCocktails,
};
