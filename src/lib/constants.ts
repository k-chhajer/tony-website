export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  detailHeading: string;
  detailParagraphs: string[];
  image: string;
}

export interface ServiceAreaItem {
  name: string;
  slug: string;
  summary: string;
  cityLabel: string;
  image: string;
}

export const SITE = {
  name: "Norfolk Patient Transport",
  tagline: "Safe. Reliable. Here when you need us.",
  description:
    "Non-emergency medical transportation for Norfolk County and Haldimand County, including wheelchair, stretcher, and assisted patient transport.",
  url: "https://norfolkpatienttransport.com",
  phoneDisplay: "(519) 555-0147",
  phoneHref: "+15195550147",
  dispatchLabel: "Call Dispatch 24/7",
  emailGeneral: "info@norfolkpatienttransport.com",
  emailBookings: "bookings@norfolkpatienttransport.com",
  emailCareers: "careers@norfolkpatienttransport.com",
  hours: "Daily 7:00 AM - 7:00 PM",
  region: "Norfolk County, Ontario",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/book", label: "Book a Transport" },
  { href: "/for-facilities", label: "For Hospitals & Care Facilities" },
  { href: "/careers", label: "Careers" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const QUICK_LINKS = [
  ...NAV_LINKS,
  { href: "/book", label: "Book Transport" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "hospital-discharge",
    title: "Hospital Discharge",
    shortDescription: "Safe, comfortable rides home after hospital stays.",
    detailHeading: "Discharge Transport Built Around Your Timeline",
    detailParagraphs: [
      "Our dispatch team coordinates with discharge planners and nursing teams to reduce delays at pickup. We monitor changes in discharge windows and adjust arrival time so the patient is not left waiting.",
      "Drivers and attendants assist from unit exit to home entry, including mobility devices and personal belongings. Every trip is paced for comfort and safety.",
    ],
    image: "/images/ladybeingtransportedvan.jpeg",
  },
  {
    id: "medical-appointments",
    title: "Medical Appointments",
    shortDescription: "Reliable transport to clinics, specialists, and tests.",
    detailHeading: "Dependable Appointment Transportation",
    detailParagraphs: [
      "From routine follow-ups to specialist referrals, we provide punctual transportation with confirmation workflows that reduce no-shows and late arrivals.",
      "We support one-way or return-trip scheduling, and we can coordinate with caregivers so everyone has clear pickup and return windows.",
    ],
    image: "/images/facilitiesbackground.jpg",
  },
  {
    id: "dialysis-transport",
    title: "Dialysis Transport",
    shortDescription: "Scheduled, dependable rides for dialysis patients.",
    detailHeading: "Recurring Trips, Handled with Precision",
    detailParagraphs: [
      "Dialysis schedules demand reliability. We offer recurring bookings with consistent pickup windows, clear communication, and route planning that prioritizes on-time arrivals.",
      "Our attendants understand fatigue and post-treatment comfort needs, ensuring safer transitions from clinic to home.",
    ],
    image: "/images/dialysis.jpg",
  },
  {
    id: "inter-facility-transfers",
    title: "Inter-Facility Transfers",
    shortDescription:
      "Professional transfers between hospitals and care facilities.",
    detailHeading: "Coordinated Facility-to-Facility Moves",
    detailParagraphs: [
      "We manage handoffs between hospitals, clinics, rehabilitation centres, and long-term care facilities with structured communication at both ends of the trip.",
      "Our teams follow transfer notes closely and provide stable, professional transport for non-emergency clinical movement.",
    ],
    image: "/images/patienttrasport2.jpg",
  },
  {
    id: "wheelchair-transport",
    title: "Wheelchair Transport",
    shortDescription: "Fully equipped vehicles for wheelchair passengers.",
    detailHeading: "Wheelchair Accessible Fleet",
    detailParagraphs: [
      "Our wheelchair-capable vans include secure tie-down systems and ramp access engineered for smooth loading and unloading.",
      "Attendants complete safety checks before each trip so patients and families can travel with confidence.",
    ],
    image: "/images/about-care.png",
  },
  {
    id: "stretcher-transport",
    title: "Stretcher Transport",
    shortDescription: "Lay-flat transport for patients who cannot sit upright.",
    detailHeading: "Stretcher Service with Comfort Controls",
    detailParagraphs: [
      "For patients who must remain reclined, we provide stretcher-equipped vehicles and trained attendants focused on stable, low-stress transport.",
      "Trip plans account for transfer complexity, facility access points, and home-entry requirements before dispatch.",
    ],
    image: "/images/stretchertransport.jpg",
  },
  {
    id: "retirement-ltc",
    title: "Retirement and LTC Homes",
    shortDescription: "Coordinated transport for care home residents.",
    detailHeading: "Care Home Coordination That Scales",
    detailParagraphs: [
      "We partner with retirement residences and long-term care teams to streamline appointment logistics, escort requirements, and documentation needs.",
      "Whether trips are occasional or recurring, our workflows support predictable service and clear communication with staff and families.",
    ],
    image: "/images/retirementhome.jpeg",
  },
  {
    id: "private-residence",
    title: "Private Residence Pickups",
    shortDescription: "Door-to-door service from home.",
    detailHeading: "Home Pickup with Assisted Entry and Exit",
    detailParagraphs: [
      "For private residences, our attendants assist from doorway to vehicle and from vehicle to destination check-in.",
      "Dispatch captures access notes in advance so drivers arrive prepared for stairs, elevators, and mobility needs.",
    ],
    image: "/images/why-choose-us.png",
  },
  {
    id: "bed-to-bed",
    title: "Bed-to-Bed Transfers",
    shortDescription: "Full transfer care between facilities.",
    detailHeading: "Comprehensive Bed-to-Bed Support",
    detailParagraphs: [
      "Our team supports complete transfer pathways that start at bedside and end at bedside when required by clinical context.",
      "This service is ideal for complex transfers where safe handling and careful transition planning are critical.",
    ],
    image: "/images/bedtobedtransfer.jpg",
  },
];

export const SERVICE_AREAS: ServiceAreaItem[] = [
  {
    name: "Norfolk County",
    slug: "norfolk-county",
    cityLabel: "Norfolk County",
    summary:
      "Comprehensive patient transport throughout Norfolk County for appointments, discharges, and recurring care.",
    image: "/images/norfolk.jpg",
  },
  {
    name: "Haldimand County",
    slug: "haldimand-county",
    cityLabel: "Haldimand County",
    summary:
      "Reliable non-emergency transport across Haldimand County, including coordinated facility and residential pickups.",
    image: "/images/haldiman county.jpg",
  },
  {
    name: "Simcoe, Ontario",
    slug: "simcoe-ontario",
    cityLabel: "Simcoe",
    summary:
      "Fast local coverage in Simcoe with trained attendants and wheelchair-capable vehicles.",
    image: "/images/simcoe.jpg",
  },
  {
    name: "Port Dover",
    slug: "port-dover",
    cityLabel: "Port Dover",
    summary:
      "Professional patient transport to and from Port Dover with dispatch-backed scheduling.",
    image: "/images/port dover.jpg",
  },
  {
    name: "Delhi, Ontario",
    slug: "delhi-ontario",
    cityLabel: "Delhi",
    summary:
      "Dependable transport in Delhi for hospital appointments, diagnostics, and discharge rides.",
    image: "/images/delhi.webp",
  },
  {
    name: "Brantford",
    slug: "brantford",
    cityLabel: "Brantford",
    summary:
      "Direct service to Brantford hospitals and clinics with one-way and return-trip booking options.",
    image: "/images/brantford.jpg",
  },
  {
    name: "Hamilton",
    slug: "hamilton",
    cityLabel: "Hamilton",
    summary:
      "Longer-distance non-emergency transfers to Hamilton medical centres with comfort-first routing.",
    image: "/images/hamilton.jpg",
  },
  {
    name: "Hagersville",
    slug: "hagersville",
    cityLabel: "Hagersville",
    summary:
      "Local support for Hagersville patients requiring scheduled or recurring medical transportation.",
    image: "/images/hagersville.jpg",
  },
  {
    name: "Tillsonburg",
    slug: "tillsonburg",
    cityLabel: "Tillsonburg",
    summary:
      "Patient transport from Tillsonburg to regional hospitals, specialists, and treatment centres.",
    image: "/images/tillsonburg.jpg",
  },
];

export const HOME_STATS = [
  { target: 24, suffix: "/7", label: "Dispatch Available" },
  { target: 9, suffix: "+", label: "Service Areas" },
  { target: 100, suffix: "%", label: "Wheelchair and Stretcher Capable" },
  { target: 30, prefix: "Net ", label: "Available for Facilities" },
];

export const FAQ_ITEMS = [
  {
    question: "What is non-emergency patient transport?",
    answer:
      "Non-emergency patient transport is transportation for individuals who need assistance getting to or from medical appointments but do not require an ambulance.",
  },
  {
    question: "Who uses patient transport services?",
    answer:
      "Hospitals, retirement homes, dialysis clinics, and private patients commonly use these services.",
  },
  {
    question: "Do you provide wheelchair transportation?",
    answer:
      "Yes, our vehicles are equipped to safely transport wheelchair patients.",
  },
  {
    question: "Do you provide stretcher transportation?",
    answer:
      "Yes, we provide stretcher transport for patients who cannot sit upright or require additional assistance.",
  },
  {
    question: "Do you offer hospital discharge transportation?",
    answer:
      "Yes, we regularly transport patients home after hospital discharge.",
  },
  {
    question: "Can a family member ride with the patient?",
    answer:
      "In many cases a caregiver or family member may accompany the patient during transport.",
  },
  {
    question: "Do you provide oxygen during transport?",
    answer:
      "If oxygen is required during transport, please mention it during booking so the proper equipment can be arranged.",
  },
  {
    question: "How do I book a transport?",
    answer:
      "Bookings can be made through the website booking form or by calling dispatch anytime.",
  },
  {
    question: "Do you offer service after 7 PM?",
    answer:
      "Yes, local after-hours transport may be available depending on scheduling.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Norfolk County and Haldimand County including Simcoe, Port Dover, Delhi, Brantford, Hamilton, Hagersville, Tillsonburg and surrounding areas.",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      "We accept credit cards, cash, and e-transfer. Hospitals and care facilities may qualify for Net 30 billing.",
  },
  {
    question: "Do you operate 24 hours a day?",
    answer:
      "Scheduled transport services typically operate from 7:00 AM to 7:00 PM, but dispatch is available 24/7 and you can call anytime.",
  },
  {
    question: "Is this an ambulance service?",
    answer:
      "No. Norfolk Patient Transport provides non-emergency transportation for patients who do not require emergency medical care.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking 24 to 48 hours in advance when possible. Urgent same-day requests may still be available depending on dispatch capacity.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "The discharge pickup was seamless. The attendant was professional, patient, and made my father feel safe the entire trip.",
    name: "Family Member, Simcoe",
    rating: 5,
  },
  {
    quote:
      "Reliable arrival times for dialysis appointments have made a huge difference for our residents and staff.",
    name: "Care Coordinator, Norfolk County",
    rating: 5,
  },
  {
    quote:
      "Communication with dispatch was excellent and the driver handled a complex wheelchair transfer with real care.",
    name: "Patient, Port Dover",
    rating: 5,
  },
  {
    quote:
      "We appreciate their consistency with inter-facility transfers and the professionalism of every crew member.",
    name: "Facility Administrator, Haldimand",
    rating: 5,
  },
  {
    quote:
      "Booking was simple and the return trip timing was right on schedule. Highly recommended service.",
    name: "Family Caregiver, Brantford",
    rating: 5,
  },
  {
    quote:
      "Our clinic trusts them for recurring appointment transportation because they are dependable and responsive.",
    name: "Clinic Team, Hamilton",
    rating: 5,
  },
];