export const products = [
  {
    id: 1,
    name: "Coffee Vanilla",
    subtitle: "Warm & Indulgent",
    description:
      "A rich, velvety blend of freshly brewed coffee and sweet vanilla bean. This candle fills your space with the comforting warmth of a cozy cafe morning — bold, smooth, and utterly irresistible.",
    scent: "Coffee · Vanilla · Caramel",
    burnTime: "45–50 hours",
    weight: "200g",
    price: 45000,
    images: [
      "/images/Creamish-coffe vanilla 1.png",
      "/images/Creamish-coffe vanilla 2.png",
    ],
    accent: "#c8956c",
    tag: "Bestseller",
    mood: "Cozy · Warm · Inviting",
  },
  {
    id: 2,
    name: "Citronella",
    subtitle: "Fresh & Uplifting",
    description:
      "Crisp citrus notes of lemongrass and citronella dance together in this bright, energising candle. Perfect for outdoor evenings or whenever you need a burst of fresh, clean air in your home.",
    scent: "Citronella · Lemongrass · Fresh Citrus",
    burnTime: "45–50 hours",
    weight: "200g",
    price: 45000,
    images: [
      "/images/Pale yellow-citronella 1.png",
      "/images/Pale yellow-citronella 2.png",
    ],
    accent: "#d4c44a",
    tag: "New Arrival",
    mood: "Fresh · Bright · Energising",
  },
  {
    id: 3,
    name: "Lavender & Eucalyptus",
    subtitle: "Calm & Serene",
    description:
      "A tranquil fusion of soft lavender fields and cool eucalyptus. This candle transforms any room into a sanctuary of peace — ideal for winding down, meditation, or a luxurious bath ritual.",
    scent: "Lavender · Eucalyptus · White Musk",
    burnTime: "45–50 hours",
    weight: "200g",
    price: 45000,
    images: [
      "/images/White- lavender and eucalyptus 1.png",
      "/images/White- lavender and eucalyptus 2.png",
    ],
    accent: "#9b8ec4",
    tag: "Fan Favourite",
    mood: "Calm · Peaceful · Luxurious",
  },
];

export const formatPrice = (price) =>
  "UGX " + price.toLocaleString("en-UG");
