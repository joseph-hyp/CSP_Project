export interface Scheme {
  id: string;
  name: string;
  description: string;
  category: "central" | "state" | "local";
  eligibility: string;
  benefit: string;
  applyAt: string;
  documents: string[];
  website?: string;
  contactPhone?: string;
  lastUpdated: string;
}

export const schemes: Scheme[] = [
  {
    id: "pm-kisan",
    name: "PM-KISAN Samman Nidhi",
    description:
      "Income support scheme providing Rs 6,000 per year in three equal installments to small and marginal farmer families.",
    category: "central",
    eligibility:
      "Small and marginal farmer families holding cultivable land up to 2 hectares. Excludes institutional land holders, former/present constitutional post holders, ministers, MPs/MLAs, serving/retired government employees (excluding Class IV/Group D), professionals, and income tax payees.",
    benefit:
      "Rs 6,000 per year (Rs 2,000 every 4 months) directly transferred to bank account",
    applyAt:
      "Village CSC / Panchayat Office / Agriculture Department / Online at pmkisan.gov.in",
    documents: [
      "Aadhaar Card",
      "Land Records (Title Deed / Passbook)",
      "Bank Account Passbook",
      "Mobile Number linked to Aadhaar",
    ],
    website: "https://pmkisan.gov.in",
    contactPhone: "155261 / 1800-115-526 (Toll Free)",
    lastUpdated: "2024-01-15",
  },
  {
    id: "ayushman-bharat",
    name: "Ayushman Bharat - PMJAY",
    description:
      "National health protection scheme providing cashless hospitalization cover up to Rs 5 lakh per family per year for secondary and tertiary care.",
    category: "central",
    eligibility:
      "Families identified under SECC 2011 database (Deprivation criteria D1-D7) and RSBY beneficiaries. Check eligibility at village CSC or PHC.",
    benefit:
      "Rs 5 lakh per family per year for hospitalization (cashless at empanelled hospitals)",
    applyAt:
      "Village CSC / PHC / District Hospital / Online at pmjay.gov.in",
    documents: [
      "Aadhaar Card / Any Government ID",
      "Ration Card",
      "Family Member Details",
      "Mobile Number",
    ],
    website: "https://pmjay.gov.in",
    contactPhone: "14555 / 1800-111-565 (Toll Free)",
    lastUpdated: "2024-01-12",
  },
  {
    id: "pmay-grameen",
    name: "Pradhan Mantri Awas Yojana - Gramin (PMAY-G)",
    description:
      "Central government scheme providing financial assistance for construction of pucca houses for rural homeless and those living in kutcha/dilapidated houses.",
    category: "central",
    eligibility:
      "Rural households without pucca house or living in 0/1/2 room kutcha house. Priority to SC/ST, minorities, freed bonded labourers, widows, disabled. Identified through SECC 2011 + Gram Sabha verification.",
    benefit:
      "Rs 1.20 lakh (plain areas) / Rs 1.30 lakh (hilly/difficult areas) in 3 installments + MGNREGS wage component + Toilet construction under SBM-G",
    applyAt:
      "Gram Panchayat Office / Block Development Office / Online at pmayg.nic.in",
    documents: [
      "Aadhaar Card",
      "Job Card (MGNREGS)",
      "Bank Account Passbook",
      "Land Ownership Document / NOC from Landlord",
      "SECC Data Verification",
      "Passport-size Photos",
    ],
    website: "https://pmayg.nic.in",
    contactPhone: "1800-11-6446 (Toll Free)",
    lastUpdated: "2024-01-18",
  },
  {
    id: "mgnerga",
    name: "MGNREGS (Mahatma Gandhi NREGS)",
    description:
      "Guarantees 100 days of wage employment per financial year to rural households whose adult members volunteer for unskilled manual work.",
    category: "central",
    eligibility:
      "Any rural household with adult members (18+) willing to do unskilled manual work. Job card issued after verification by Gram Panchayat.",
    benefit:
      "Wage payment for 100 days per household per year; paid directly to bank/post office account",
    applyAt: "Gram Panchayat Office / Mandal Parishad Office",
    documents: [
      "Aadhaar Card (all adult members)",
      "Ration Card",
      "Passport-size Photos",
      "Bank/Post Office Account Details",
    ],
    website: "https://nrega.nic.in",
    contactPhone: "1800-111-555 (Toll Free)",
    lastUpdated: "2024-01-15",
  },
  {
    id: "soil-health-card",
    name: "Soil Health Card Scheme",
    description:
      "Provides farmers with soil health cards containing soil nutrient status and recommendations for appropriate fertilizer use.",
    category: "central",
    eligibility:
      "All farmers with cultivable land. Soil samples collected from grid points.",
    benefit:
      "Free soil testing every 2 years; card with macro/micro nutrient status, pH, EC, organic carbon + fertilizer recommendations",
    applyAt: "Village Agriculture Officer / Mandal Agriculture Office / CSC",
    documents: ["Aadhaar Card", "Land Records", "Mobile Number"],
    website: "https://soilhealth.dac.gov.in",
    lastUpdated: "2024-01-10",
  },
  {
    id: "pmjjby",
    name: "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)",
    description:
      "Life insurance scheme providing Rs 2 lakh coverage at a nominal annual premium for individuals aged 18-50 years.",
    category: "central",
    eligibility:
      "Individuals aged 18-50 years with savings bank account. Annual auto-debit of premium.",
    benefit: "Rs 2 lakh life insurance cover at Rs 436 per year",
    applyAt: "Any bank branch where you have a savings account",
    documents: [
      "Aadhaar Card",
      "Savings Bank Account Details",
      "Nominee Details",
    ],
    website: "https://www.jansuraksha.gov.in",
    lastUpdated: "2024-01-10",
  },
  {
    id: "pmsby",
    name: "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
    description:
      "Accident insurance scheme providing Rs 2 lakh coverage for accidental death or total permanent disability at a very low annual premium.",
    category: "central",
    eligibility:
      "Individuals aged 18-70 years with savings bank account. Annual auto-debit of premium.",
    benefit:
      "Rs 2 lakh for accidental death/total permanent disability; Rs 1 lakh for partial permanent disability at Rs 20 per year",
    applyAt: "Any bank branch where you have a savings account",
    documents: [
      "Aadhaar Card",
      "Savings Bank Account Details",
      "Nominee Details",
    ],
    website: "https://www.jansuraksha.gov.in",
    lastUpdated: "2024-01-10",
  },
  {
    id: "jjm",
    name: "Jal Jeevan Mission",
    description:
      "National mission to provide functional household tap water connections to every rural household by ensuring safe and adequate water supply.",
    category: "central",
    eligibility:
      "Rural households without functional tap water connection. Implementation through Gram Panchayat.",
    benefit:
      "Functional household tap water connection with potable water supply",
    applyAt: "Gram Panchayat / PHEO Office",
    documents: ["Aadhaar Card", "Ration Card", "House Ownership Proof"],
    website: "https://jaljiwanmission.gov.in",
    lastUpdated: "2024-01-10",
  },
  {
    id: "nps-vay Vandana",
    name: "NPS Vay Vandana (Atal Pension Yojana)",
    description:
      "Pension scheme for workers in the unorganised sector providing guaranteed minimum pension after age 60.",
    category: "central",
    eligibility:
      "Indian citizens aged 18-40 years with savings bank account. Especially beneficial for workers in unorganised sector.",
    benefit:
      "Guaranteed minimum pension of Rs 1,000 to Rs 5,000 per month after age 60",
    applyAt: "Bank branch / CSC",
    documents: [
      "Aadhaar Card",
      "Savings Bank Account Details",
      "Mobile Number",
    ],
    website: "https://www.jansuraksha.gov.in",
    lastUpdated: "2024-01-10",
  },
  {
    id: "ap-ntru",
    name: "NTR Truntu (NTR Nesturi) - AP Government",
    description:
      "Andhra Pradesh government scheme providing financial assistance to farmers for crop investment support.",
    category: "state",
    eligibility:
      "All farmer families in Andhra Pradesh with cultivable land. Must have Aadhaar-linked bank account.",
    benefit:
      "Investment support for agriculture; contact local authorities for current rates",
    applyAt: "Village Secretariat / MeeSeva Centre",
    documents: [
      "Aadhaar Card",
      "Land Records (Passbook)",
      "Bank Account Passbook",
    ],
    contactPhone: "1902 (AP Helpline)",
    lastUpdated: "2024-01-10",
  },
  {
    id: "ap-youth-nest",
    name: "NTR Nesturi Yuva (Youth Support) - AP",
    description:
      "Andhra Pradesh government scheme for youth skill development and employment support.",
    category: "state",
    eligibility:
      "Youth aged 15-35 years in Andhra Pradesh. Must be registered with employment exchange.",
    benefit:
      "Skill development training and employment assistance",
    applyAt: "Employment Exchange / MeeSeva Centre / Online",
    documents: [
      "Aadhaar Card",
      "Education Certificates",
      "Bank Account Passbook",
      "Employment Exchange Registration",
    ],
    lastUpdated: "2024-01-10",
  },
];

export const schemeCategories = [
  { id: "all", label: "All Schemes" },
  { id: "central", label: "Central Government" },
  { id: "state", label: "State Government" },
  { id: "local", label: "Local / Panchayat" },
];
