# Rampur Village Information Portal

A **simple, lightweight, responsive, and static** Village Information Portal built with **Next.js** and **Tailwind CSS** as a Community Service Project (CSP).

The portal provides residents and visitors with easy access to important village information including government schemes, schools, health services, contacts, local businesses, and emergency numbers.

---

## Project Overview

This is a **fully static** website with **no backend, no database, and no authentication**. All data is stored in local TypeScript files and rendered at build time. The site is optimized for deployment on **Vercel** with zero configuration.

### Features

- **Home** — Welcome page with quick links and village highlights
- **About** — Village overview, facilities, and location
- **Schemes** — Central & state government schemes (searchable, filterable)
- **Contacts** — Panchayat, revenue, education, health, police, utilities
- **Schools** — Government schools, high schools, anganwadi centres
- **Health** — PHC, sub-centres, hospitals, emergency contacts, health tips
- **Businesses** — Local business directory (searchable, filterable)
- **Emergency** — Emergency helpline numbers with tap-to-call

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework |
| React 18 | UI Library |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| Static Data (TS files) | Content |

---

## Getting Started

### Prerequisites

- **Node.js** 18+ installed
- **npm** or **yarn** installed

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

---

## Project Structure

```
village-portal/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout with Navbar & Footer
│   ├── page.tsx                  # Homepage
│   ├── about/page.tsx            # About Village
│   ├── schemes/page.tsx          # Government Schemes
│   ├── contacts/page.tsx         # Important Contacts
│   ├── schools/page.tsx          # Schools & Education
│   ├── health/page.tsx           # Health Services
│   ├── businesses/page.tsx       # Local Business Directory
│   └── emergency/page.tsx        # Emergency Contacts
│
├── components/                   # Reusable React Components
│   ├── Navbar.tsx                # Navigation bar (responsive)
│   ├── Footer.tsx                # Footer with links
│   ├── Hero.tsx                  # Hero section
│   ├── SectionTitle.tsx          # Section heading
│   ├── InfoCard.tsx              # Info card (About page)
│   ├── SchemeCard.tsx            # Scheme card
│   ├── ContactCard.tsx           # Contact card
│   ├── SchoolCard.tsx            # School card
│   ├── BusinessCard.tsx          # Business card
│   ├── EmergencyCard.tsx         # Emergency number card
│   └── HealthCard.tsx            # Health facility card
│
├── data/                         # Static Data Files (Edit here to update content)
│   ├── village.ts                # Village information
│   ├── schemes.ts                # Government schemes
│   ├── contacts.ts               # Official contacts
│   ├── schools.ts                # School information
│   ├── health.ts                 # Health facilities & numbers
│   └── businesses.ts             # Local businesses
│
├── styles/
│   └── globals.css               # Global styles & Tailwind
│
├── public/
│   └── images/                   # Static images
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.js
└── README.md
```

---

## Editing Content

The portal is designed so that **updating information requires editing only the relevant data file**. No React component changes needed for normal content updates.

### To Update Village Details

Edit `data/village.ts`:

```typescript
export const village: VillageInfo = {
  name: "Your Village Name",
  // ... update fields as needed
};
```

### To Add/Update Government Schemes

Edit `data/schemes.ts`:

```typescript
export const schemes: Scheme[] = [
  {
    id: "new-scheme",
    name: "Scheme Name",
    description: "Description",
    category: "central" | "state" | "local",
    eligibility: "Who can apply",
    benefit: "What they get",
    applyAt: "Where to apply",
    documents: ["Doc 1", "Doc 2"],
    website: "https://example.com",
    contactPhone: "+91-XXXXXXXXXX",
  },
  // ... add more schemes
];
```

### To Add/Update Contacts

Edit `data/contacts.ts`:

```typescript
export const contacts: Contact[] = [
  {
    id: "unique-id",
    name: "Person Name",
    designation: "Designation",
    department: "Department",
    phone: "+91-XXXXXXXXXX",
    address: "Address",
    workingHours: "Mon-Sat: 10 AM - 5 PM",
    category: "panchayat" | "revenue" | "education" | "health" | "police" | "utilities" | "other",
    priority: 1,
  },
  // ... add more contacts
];
```

### To Add/Update Schools

Edit `data/schools.ts`:

```typescript
export const schools: School[] = [
  {
    id: "school-id",
    name: "School Name",
    type: "government" | "private" | "aided",
    level: "primary" | "high" | "higher-secondary",
    classes: "I - V",
    medium: ["Telugu"],
    studentStrength: "200",
    // ... add more fields
  },
  // ... add more schools
];
```

### To Add/Update Health Facilities

Edit `data/health.ts`:

```typescript
export const healthFacilities: HealthFacility[] = [
  {
    id: "facility-id",
    name: "Facility Name",
    type: "phc" | "sub-centre" | "hospital",
    address: "Address",
    phone: "+91-XXXXXXXXXX",
    workingHours: "Mon-Sat: 9 AM - 4 PM",
    emergencyHours: "24x7",
    services: ["Service 1", "Service 2"],
    // ... add more fields
  },
  // ... add more facilities
];
```

### To Add/Update Local Businesses

Edit `data/businesses.ts`:

```typescript
export const businesses: Business[] = [
  {
    id: "business-id",
    name: "Business Name",
    category: "Grocery" | "Medical Shop" | "Mechanic" | "Tailor" | "Mobile Shop" | "Restaurant" | "Electrical Shop" | "Internet Centre" | "Agricultural Services",
    description: "About the business",
    owner: "Owner Name",
    phone: "+91-XXXXXXXXXX",
    address: "Address",
    workingHours: "Mon-Sun: 8 AM - 8 PM",
    services: ["Service 1", "Service 2"],
    paymentMethods: ["Cash", "UPI"],
    location: "Location description",
  },
  // ... add more businesses
];
```

---

## Deployment to Vercel

### Method 1: GitHub + Vercel (Recommended)

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial village portal"
   git branch -M main
   git remote add origin https://github.com/yourusername/village-portal.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Your site will be live at `https://your-project.vercel.app`

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

   Follow the prompts. Your site will be deployed automatically.

### Method 3: Manual Build + Deploy

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload the `out/` folder** to any static hosting service (Netlify, GitHub Pages, etc.)

---

## Configuration Notes

- The project uses `output: "export"` in `next.config.ts` for fully static output
- Images are unoptimized for static export compatibility
- Tailwind CSS purges unused styles automatically
- All pages are statically generated at build time

---

## Customization

### Changing Colors

Edit `tailwind.config.ts` to change the primary/secondary color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        // Change these values
        500: "#0ea5e9",
        600: "#0284c7",
        // ...
      },
    },
  },
},
```

### Adding New Sections

1. Create a new data file in `data/`
2. Create a new component in `components/` (if needed)
3. Create a new page in `app/your-section/page.tsx`
4. Add navigation link in `components/Navbar.tsx`

---

## Accessibility

- Semantic HTML elements used throughout
- Proper heading hierarchy (h1 → h2 → h3)
- Keyboard navigable with visible focus states
- Clickable `tel:` links for phone numbers
- Sufficient color contrast ratios
- Mobile-responsive design
- Alt text for meaningful images

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (Chrome, Safari, Samsung Internet)

---

## License

This project is created as a Community Service Project (CSP) for educational and public use.

---

## Acknowledgements

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)
- Data collected during CSP field visits to Rampur Village

---

For questions or support, contact the CSP team.