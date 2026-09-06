export interface VillageInfo {
  name: string;
  tagline: string;
  description: string;
  area: string;
  district: string;
  state: string;
  pincode: string;
  population: string;
  households: string;
  voters: string;
  maleVoters: string;
  femaleVoters: string;
  governmentSchools: string;
  location: {
    mapLink: string;
  };
  contact: {
    address: string;
  };
  governance: string;
}

export const village: VillageInfo = {
  name: "Nammivanipeta",
  tagline: "Village Information Portal — Community Service Project",
  description:
    "Welcome to the Nammivanipeta Village Information Portal. This Community Service Project brings important information about the village, education, public services, community infrastructure, government schemes and local facilities together in one simple digital platform.",
  area: "Bheemunipatnam/Bheemili area",
  district: "Visakhapatnam",
  state: "Andhra Pradesh",
  pincode: "531162",
  population: "3,541",
  households: "1,455",
  voters: "1,307",
  maleVoters: "654",
  femaleVoters: "653",
  governmentSchools: "2",
  location: {
    mapLink:
      "https://www.google.com/maps/search/Nammivanipeta+Bheemunipatnam+Visakhapatnam+Andhra+Pradesh",
  },
  contact: {
    address:
      "Nammivanipeta, Sangivalasa, Bheemunipatnam area, Visakhapatnam, Andhra Pradesh - 531162",
  },
  governance: "Local Administrative Body (Bheemunipatnam/Bheemili area)",
};

export const siteMetadata = {
  title: "Nammivanipeta Village Information Portal",
  description:
    "Community Service Project information portal for Nammivanipeta — Government schemes, schools, health services, contacts, local businesses, and emergency numbers.",
  keywords: [
    "Nammivanipeta village",
    "village information",
    "government schemes",
    "community service project",
    "CSP",
    "Andhra Pradesh villages",
  ],
  url: "https://csp-project-sage.vercel.app",
  ogImage: "/images/village-og.jpg",
};
