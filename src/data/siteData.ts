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
    title: "First Officer – Fokker 50 / ATR 72",
    department: "Flight Operations",
    location: "Wilson Airport, Nairobi, Kenya",
    type: "Full-Time",
    closing: "2026-10-31",
    description:
      "Join our growing fleet as a First Officer on the Fokker 50 or ATR 72. You will operate scheduled and charter flights across our African network under the command of experienced Captains.",
    requirements: [
      "ATPL(A) or CPL(A) with frozen ATPL",
      "Fokker 50 or ATR 72 type rating preferred",
      "Minimum 1,500 total flight hours",
      "Valid Class 1 Medical",
      "EASA licensed",
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
    location: "Wilson Airport, Nairobi, Kenya",
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
    location: "Wilson Airport, Nairobi, Kenya",
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
    location: "Wilson Aiport, Nairobi, Kenya",
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
    url: "/images/WhatsApp-Image-2022-01-19-at-11.54.28-10.jpeg",
    caption: "Cargo loading operations at Juba",
    category: "Cargo Ops",
  },
  {
    id: "2",
    url: "/images/WhatsApp-Image-2022-01-19-at-17.49.09-1.jpeg",
    caption: "Ground crew aircraft push-back, Nairobi hub",
    category: "Charter Ops",
  },
  {
    id: "3",
    url: "/images/WhatsApp-Image-2022-01-19-at-11.54.28-12.jpeg",
    caption: "Cargo loading operations at Mogadishu",
    category: "Cargo Ops",
  },
  {
    id: "4",
    url: "/images/WhatsApp-Image-2022-01-19-at-11.54.28-9.jpeg",
    caption: "Fokker 50 freighter on tarmac, Nairobi hub",
    category: "Fleet",
  },
  {
    id: "5",
    url: "/images/WhatsApp-Image-2022-01-18-at-14.02.10-3.jpeg",
    caption: "Fokker 50 Freighter on tarmac, Nairobi hub",
    category: "Fleet",
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1775486576760-4018f7eec970?w=800&h=600&fit=crop&auto=format",
    caption: "Maintenance inspection, Part 145 facility",
    category: "Maintenance",
  },
  {
    id: "7",
    url: "/images/5Y-DDI-Humanitarian-work-Deeq-Raashin-Dhuusamareeb-170222-0.jpg",
    caption: "Humanitarian relief flight, Dhuusamareeb, Somalia",
    category: "Humanitarian Ops",
  },
  {
    id: "8",
    url: "/images/5Y-DDI-4.jpg",
    caption: "Humanitarian relief flight, Mogadishu, Somalia",
    category: "Humanitarian Ops",
  },
];

export const GALLERY_CATEGORIES = [
  "All",
  "Cargo Ops",
  "Medical Evacuation",
  "Fleet",
  "Maintenance",
  "Charter Ops",
  "Humanitarian Ops",
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
    category: "Fokker 50 Charter",
    capacity: "189 PAX / 20T cargo",
    range: "5,765 km",
    img: "/images/2-1.jpg",
    alt: "Fokker 50 on tarmac",
  },
  {
    name: "ATR 72-400 Freighter",
    category: "ATR 72-400 Charter",
    capacity: "70 PAX / 7.5T cargo",
    range: "1,528 km",
    img: "/images/5Y-DDI.jpg",
    alt: "ATR 72-400 parked at airport",
  },
];

export const SERVICES = [
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
];

export const DESTINATIONS = [
  "Somalia",
  "South Sudan",
  "Nairobi",
  "Libya",
  "Juba",
  "Mogadishu",
  "Ethiopia",
];
