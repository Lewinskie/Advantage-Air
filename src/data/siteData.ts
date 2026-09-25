export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  closing: string;
  description: string;
  requirements: string[];
}

export interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
  category: string;
}

export const DEFAULT_JOBS: Job[] = [
  {
    id: "1",
    title: "First Officer – Boeing 737",
    department: "Flight Operations",
    location: "Johannesburg, South Africa",
    type: "Full-Time",
    closing: "2026-10-31",
    description:
      "Join our growing fleet as a First Officer on the Boeing 737-800. You will operate scheduled and charter flights across our African network under the command of experienced Captains.",
    requirements: [
      "ATPL(A) or CPL(A) with frozen ATPL",
      "B737 type rating preferred",
      "Minimum 1,500 total flight hours",
      "Valid Class 1 Medical",
      "SACAA or EASA licensed",
    ],
  },
  {
    id: "2",
    title: "Ground Operations Supervisor",
    department: "Ground Handling",
    location: "Nairobi, Kenya",
    type: "Full-Time",
    closing: "2026-10-15",
    description:
      "Oversee all ground handling activities at JKIA including ramp operations, cargo loading, aircraft marshalling, and coordination with flight operations.",
    requirements: [
      "5+ years ramp/ground handling experience",
      "Dangerous Goods Awareness certified",
      "Strong leadership and communication skills",
      "KCAA Ground Ops knowledge preferred",
    ],
  },
  {
    id: "3",
    title: "Cargo Sales Executive",
    department: "Commercial",
    location: "Lagos, Nigeria",
    type: "Full-Time",
    closing: "2026-11-07",
    description:
      "Drive cargo revenue growth across the West African market. Build relationships with freight forwarders, shippers, and logistics companies to fill our belly and freighter capacity.",
    requirements: [
      "3+ years in air cargo or freight sales",
      "Proven track record of meeting revenue targets",
      "Knowledge of IATA cargo regulations",
      "Fluent in English; French an advantage",
    ],
  },
  {
    id: "4",
    title: "Aircraft Maintenance Engineer – Avionics",
    department: "Maintenance & Engineering",
    location: "Johannesburg, South Africa",
    type: "Full-Time",
    closing: "2026-11-21",
    description:
      "Perform line and base maintenance on avionics systems across our fleet. Work within our SACAA-approved Part 145 maintenance organisation.",
    requirements: [
      "Part 66 Cat B2 Licence",
      "B737NG/ATR72 avionics experience preferred",
      "3+ years post-licence experience",
      "SACAA or EASA approved",
    ],
  },
  {
    id: "5",
    title: "Charter Operations Coordinator",
    department: "Charter & Special Missions",
    location: "Dubai, UAE",
    type: "Full-Time",
    closing: "2026-10-25",
    description:
      "Coordinate end-to-end charter flight operations from client enquiry to post-flight reporting. Liaise with crews, handling agents, and clients across multiple time zones.",
    requirements: [
      "2+ years in charter or airline operations",
      "Strong organisational and multitasking ability",
      "Proficiency in flight planning tools",
      "24/7 shift readiness required",
    ],
  },
];

export const DEFAULT_PHOTOS: GalleryPhoto[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1789465779021-63ec9ae47c1c?w=800&h=600&fit=crop&auto=format",
    caption: "Cargo loading operations at OR Tambo International",
    category: "Cargo Ops",
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1765036715749-370723d4c444?w=800&h=600&fit=crop&auto=format",
    caption: "Ground crew aircraft push-back, Nairobi hub",
    category: "Ground Ops",
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1761398352790-fa2278c2e1e9?w=800&h=600&fit=crop&auto=format",
    caption: "Night turnaround operations",
    category: "Night Ops",
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1708246519742-2906e0dc7900?w=800&h=600&fit=crop&auto=format",
    caption: "AAT Boeing 737 departing Johannesburg",
    category: "Fleet",
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1751698096512-6fad7437c09e?w=800&h=600&fit=crop&auto=format",
    caption: "Sunset boarding, Cape Town route",
    category: "Passenger Ops",
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1775486576760-4018f7eec970?w=800&h=600&fit=crop&auto=format",
    caption: "Maintenance inspection, Part 145 facility",
    category: "Maintenance",
  },
  {
    id: "7",
    url: "https://images.unsplash.com/photo-1766224241911-c46fb97633d6?w=800&h=600&fit=crop&auto=format",
    caption: "Boarding stairs rigged for charter departure",
    category: "Charter Ops",
  },
  {
    id: "8",
    url: "https://images.unsplash.com/photo-1776160079949-3c30d7c3b8a5?w=800&h=600&fit=crop&auto=format",
    caption: "Gate turnaround — Lagos International",
    category: "Ground Ops",
  },
];

export const GALLERY_CATEGORIES = [
  "All",
  "Cargo Ops",
  "Ground Ops",
  "Fleet",
  "Passenger Ops",
  "Maintenance",
  "Charter Ops",
  "Night Ops",
];

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Fleet", href: "#fleet" },
  { label: "Services", href: "#services" },
  { label: "Operations", href: "#gallery" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "28", label: "Years of Operation", suffix: "+" },
  { value: "4800", label: "Flights Completed", suffix: "" },
  { value: "120", label: "Destinations Served", suffix: "+" },
  { value: "99.4", label: "On-Time Performance", suffix: "%" },
];

export const FLEET = [
  {
    name: "Fokker 50 Freighter",
    category: "Scheduled & Charter",
    capacity: "189 PAX / 20T cargo",
    range: "5,765 km",
    img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&h=500&fit=crop&auto=format",
    alt: "Fokker 50 on tarmac",
  },
  {
    name: "ATR 72-400 Freighter",
    category: "Regional Routes",
    capacity: "70 PAX / 7.5T cargo",
    range: "1,528 km",
    img: "https://images.unsplash.com/photo-1708359606134-3f0d92fd0a4d?w=800&h=500&fit=crop&auto=format",
    alt: "Regional turboprop in flight",
  },
  {
    name: "CRJ-200 Freighter",
    category: "Executive Charter",
    capacity: "12 PAX",
    range: "6,297 km",
    img: "https://images.unsplash.com/photo-1768346564233-d71f37bd19b6?w=800&h=500&fit=crop&auto=format",
    alt: "Luxury private jet interior",
  },
];

export const SERVICES = [
  // {
  //   num: "01",
  //   title: "Scheduled Passenger",
  //   desc: "Reliable domestic and regional routes operating on fixed timetables across key hubs.",
  // },
  // {
  //   num: "02",
  //   title: "Executive Charter",
  //   desc: "On-demand private and group charters for corporate clients, sports teams, and VIPs.",
  // },
  {
    num: "01",
    title: "Air Cargo & Freight",
    desc: "Time-critical freight, perishables, pharmaceuticals, and mining logistics.",
  },
  {
    num: "02",
    title: "Medical Evacuation",
    desc: "Rapid-response aeromedical transport with certified medical crew and equipment.",
  },
  {
    num: "03",
    title: "Government & Defence",
    desc: "Dedicated air support for governmental agencies and peacekeeping operations.",
  },
  // {
  //   num: "04",
  //   title: "Fuel Stop Services",
  //   desc: "Technical stops, ground handling, and fuel services at partner airfields.",
  // },
];

export const DESTINATIONS = [
  "Somalia",
  "South Sudan",
  "Nairobi",
  "Libya",
  "Juba",
  "Mogadishu",
  // "Addis Ababa",
  // "Lusaka",
  // "Harare",
  // "Maputo",
  // "Kinshasa",
  // "Douala",
  // "Abidjan",
  // "Dakar",
  // "Dubai",
  // "Mauritius",
  // "Seychelles",
  // "Réunion",
];
