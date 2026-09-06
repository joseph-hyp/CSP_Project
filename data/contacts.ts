export interface Contact {
  id: string;
  name: string;
  designation: string;
  department: string;
  phone: string;
  phoneAlt?: string;
  email?: string;
  address: string;
  workingHours: string;
  category:
    | "panchayat"
    | "revenue"
    | "education"
    | "health"
    | "police"
    | "utilities"
    | "other";
  priority: number;
}

export const contacts: Contact[] = [
  // Education
  {
    id: "gvmc-school",
    name: "GVMC Primary School",
    designation: "Government Primary School",
    department: "Greater Visakhapatnam Municipal Corporation (GVMC)",
    phone: "To be updated after field verification",
    address:
      "Nammivanipeta, Sangivalasa, Bheemunipatnam zone, Visakhapatnam - 531162",
    workingHours: "Mon-Sat: 8:00 AM - 3:00 PM",
    category: "education",
    priority: 1,
  },
  {
    id: "ameya-vidyalaya",
    name: "Ameya Vidyalaya",
    designation: "Private School",
    department: "Education",
    phone: "To be updated after field verification",
    address:
      "Nammivanipeta, Sangivalasa, Visakhapatnam - 531162",
    workingHours: "Mon-Sat: 8:00 AM - 4:00 PM",
    category: "education",
    priority: 2,
  },

  // Health
  {
    id: "nearest-phc",
    name: "Nearest Health Centre",
    designation: "Primary Health Centre",
    department: "Health & Family Welfare, Andhra Pradesh",
    phone: "108 (Ambulance) / 104 (Health Helpline)",
    address: "Bheemunipatnam area — to be confirmed during field visit",
    workingHours: "24x7 Emergency",
    category: "health",
    priority: 1,
  },

  // Police
  {
    id: "police-emergency",
    name: "Police Emergency",
    designation: "Emergency Services",
    department: "Andhra Pradesh Police",
    phone: "100 / 112",
    address: "National Emergency",
    workingHours: "24x7",
    category: "police",
    priority: 1,
  },

  // Utilities
  {
    id: "electricity-ap",
    name: "APSPDCL (Electricity)",
    designation: "Complaint Helpline",
    department: "Andhra Pradesh Southern Power Distribution Company",
    phone: "1912 (Toll Free)",
    address: "Andhra Pradesh",
    workingHours: "24x7 Complaint Line",
    category: "utilities",
    priority: 1,
  },

  // Other
  {
    id: "fire",
    name: "Fire Emergency",
    designation: "Fire Services",
    department: "Andhra Pradesh Fire Services",
    phone: "101",
    address: "National Emergency",
    workingHours: "24x7",
    category: "other",
    priority: 1,
  },
  {
    id: "childline",
    name: "Childline",
    designation: "Child Helpline",
    department: "Ministry of Women & Child Development",
    phone: "1098 (Toll Free - 24x7)",
    address: "National Helpline",
    workingHours: "24x7",
    category: "other",
    priority: 2,
  },
  {
    id: "women-helpline",
    name: "Women Helpline",
    designation: "Women Safety Helpline",
    department: "Andhra Pradesh Government",
    phone: "181 (Toll Free - 24x7)",
    address: "State-wide Helpline",
    workingHours: "24x7",
    category: "other",
    priority: 3,
  },
];

export const contactCategories = [
  { id: "all", label: "All Contacts" },
  { id: "education", label: "Education" },
  { id: "health", label: "Health" },
  { id: "police", label: "Police" },
  { id: "utilities", label: "Utilities" },
  { id: "other", label: "Other Services" },
];
