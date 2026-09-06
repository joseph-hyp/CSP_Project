export interface School {
  id: string;
  name: string;
  type: "government" | "private" | "aided";
  level: "pre-primary" | "primary" | "upper-primary" | "high" | "higher-secondary";
  classes: string;
  medium: string[];
  studentStrength: string;
  staffCount: string;
  facilities: string[];
  address: string;
  phone: string;
  email?: string;
  website?: string;
  headmaster: string;
  established: string;
  recognition: string;
  achievements?: string[];
  distanceFromVillageCenter: string;
}

export const schools: School[] = [
  {
    id: "gvmc-primary-nvp",
    name: "GVMC Primary School, Nammivanipeta",
    type: "government",
    level: "primary",
    classes: "I - V",
    medium: ["Telugu"],
    studentStrength: "To be verified",
    staffCount: "To be verified",
    facilities: [
      "Classrooms",
      "Drinking Water",
      "Mid-Day Meal Kitchen",
      "Play Area",
    ],
    address:
      "Nammivanipeta, Sangivalasa, Bheemunipatnam zone, Visakhapatnam - 531162",
    phone: "To be updated after field verification",
    headmaster: "To be updated after field verification",
    established: "To be verified",
    recognition: "Recognized by GVMC / Govt. of Andhra Pradesh",
    distanceFromVillageCenter: "Within village",
  },
  {
    id: "ameya-vidyalaya",
    name: "Ameya Vidyalaya",
    type: "private",
    level: "primary",
    classes: "I - V",
    medium: ["Telugu", "English"],
    studentStrength: "To be verified",
    staffCount: "To be verified",
    facilities: ["Classrooms", "Drinking Water", "Play Area"],
    address:
      "Nammivanipeta, Sangivalasa, Visakhapatnam - 531162",
    phone: "To be updated after field verification",
    headmaster: "To be updated after field verification",
    established: "To be verified",
    recognition: "Recognized by Govt. of Andhra Pradesh",
    distanceFromVillageCenter: "Within village",
  },
];

export const nearbySchools: School[] = [
  {
    id: "bheemili-school",
    name: "Government Schools - Bheemunipatnam Area",
    type: "government",
    level: "high",
    classes: "VI - X",
    medium: ["Telugu", "English"],
    studentStrength: "Varies",
    staffCount: "Varies",
    facilities: ["Classrooms", "Laboratories", "Library", "Sports Ground"],
    address: "Bheemunipatnam/Bheemili area, Visakhapatnam",
    phone: "To be updated after field verification",
    headmaster: "To be updated",
    established: "To be verified",
    recognition: "Govt. of Andhra Pradesh",
    distanceFromVillageCenter: "Nearby area",
  },
];
