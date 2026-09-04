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
    id: "phc-rampur",
    name: "Primary Health Centre (PHC) Rampur",
    type: "phc",
    address: "Hospital Road, Rampur Village, Rampur Mandal, Medak District - 502101",
    phone: "+91-8455-2XXXXX",
    phoneAlt: "+91-9450XXXXXX",
    email: "mo.phc.rampur@telangana.gov.in",
    workingHours: "Mon-Sat: 9:00 AM - 4:00 PM (OPD)",
    emergencyHours: "24x7 Emergency Services Available",
    services: [
      "General OPD Consultation",
      "Maternal & Child Health (ANC/PNC)",
      "Immunization (Universal Immunization Programme)",
      "Family Planning Services",
      "Communicable Disease Control (TB, Malaria, Leprosy)",
      "Non-Communicable Disease Screening (Diabetes, Hypertension)",
      "Minor Surgical Procedures",
      "Essential Drug Dispensing",
      "Laboratory Services (Basic)",
      "Referral Services",
      "School Health Programme",
      "Adolescent Health (RKSK)",
      "National Health Mission Programs",
    ],
    facilities: [
      "OPD Rooms (3)",
      "Labour Room (1)",
      "Minor OT (1)",
      "Laboratory (1)",
      "Pharmacy/Drug Store (1)",
      "Wards - Male (6 beds), Female (6 beds)",
      "Newborn Care Corner",
      "Ambulance (1 - 108)",
      "Generator Backup",
      "Cold Chain Equipment",
      "Biomedical Waste Management",
    ],
    staff: {
      doctors: 2,
      nurses: 4,
      paramedics: 3,
      others: 5,
    },
    inCharge: "Dr. Rajesh Kumar (Medical Officer)",
    ambulance: true,
    ambulancePhone: "108 / +91-9450XXXXXX",
    distanceFromVillageCenter: "0.8 km",
    notes:
      "PHC serves Rampur and 8 surrounding villages. 108 Ambulance stationed at PHC. For specialized care, patients referred to CHC Medak or District Hospital.",
  },
  {
    id: "sc-rampur-main",
    name: "Health Sub-Centre - Rampur Main",
    type: "sub-centre",
    address: "Near Panchayat Office, Main Village, Rampur",
    phone: "+91-9451XXXXXX",
    workingHours: "Mon-Sat: 9:00 AM - 1:00 PM",
    emergencyHours: "ANM available on call for emergencies",
    services: [
      "ANC/PNC Check-ups",
      "Immunization Sessions (VHND)",
      "Family Planning Counseling",
      "Health Education",
      "Basic First Aid",
      "Referral to PHC",
    ],
    facilities: [
      "Examination Room",
      "Drug Kit",
      "Cold Box for Vaccines",
      "Delivery Kit",
    ],
    staff: {
      doctors: 0,
      nurses: 1,
      paramedics: 1,
      others: 0,
    },
    inCharge: "ANM Smt. Anitha Reddy",
    ambulance: false,
    distanceFromVillageCenter: "0.2 km",
    notes:
      "Sub-centre conducts Village Health & Nutrition Day (VHND) every Wednesday. ASHA workers coordinate community mobilization.",
  },
  {
    id: "sc-harijanawada",
    name: "Health Sub-Centre - Harijanawada",
    type: "sub-centre",
    address: "Harijanawada, Rampur Village",
    phone: "+91-9452XXXXXX",
    workingHours: "Mon-Sat: 9:00 AM - 1:00 PM",
    emergencyHours: "ANM available on call",
    services: [
      "ANC/PNC Check-ups",
      "Immunization",
      "Family Planning",
      "Health Education",
      "Basic First Aid",
    ],
    facilities: ["Examination Room", "Drug Kit", "Cold Box"],
    staff: {
      doctors: 0,
      nurses: 1,
      paramedics: 0,
      others: 0,
    },
    inCharge: "ANM Smt. Kavitha",
    ambulance: false,
    distanceFromVillageCenter: "1.2 km",
  },
  {
    id: "vet-hospital",
    name: "Veterinary Hospital Rampur",
    type: "vet",
    address: "Near PHC, Hospital Road, Rampur",
    phone: "+91-8455-2XXXXX",
    phoneAlt: "+91-9453XXXXXX",
    workingHours: "Mon-Sat: 10:00 AM - 4:00 PM",
    emergencyHours: "Emergency calls attended by VAS",
    services: [
      "Animal Treatment (Cattle, Buffalo, Sheep, Goat, Poultry)",
      "Vaccination (FMD, HS, BQ, PPR, Ranikhet)",
      "Artificial Insemination (AI)",
      "Infertility Management",
      "Deworming",
      "Extension & Training",
      "Livestock Insurance Facilitation",
    ],
    facilities: [
      "Examination Room",
      "Minor Surgery Room",
      "AI Centre",
      "Drug Store",
      "Cold Chain",
    ],
    staff: {
      doctors: 1,
      nurses: 0,
      paramedics: 2,
      others: 1,
    },
    inCharge: "Dr. Venkataiah (Veterinary Assistant Surgeon)",
    ambulance: false,
    distanceFromVillageCenter: "0.9 km",
    notes: "Mobile veterinary clinic visits villages weekly. Emergency helpline: 1962.",
  },
];

export const nearbyHospitals = [
  {
    id: "chc-medak",
    name: "Community Health Centre (CHC) Medak",
    type: "chc" as const,
    address: "Medak Town, Medak District - 502110",
    phone: "+91-8452-2XXXXX",
    phoneAlt: "108",
    workingHours: "24x7",
    services: [
      "Specialist OPD (Medicine, Surgery, OBG, Pediatrics, Ortho)",
      "Emergency & Trauma Care",
      "Inpatient Services (30 beds)",
      "Operation Theatre (Major/Minor)",
      "Blood Storage Unit",
      "X-Ray, Ultrasound, Lab",
      "NRC (Nutritional Rehabilitation Centre)",
      "SNCC (Special Newborn Care Unit)",
    ],
    distanceFromVillageCenter: "12 km",
    referralFrom: "PHC Rampur",
  },
  {
    id: "dh-medak",
    name: "District Headquarters Hospital, Medak",
    type: "hospital" as const,
    address: "Medak Town, Medak District - 502110",
    phone: "+91-8452-2XXXXX",
    phoneAlt: "108",
    workingHours: "24x7",
    services: [
      "All Specialty Departments",
      "ICU / NICU / PICU",
      "Blood Bank",
      "CT Scan, X-Ray, Ultrasound",
      "Dialysis Unit",
      "Burns Unit",
      "Trauma Centre",
      "Comprehensive Lab Services",
    ],
    distanceFromVillageCenter: "12 km",
    referralFrom: "CHC Medak / PHC Rampur",
  },
  {
    id: "gh-hyderabad",
    name: "Gandhi Hospital / Osmania / NIMS - Hyderabad",
    type: "hospital" as const,
    address: "Hyderabad - 5000XX",
    phone: "108 / Hospital Specific Numbers",
    workingHours: "24x7",
    services: ["Super-specialty Care (Cardiology, Neurology, Oncology, Transplant, etc.)"],
    distanceFromVillageCenter: "100 km",
    referralFrom: "District Hospital Medak",
  },
];

export const emergencyNumbers = [
  { service: "Ambulance (108)", number: "108", description: "Free emergency ambulance service", available: "24x7" },
  { service: "Police Emergency", number: "100 / 112", description: "Police emergency helpline", available: "24x7" },
  { service: "Fire Emergency", number: "101", description: "Fire brigade emergency", available: "24x7" },
  { service: "Women Helpline", number: "181", description: "Women safety & distress helpline", available: "24x7" },
  { service: "Child Helpline", number: "1098", description: "Child protection helpline", available: "24x7" },
  { service: "Health Helpline", number: "104", description: "Medical advice & health information", available: "24x7" },
  { service: "Veterinary Emergency", number: "1962", description: "Animal health emergency", available: "24x7" },
  { service: "Electricity Complaint", number: "1912", description: "Power outage & electrical emergency", available: "24x7" },
  { service: "Disaster Management", number: "1077", description: "District disaster control room", available: "24x7" },
  { service: "Anti-Corruption", number: "1064", description: "Report corruption in public services", available: "Working Hours" },
];

export const healthPrograms = [
  {
    name: "National Health Mission (NHM)",
    description: "Umbrella programme for health system strengthening",
    keyComponents: ["ASHA Programme", "Janani Suraksha Yojana", "Rashtriya Bal Swasthya Karyakram", "National Disease Control Programmes"],
  },
  {
    name: "Ayushman Bharat - Health & Wellness Centres",
    description: "PHC upgraded as HWC for comprehensive primary health care",
    keyComponents: ["Expanded Service Package", "Teleconsultation", "Free Essential Drugs & Diagnostics", "Wellness Activities (Yoga)"],
  },
  {
    name: "KCR Kit / Amma Vodi",
    description: "Telangana scheme for pregnant women & newborns",
    keyComponents: ["₹12,000 Financial Assistance", "KCR Kit (Baby Essentials)", "Institutional Delivery Incentive"],
  },
  {
    name: "Aarogyasri / PMJAY",
    description: "Cashless hospitalization up to ₹5 lakh/year",
    keyComponents: ["Empanelled Hospitals", "Pre-authorization", "No Cap on Family Size", "Portability Across India"],
  },
];