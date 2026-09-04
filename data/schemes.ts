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
      "Income support scheme providing ₹6,000 per year in three equal installments to small and marginal farmer families.",
    category: "central",
    eligibility:
      "Small and marginal farmer families holding cultivable land up to 2 hectares. Excludes institutional land holders, former/present constitutional post holders, ministers, MPs/MLAs, serving/retired government employees (excluding Class IV/Group D), professionals (doctors, engineers, lawyers, CAs, architects), and income tax payees.",
    benefit: "₹6,000 per year (₹2,000 every 4 months) directly transferred to bank account",
    applyAt: "Village CSC / Panchayat Office / Agriculture Department / Online at pmkisan.gov.in",
    documents: [
      "Aadhaar Card",
      "Land Records (Pattadar Passbook / Title Deed)",
      "Bank Account Passbook",
      "Mobile Number linked to Aadhaar",
    ],
    website: "https://pmkisan.gov.in",
    contactPhone: "155261 / 1800-115-526 (Toll Free)",
    lastUpdated: "2024-01-15",
  },
  {
    id: "rythu-bandhu",
    name: "Rythu Bandhu Scheme",
    description:
      "Telangana government's investment support scheme for farmers providing ₹10,000 per acre per year (₹5,000 per season) for agricultural inputs.",
    category: "state",
    eligibility:
      "All land-owning farmers in Telangana with valid land records (Pattadar Passbook). No upper ceiling on land holding. Tenant farmers not eligible.",
    benefit: "₹10,000 per acre per year (₹5,000 for Kharif + ₹5,000 for Rabi) directly credited to bank account",
    applyAt: "Automatic based on land records; corrections at Village Revenue Office / MRO Office",
    documents: [
      "Pattadar Passbook / Title Deed",
      "Aadhaar Card",
      "Bank Account Passbook",
    ],
    website: "https://rythubandhu.telangana.gov.in",
    contactPhone: "040-2345XXXXX",
    lastUpdated: "2024-01-10",
  },
  {
    id: "ayushman-bharat",
    name: "Ayushman Bharat - PMJAY",
    description:
      "National health protection scheme providing cashless hospitalization cover up to ₹5 lakh per family per year for secondary and tertiary care.",
    category: "central",
    eligibility:
      "Families identified under SECC 2011 database (Deprivation criteria D1-D7) and RSBY beneficiaries. Check eligibility at village CSC or PHC.",
    benefit: "₹5 lakh per family per year for hospitalization (cashless at empanelled hospitals)",
    applyAt: "Village CSC / PHC / District Hospital / Online at pmjay.gov.in",
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
    id: "aasara-pension",
    name: "Aasara Pension Scheme",
    description:
      "Telangana government's social security pension scheme for elderly, widows, disabled, and other vulnerable groups.",
    category: "state",
    eligibility:
      "Age 57+ (Old Age), Widows 18+, Disabled 40%+, HIV/AIDS affected, Transgender, Toddy Tappers, Weavers, Single Women 30+. Must be Telangana resident with annual family income < ₹1.5 lakh (rural) / ₹2 lakh (urban).",
    benefit: "₹2,016 per month (Old Age/Widow/Disabled); ₹3,016 per month (HIV/AIDS/Toddy Tappers/Weavers/Single Women)",
    applyAt: "Village Panchayat Office / MRO Office / MeeSeva Centre",
    documents: [
      "Aadhaar Card",
      "Age Proof / Disability Certificate / Widow Certificate",
      "Income Certificate",
      "Bank Account Passbook",
      "Ration Card",
      "Passport-size Photos",
    ],
    website: "https://aasara.telangana.gov.in",
    contactPhone: "040-2312XXXX",
    lastUpdated: "2024-01-08",
  },
  {
    id: "kalyana-lakshmi",
    name: "Kalyana Lakshmi / Shaadi Mubarak",
    description:
      "Financial assistance for marriage of girls from economically backward families in Telangana.",
    category: "state",
    eligibility:
      "Bride must be Telangana resident, age 18+, family annual income < ₹2 lakh. One-time benefit per family. Applicable for all communities (SC/ST/BC/Minority/General-EWS).",
    benefit: "₹1,00,116 (One-time grant at time of marriage)",
    applyAt: "MeeSeva Centre / MRO Office / Online at kalyanalakshmi.telangana.gov.in (apply 3 months before marriage)",
    documents: [
      "Bride's Aadhaar Card",
      "Age Proof (SSC Certificate / Birth Certificate)",
      "Income Certificate",
      "Caste Certificate (if applicable)",
      "Bank Account Passbook (Bride's)",
      "Wedding Invitation Card",
      "Passport-size Photos",
    ],
    website: "https://kalyanalakshmi.telangana.gov.in",
    contactPhone: "040-2345XXXX",
    lastUpdated: "2024-01-05",
  },
  {
    id: "pmay-grameen",
    name: "Pradhan Mantri Awas Yojana - Gramin (PMAY-G)",
    description:
      "Central government scheme providing financial assistance for construction of pucca houses for rural homeless and those living in kutcha/dilapidated houses.",
    category: "central",
    eligibility:
      "Rural households without pucca house or living in 0/1/2 room kutcha house. Priority to SC/ST, minorities, freed bonded labourers, widows, disabled. Identified through SECC 2011 + Gram Sabha verification.",
    benefit: "₹1.20 lakh (plain areas) / ₹1.30 lakh (hilly/difficult areas) in 3 installments + MGNREGS wage component (90/95 person-days) + Toilet construction (₹12,000 under SBM-G)",
    applyAt: "Gram Panchayat Office / Block Development Office / Online at pmayg.nic.in",
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
    id: "kcr-kit",
    name: "KCR Kit Scheme (Amma Vodi)",
    description:
      "Telangana government scheme providing financial assistance and essential items for pregnant women and newborns.",
    category: "state",
    eligibility:
      "Pregnant women registered at government health centres (PHC/CHC/Area Hospital) in Telangana. Must deliver at government hospital.",
    benefit: "₹12,000 (₹3,000 at registration + ₹4,000 at delivery + ₹5,000 after child's first immunization) + KCR Kit (baby clothes, towel, soap, oil, mosquito net, toys, etc.)",
    applyAt: "PHC / Anganwadi Centre / ANM / ASHA Worker",
    documents: [
      "Mother's Aadhaar Card",
      "MCP Card (Mother and Child Protection Card)",
      "Bank Account Passbook",
      "ANM/ASHA Verification",
    ],
    website: "https://kcrkit.telangana.gov.in",
    contactPhone: "104 (Health Helpline)",
    lastUpdated: "2024-01-20",
  },
  {
    id: "mgnerga",
    name: "MGNREGS (Mahatma Gandhi NREGS)",
    description:
      "Guarantees 100 days of wage employment per financial year to rural households whose adult members volunteer for unskilled manual work.",
    category: "central",
    eligibility:
      "Any rural household with adult members (18+) willing to do unskilled manual work. Job card issued after verification by Gram Panchayat.",
    benefit: "₹281/day (Telangana, 2024 rate) for 100 days per household per year; paid directly to bank/post office account",
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
    eligibility: "All farmers with cultivable land. Soil samples collected from grid points (2.5 ha irrigated / 10 ha rainfed).",
    benefit: "Free soil testing every 2 years; card with macro/micro nutrient status, pH, EC, organic carbon + fertilizer recommendations",
    applyAt: "Village Agriculture Officer / Mandal Agriculture Office / CSC",
    documents: [
      "Aadhaar Card",
      "Land Records",
      "Mobile Number",
    ],
    website: "https://soilhealth.dac.gov.in",
    contactPhone: "040-2338XXXX",
    lastUpdated: "2024-01-10",
  },
];

export const schemeCategories = [
  { id: "all", label: "All Schemes" },
  { id: "central", label: "Central Government" },
  { id: "state", label: "State Government" },
  { id: "local", label: "Local / Panchayat" },
];