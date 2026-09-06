export interface HealthFacility {
  id: string;
  name: string;
  type: "phc" | "chc" | "hospital" | "sub-centre" | "vet" | "diagnostic" | "pharmacy";
  address: string;
  phone: string;
  phoneAlt?: string;
  email?: string;
  workingHours: string;
  emergencyHours: string;
  services: string[];
  facilities: string[];
  staff: {
    doctors: number;
    nurses: number;
    paramedics: number;
    others: number;
  };
  inCharge: string;
  ambulance: boolean;
  ambulancePhone?: string;
  distanceFromVillageCenter: string;
  notes?: string;
}

export const healthFacilities: HealthFacility[] = [
  {
    id: "nearest-health-center",
    name: "Nearest Health Centre",
    type: "phc",
    address: "Bheemunipatnam area, Visakhapatnam — to be confirmed during field visit",
    phone: "108 (Ambulance) / 104 (Health Helpline)",
    workingHours: "Contact for timings",
    emergencyHours: "24x7 Emergency (108 Ambulance)",
    services: [
      "General OPD Consultation",
      "Maternal & Child Health",
      "Immunization",
      "Basic Laboratory Services",
      "Referral Services",
      "National Health Mission Programs",
    ],
    facilities: ["OPD Room", "Pharmacy", "Laboratory (Basic)", "Emergency Ambulance (108)"],
    staff: {
      doctors: 0,
      nurses: 0,
      paramedics: 0,
      others: 0,
    },
    inCharge: "To be updated after field verification",
    ambulance: true,
    ambulancePhone: "108",
    distanceFromVillageCenter: "To be confirmed during field visit",
    notes:
      "Specific health facility details to be verified during the CSP field visit. Contact 108 for emergency ambulance service.",
  },
];

export const nearbyHospitals = [
  {
    id: "bheemili-hospital",
    name: "Nearest Government Hospital - Bheemunipatnam Area",
    type: "hospital" as const,
    address: "Bheemunipatnam/Bheemili, Visakhapatnam — to be confirmed during field visit",
    phone: "108 / To be verified",
    workingHours: "24x7",
    services: [
      "Emergency Services",
      "General OPD",
      "Inpatient Services",
      "Referral to Visakhapatnam GH / King George Hospital",
    ],
    distanceFromVillageCenter: "Nearby — to be confirmed",
    referralFrom: "Nearest PHC / Health Centre",
  },
  {
    id: "kg-hospital",
    name: "King George Hospital (KGH) - Visakhapatnam",
    type: "hospital" as const,
    address: "Visakhapatnam, Andhra Pradesh",
    phone: "To be verified",
    workingHours: "24x7",
    services: [
      "All Specialty Departments",
      "ICU / Emergency",
      "Trauma Centre",
      "Blood Bank",
      "CT Scan, X-Ray, Ultrasound",
      "Dialysis Unit",
    ],
    distanceFromVillageCenter: "Approximately 20-30 km",
    referralFrom: "District / Local hospitals",
  },
];

export const emergencyNumbers = [
  {
    service: "Ambulance (108)",
    number: "108",
    description: "Free emergency ambulance service",
    available: "24x7",
  },
  {
    service: "Police Emergency",
    number: "100 / 112",
    description: "Police emergency helpline",
    available: "24x7",
  },
  {
    service: "Fire Emergency",
    number: "101",
    description: "Fire brigade emergency",
    available: "24x7",
  },
  {
    service: "Women Helpline",
    number: "181",
    description: "Women safety & distress helpline",
    available: "24x7",
  },
  {
    service: "Child Helpline",
    number: "1098",
    description: "Child protection helpline",
    available: "24x7",
  },
  {
    service: "Health Helpline",
    number: "104",
    description: "Medical advice & health information",
    available: "24x7",
  },
  {
    service: "Veterinary Emergency",
    number: "1962",
    description: "Animal health emergency",
    available: "24x7",
  },
  {
    service: "Electricity Complaint",
    number: "1912",
    description: "Power outage & electrical emergency",
    available: "24x7",
  },
  {
    service: "Disaster Management",
    number: "1077",
    description: "District disaster control room",
    available: "24x7",
  },
  {
    service: "Anti-Corruption",
    number: "1064",
    description: "Report corruption in public services",
    available: "Working Hours",
  },
];

export const healthPrograms = [
  {
    name: "National Health Mission (NHM)",
    description: "Umbrella programme for health system strengthening",
    keyComponents: [
      "ASHA Programme",
      "Janani Suraksha Yojana",
      "Rashtriya Bal Swasthya Karyakram",
      "National Disease Control Programmes",
    ],
  },
  {
    name: "Ayushman Bharat - Health & Wellness Centres",
    description:
      "PHC upgraded as HWC for comprehensive primary health care",
    keyComponents: [
      "Expanded Service Package",
      "Teleconsultation",
      "Free Essential Drugs & Diagnostics",
      "Wellness Activities (Yoga)",
    ],
  },
  {
    name: "PM-JAY / Ayushman Bharat",
    description: "Cashless hospitalization up to Rs 5 lakh/year",
    keyComponents: [
      "Empanelled Hospitals",
      "Pre-authorization",
      "No Cap on Family Size",
      "Portability Across India",
    ],
  },
];
