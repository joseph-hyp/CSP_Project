export interface VillageInfo {
  name: string;
  tagline: string;
  description: string;
  mandal: string;
  district: string;
  state: string;
  pincode: string;
  population: string;
  area: string;
  mainOccupations: string[];
  facilities: string[];
  location: {
    latitude: number;
    longitude: number;
    mapLink: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  established: string;
  governance: string;
}

export const village: VillageInfo = {
  name: "Rampur",
  tagline: "A Progressive Village in the Heart of Rural India",
  description:
    "Rampur is a vibrant village known for its agricultural heritage, strong community bonds, and progressive outlook. With a population of over 5,000 residents, the village has made significant strides in education, healthcare, and digital connectivity while preserving its cultural traditions.",
  mandal: "Rampur Mandal",
  district: "Medak",
  state: "Telangana",
  pincode: "502101",
  population: "5,240 (2021 Census)",
  area: "1,245 hectares",
  mainOccupations: [
    "Agriculture (Paddy, Cotton, Maize)",
    "Dairy Farming",
    "Handloom Weaving",
    "Small-scale Retail",
    "Government Services",
  ],
  facilities: [
    "Gram Panchayat Office",
    "Primary Health Centre (PHC)",
    "Government High School",
    "Anganwadi Centres (3)",
    "Public Distribution System (PDS) Shop",
    "Veterinary Hospital",
    "Post Office",
    "Bank Branch (SBI)",
    "Common Service Centre (CSC)",
    "Community Hall",
    "Sports Ground",
    "Library",
  ],
  location: {
    latitude: 18.0452,
    longitude: 78.2588,
    mapLink: "https://maps.google.com/?q=18.0452,78.2588",
  },
  contact: {
    email: "rampur.gramapanchayat@telangana.gov.in",
    phone: "+91-8455-2XXXXX",
    address: "Gram Panchayat Office, Main Road, Rampur - 502101",
  },
  established: "1952",
  governance: "Gram Panchayat (Sarpanch + 12 Ward Members)",
};

export const siteMetadata = {
  title: "Rampur Village Information Portal",
  description:
    "Official information portal for Rampur Village - Government schemes, schools, health services, contacts, local businesses, and emergency numbers.",
  keywords: [
    "Rampur village",
    "village information",
    "government schemes",
    "rural development",
    "panchayat",
    "Telangana villages",
  ],
  url: "https://rampur-village-portal.vercel.app",
  ogImage: "/images/village-og.jpg",
};