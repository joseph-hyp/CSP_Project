export interface Business {
  id: string;
  name: string;
  category: string;
  description: string;
  owner: string;
  phone: string;
  phoneAlt?: string;
  address: string;
  workingHours: string;
  services: string[];
  paymentMethods: string[];
  website?: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    whatsapp?: string;
  };
  location: string;
  rating?: string;
}

export const businesses: Business[] = [
  {
    id: "grocery-1",
    name: "General Grocery Store",
    category: "Grocery",
    description:
      "Local grocery store offering daily essentials, FMCG products, rice, dal, oil, sugar, spices, and household items.",
    owner: "Business information will be added from the CSP field survey.",
    phone: "To be updated after field verification",
    address: "Nammivanipeta, Visakhapatnam - 531162",
    workingHours: "To be updated",
    services: [
      "Daily Groceries",
      "Rice & Pulses",
      "Cooking Oil & Spices",
      "FMCG Products",
      "Household Items",
    ],
    paymentMethods: ["Cash", "UPI"],
    location: "Nammivanipeta",
  },
  {
    id: "medical-1",
    name: "Medical / Pharmacy",
    category: "Medical Shop",
    description:
      "Licensed pharmacy providing prescription medicines, OTC drugs, first-aid supplies, and basic health products.",
    owner: "Business information will be added from the CSP field survey.",
    phone: "To be updated after field verification",
    address: "Nammivanipeta, Visakhapatnam - 531162",
    workingHours: "To be updated",
    services: [
      "Prescription Medicines",
      "Over-the-Counter Drugs",
      "First Aid Supplies",
      "Health Supplements",
    ],
    paymentMethods: ["Cash", "UPI"],
    location: "Nammivanipeta",
  },
  {
    id: "tailoring-1",
    name: "Tailoring Shop",
    category: "Tailor",
    description:
      "Custom tailoring and alteration shop for men's and women's clothing.",
    owner: "Business information will be added from the CSP field survey.",
    phone: "To be updated after field verification",
    address: "Nammivanipeta, Visakhapatnam - 531162",
    workingHours: "To be updated",
    services: [
      "Blouse Stitching",
      "Shirt Tailoring",
      "Alterations & Repairs",
      "Readymade Garments",
    ],
    paymentMethods: ["Cash", "UPI"],
    location: "Nammivanipeta",
  },
  {
    id: "electrical-1",
    name: "Electrical Shop",
    category: "Electrical Shop",
    description:
      "Electrical goods shop offering fans, wires, switches, LED bulbs, and house wiring services.",
    owner: "Business information will be added from the CSP field survey.",
    phone: "To be updated after field verification",
    address: "Nammivanipeta, Visakhapatnam - 531162",
    workingHours: "To be updated",
    services: [
      "Electrical Fans & Wires",
      "Switches & MCBs",
      "LED Bulbs & Lights",
      "House Wiring Services",
    ],
    paymentMethods: ["Cash", "UPI"],
    location: "Nammivanipeta",
  },
  {
    id: "mobile-1",
    name: "Mobile / Internet Shop",
    category: "Mobile Shop",
    description:
      "Mobile phone shop offering new phones, accessories, repairs, recharges, and internet services.",
    owner: "Business information will be added from the CSP field survey.",
    phone: "To be updated after field verification",
    address: "Nammivanipeta, Visakhapatnam - 531162",
    workingHours: "To be updated",
    services: [
      "New Mobile Phones",
      "Mobile Accessories",
      "Mobile Repairing",
      "Mobile Recharge",
      "Internet Services",
    ],
    paymentMethods: ["Cash", "UPI"],
    location: "Nammivanipeta",
  },
  {
    id: "mechanic-1",
    name: "Mechanic / Auto Repair",
    category: "Mechanic",
    description:
      "Two-wheeler and three-wheeler repair and service center.",
    owner: "Business information will be added from the CSP field survey.",
    phone: "To be updated after field verification",
    address: "Nammivanipeta, Visakhapatnam - 531162",
    workingHours: "To be updated",
    services: [
      "Two-Wheeler Repair",
      "Engine Oil Change",
      "Brake Repair",
      "Spare Parts",
    ],
    paymentMethods: ["Cash", "UPI"],
    location: "Nammivanipeta",
  },
  {
    id: "restaurant-1",
    name: "Local Restaurant / Tiffin Centre",
    category: "Restaurant",
    description:
      "Local eatery serving South Indian meals and tiffin items.",
    owner: "Business information will be added from the CSP field survey.",
    phone: "To be updated after field verification",
    address: "Nammivanipeta, Visakhapatnam - 531162",
    workingHours: "To be updated",
    services: [
      "South Indian Meals",
      "Tiffin Items",
      "Tea & Coffee",
      "Snacks",
    ],
    paymentMethods: ["Cash", "UPI"],
    location: "Nammivanipeta",
  },
  {
    id: "agri-1",
    name: "Agricultural Services",
    category: "Agricultural Services",
    description:
      "Agricultural inputs shop providing seeds, fertilizers, pesticides, and farm equipment guidance.",
    owner: "Business information will be added from the CSP field survey.",
    phone: "To be updated after field verification",
    address: "Nammivanipeta, Visakhapatnam - 531162",
    workingHours: "To be updated",
    services: [
      "Seeds",
      "Fertilizers",
      "Pesticides & Herbicides",
      "Farm Tools",
      "Crop Advisory",
    ],
    paymentMethods: ["Cash", "UPI"],
    location: "Nammivanipeta",
  },
];

export const businessCategories = [
  { id: "all", label: "All Businesses", icon: "" },
  { id: "Grocery", label: "Grocery", icon: "" },
  { id: "Medical Shop", label: "Medical", icon: "" },
  { id: "Mechanic", label: "Mechanic", icon: "" },
  { id: "Tailor", label: "Tailor", icon: "" },
  { id: "Mobile Shop", label: "Mobile", icon: "" },
  { id: "Restaurant", label: "Restaurant", icon: "" },
  { id: "Electrical Shop", label: "Electrical", icon: "" },
  { id: "Agricultural Services", label: "Agriculture", icon: "" },
];
