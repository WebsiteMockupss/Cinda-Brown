export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'residential' | 'commercial';
  year: string;
  location: string;
  neighborhood?: string;
  scope: string;
  area: string;
  heroImage: string;
  secondaryImage: string;
  gallery: { url: string; caption: string; orientation?: 'landscape' | 'portrait' }[];
  description: string;
  editorialStatement: string;
  features: string[];
  materials: string[];
  beforeImage?: string;
  afterImage?: string;
}

export interface PressItem {
  name: string;
  quote: string;
  date: string;
  issue: string;
  svgBadge: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  project: string;
  location: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
  isPlaceholder?: boolean;
}

export const BRAND = {
  name: "Cinda Brown Interiors",
  shortName: "Cinda Brown",
  tagline: "Timeless Elegance & Forward-Thinking Interior Architecture",
  city: "Austin, Texas",
  address: "3215 Exposition Blvd #A-31, Austin, TX 78703",
  phone: "832-867-9718",
  phoneFormatted: "+1 (832) 867-9718",
  email: "cinda@cindabrowninteriors.com",
  instagram: "cindabrowninteriors",
  instagramUrl: "https://instagram.com/cindabrowninteriors",
  founded: 2004,
  yearsOfExcellence: "20+",
  statesServed: [
    { code: "TX", name: "Texas", note: "Austin, Dallas, Houston, San Antonio, Hill Country" },
    { code: "CO", name: "Colorado", note: "Aspen, Vail, Denver" },
    { code: "NM", name: "New Mexico", note: "Santa Fe, Taos" },
    { code: "FL", name: "Florida", note: "Palm Beach, Miami, Naples" },
    { code: "NY", name: "New York", note: "Manhattan, The Hamptons" },
    { code: "NJ", name: "New Jersey", note: "Short Hills, Rumson" },
  ],
  positioning: "A forward-thinking design firm blending creativity with timeless elegance, respecting tradition while embracing innovation, creating interiors that are functional and visually stunning for residential and commercial clients, rooted in each client's needs, personality and lifestyle.",
  aboutExtended: "For over two decades, award-winning designer Cinda Brown has transformed spaces with a passion for design and dedication to clients. As founder, she creates personalised interiors reflecting each client's style, lifestyle and budget, with timeless elegance and meticulous attention to detail. Now based in Austin, she has completed projects across Texas, Colorado, New Mexico, Florida, New York and New Jersey. Her work has won industry awards and been featured in numerous publications."
};

export const VIDEOS = {
  hero: "https://videos.pexels.com/video-files/5744421/5744421-uhd_3840_2160_30fps.mp4",
  heroPoster: "https://images.pexels.com/photos/7722168/pexels-photo-7722168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
  midpage: "https://videos.pexels.com/video-files/4514368/4514368-uhd_3840_2160_24fps.mp4",
  midpagePoster: "https://images.pexels.com/videos/4514368/pexels-photo-4514368.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
  prefooter: "https://videos.pexels.com/video-files/34874523/14777097_3840_2160_25fps.mp4",
  prefooterPoster: "https://images.pexels.com/videos/34874523/luxury-villa-34874523.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920"
};

export const PROJECTS: Project[] = [
  {
    id: "the-austonian",
    title: "The Austonian",
    subtitle: "High-Rise Penthouse Sanctuary",
    category: "residential",
    year: "2023",
    location: "Austin, Texas",
    neighborhood: "Downtown Austin",
    scope: "Complete Penthouse Architecture & Bespoke Interior Design",
    area: "6,400 sq ft",
    heroImage: "https://images.pexels.com/photos/7722168/pexels-photo-7722168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1440&w=2560",
    secondaryImage: "https://images.pexels.com/photos/7546323/pexels-photo-7546323.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800",
    beforeImage: "https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800",
    afterImage: "https://images.pexels.com/photos/7722168/pexels-photo-7722168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800",
    editorialStatement: "Floating above Lady Bird Lake, this penthouse balances panoramic Texas Hill Country vistas with intimate, museum-grade spatial choreography.",
    description: "Perched atop Austin's most distinguished residential tower, The Austonian project transformed a raw high-elevation envelope into an ethereal, warm-toned sanctuary. Cinda Brown balanced monumental glass expanses with tactile architectural interventions: floating walnut partition millwork, honed Navona travertine hearths, and subtle slaked-lime plaster surfaces that soften the bright Texas sun into warm ambient light.",
    features: [
      "Custom 16-foot rift-sawn American walnut library wall with concealed bar",
      "Honed Italian Navona travertine monumental dual-sided fireplace",
      "Museum-grade architectural LED illumination with bespoke dimming sequences",
      "Curated contemporary art collection integrated with acoustic micro-cement ceilings"
    ],
    materials: ["Navona Travertine", "Rift Walnut", "Slaked Lime Plaster", "Aged Patinated Brass", "Belgian Bouclé"],
    gallery: [
      { url: "https://images.pexels.com/photos/7722168/pexels-photo-7722168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800", caption: "Main salon overlooking downtown Austin skyline and Lady Bird Lake" },
      { url: "https://images.pexels.com/photos/8146212/pexels-photo-8146212.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800", caption: "Sculptural kitchen clad in bookmatched Calacatta and smoked European oak" },
      { url: "https://images.pexels.com/photos/36777913/pexels-photo-36777913.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800", caption: "Primary suite bathed in morning southeastern light with custom headboard niche" },
      { url: "https://images.pexels.com/photos/36650049/pexels-photo-36650049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800", caption: "Ensuite bath detail with unlacquered aged brass fixtures against honed marble" }
    ]
  },
  {
    id: "enfield-road",
    title: "Enfield Road Unit #5",
    subtitle: "Historic Old West Austin Residence",
    category: "residential",
    year: "2022",
    location: "Austin, Texas",
    neighborhood: "Old West Austin / Clarksville",
    scope: "Heritage Architectural Renovation & Interior Curation",
    area: "3,850 sq ft",
    heroImage: "https://images.pexels.com/photos/6394514/pexels-photo-6394514.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1440&w=2560",
    secondaryImage: "https://images.pexels.com/photos/7174386/pexels-photo-7174386.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800",
    beforeImage: "https://images.pexels.com/photos/6980661/pexels-photo-6980661.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800",
    afterImage: "https://images.pexels.com/photos/6394514/pexels-photo-6394514.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800",
    editorialStatement: "Honoring historic craftsmanship while infusing sleek European minimalism and tactile warmth.",
    description: "Located within Old West Austin's coveted Enfield Road historic corridor, Unit #5 demanded reverence for period proportion paired with fearless modern refinement. Cinda Brown preserved original timber framing and arched entryways while introducing sculptural monolithic elements, muted warm stone surfaces, and low-slung Italian seating.",
    features: [
      "Restoration of 1930s heritage plaster moldings paired with knife-edge architectural reveals",
      "Hand-chiseled Texas limestone hearth with blackened steel firebox surround",
      "Custom bleached white oak cabinetry with integrated organic leather pulls",
      "Tailored acoustic drapery wall filtering the canopy of mature live oaks"
    ],
    materials: ["Texas Limestone", "Bleached White Oak", "Blackened Steel", "Raw Silk", "Bouclé Wool"],
    gallery: [
      { url: "https://images.pexels.com/photos/6394514/pexels-photo-6394514.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800", caption: "Fireplace parlor celebrating natural Austin daylight" },
      { url: "https://images.pexels.com/photos/7195600/pexels-photo-7195600.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800", caption: "Dining salon with vintage brass pendant and custom stone table" },
      { url: "https://images.pexels.com/photos/38071642/pexels-photo-38071642.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800", caption: "Primary bedroom suite with bespoke linen walk-in dressing alcove" }
    ]
  },
  {
    id: "barton-creek-sanctuary",
    title: "Barton Creek Sanctuary",
    subtitle: "Organic Modern Hill Country Estate",
    category: "residential",
    year: "2023",
    location: "Austin, Texas",
    neighborhood: "Barton Creek",
    scope: "New Construction Ground-Up Interior Architecture",
    area: "8,200 sq ft",
    heroImage: "https://images.pexels.com/photos/6538930/pexels-photo-6538930.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1440&w=2560",
    secondaryImage: "https://images.pexels.com/photos/7546323/pexels-photo-7546323.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800",
    editorialStatement: "An ode to Texas stone, water, and cedar—bridging indoor sanctuary with native Hill Country flora.",
    description: "Nestled into the rolling limestone terraces of Barton Creek, this estate dissolves boundaries between natural canyon landscape and curated interior life. Massive motorized glass walls pocket away into cavity walls, allowing the living pavilion to breathe freely with the morning breeze.",
    features: [
      "Monumental bookmatched Roman travertine double island kitchen",
      "Reclaimed Texas longleaf pine ceiling beams with hidden ambient wash lighting",
      "Temperature-controlled 800-bottle glass wine cellar flanking the formal dining room",
      "Seamless indoor-outdoor floor transitions with zero-threshold bronze track systems"
    ],
    materials: ["Roman Travertine", "Longleaf Pine", "Hand-troweled Lime", "Linen", "Oxidized Bronze"],
    gallery: [
      { url: "https://images.pexels.com/photos/6538930/pexels-photo-6538930.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800", caption: "Great room opening toward canyon pool terrace" },
      { url: "https://images.pexels.com/photos/8141955/pexels-photo-8141955.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800", caption: "Culinary studio and morning bar in dark European walnut and stone" }
    ]
  },
  {
    id: "south-congress-creative-loft",
    title: "South Congress Atelier",
    subtitle: "Boutique Design & Venture Headquarters",
    category: "commercial",
    year: "2023",
    location: "Austin, Texas",
    neighborhood: "South Congress (SoCo)",
    scope: "Commercial Office Interior Architecture & Hospitality Lounge",
    area: "5,100 sq ft",
    heroImage: "https://images.pexels.com/photos/36464518/pexels-photo-36464518.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1440&w=2560",
    secondaryImage: "https://images.pexels.com/photos/26729614/pexels-photo-26729614.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800",
    editorialStatement: "A commercial workspace re-imagined with the warmth, tactile intimacy, and residential grace of a private salon.",
    description: "Designed for a forward-thinking venture capital collective in Austin's South Congress district, this creative loft redefines the workplace. Shunning corporate sterility, Cinda Brown layered custom mohair banquettes, acoustic plaster baffles, brushed brass hardware, and private alcoves for deep contemplation.",
    features: [
      "Custom brass and fluted glass partitions dividing collaboration zones",
      "Hospitality-driven espresso and cocktail lounge with emerald marble island",
      "Integrated acoustic fabric wall panels concealing state-of-the-art teleconferencing",
      "Curated mid-century Scandinavian and contemporary Texan sculptural furniture"
    ],
    materials: ["Verde Marble", "Fluted Glass", "Mohair Velvet", "Brushed Brass", "Smoked Oak"],
    gallery: [
      { url: "https://images.pexels.com/photos/36464518/pexels-photo-36464518.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800", caption: "Executive salon with custom acoustic dome and radial seating" },
      { url: "https://images.pexels.com/photos/26729614/pexels-photo-26729614.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800", caption: "Private client lounge and tasting salon" }
    ]
  },
  {
    id: "pemberton-manor",
    title: "Pemberton Heights Manor",
    subtitle: "Historic Revival & Modernist Reimagining",
    category: "residential",
    year: "2022",
    location: "Austin, Texas",
    neighborhood: "Pemberton Heights",
    scope: "Complete Interior Architecture, Furnishing & Lighting Plan",
    area: "7,100 sq ft",
    heroImage: "https://images.pexels.com/photos/20705878/pexels-photo-20705878.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1440&w=2560",
    secondaryImage: "https://images.pexels.com/photos/6394514/pexels-photo-6394514.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800",
    editorialStatement: "Symphony of historic architectural integrity and serene modern minimalism.",
    description: "Set in Austin's leafy Pemberton Heights, this 1928 residence was thoughtfully brought into the 21st century. Original proportions were preserved while flow was opened up, connecting the central gallery with light-flooded family spaces and gardens designed for gracious southern entertaining.",
    features: [
      "Original leaded glass bay window preservation and acoustic re-glazing",
      "Bespoke kitchen cabinetry in pale limestone gray lacquer with antique bronze hardware",
      "Dual primary master baths finished in Arabescato Corchia marble slab",
      "Custom woven silk carpets designed in collaboration with Parisian artisans"
    ],
    materials: ["Arabescato Marble", "Custom Wool Carpets", "Antique Bronze", "Chalk White Plaster"],
    gallery: [
      { url: "https://images.pexels.com/photos/20705878/pexels-photo-20705878.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800", caption: "Grand reception hall with preserved vintage architectural ceiling detail" },
      { url: "https://images.pexels.com/photos/6782578/pexels-photo-6782578.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800", caption: "Peaceful guest suite with custom floor-to-ceiling linen drapery" }
    ]
  },
  {
    id: "aspen-mountain-retreat",
    title: "Aspen Mountain Retreat",
    subtitle: "High Alpine Modernism",
    category: "residential",
    year: "2021",
    location: "Aspen, Colorado",
    neighborhood: "Red Mountain",
    scope: "Alpine Residence Architecture & Bespoke Interior Design",
    area: "9,500 sq ft",
    heroImage: "https://images.pexels.com/photos/7174386/pexels-photo-7174386.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1440&w=2560",
    secondaryImage: "https://images.pexels.com/photos/7546323/pexels-photo-7546323.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800",
    editorialStatement: "Where snow-capped peaks meet the warmth of charred cedar, cashmere, and patinated bronze.",
    description: "Commissioned by repeat Texas clients for their Colorado escape, Cinda Brown translated Texan hospitality into high-alpine luxury. Floor-to-ceiling glass captures the dramatic Roaring Fork Valley, counterbalanced by grounding volcanic stone, deep textural shearling, and intimate conversation pits.",
    features: [
      "Suspended blackened steel central hearth floating between living and dining areas",
      "Heated stone terraces with sunken hot tub overlooking Ajax Mountain",
      "Ski-in mudroom with custom heated boot lockers and walnut benches",
      "Deep cashmere wall upholstery in master bedroom for peak thermal comfort and quiet"
    ],
    materials: ["Charred Cedar", "Volcanic Basalt", "Loro Piana Cashmere", "Blackened Steel", "Shearling"],
    gallery: [
      { url: "https://images.pexels.com/photos/7174386/pexels-photo-7174386.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800", caption: "Living space with mountain light illuminating natural timber framing" },
      { url: "https://images.pexels.com/photos/38071652/pexels-photo-38071652.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800", caption: "Alpine suite with minimalist fireplace and mountain view orientation" }
    ]
  },
  {
    id: "bikaner-boutique-hotel",
    title: "The Heritage Club & Suites",
    subtitle: "Boutique Hospitality & Members Lounge",
    category: "commercial",
    year: "2022",
    location: "Palm Beach, Florida",
    neighborhood: "Worth Avenue District",
    scope: "Private Club & Guest Suites Interior Design",
    area: "11,200 sq ft",
    heroImage: "https://images.pexels.com/photos/33778904/pexels-photo-33778904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1440&w=2560",
    secondaryImage: "https://images.pexels.com/photos/19689227/pexels-photo-19689227.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800",
    editorialStatement: "Evoking timeless coastal grandeur with contemporary restraint, tailored for discerning patrons.",
    description: "An exclusive boutique hospitality commission blending classic coastal heritage with modern bespoke joinery, intimate salon lighting, and custom hand-painted murals reflecting local flora and architectural lore.",
    features: [
      "Bespoke curved salon seating tailored in custom French mohair and washed linen",
      "Private members dining room with hand-applied gold leaf friezes",
      "Ten individual boutique guest suites each featuring unique architectural millwork",
      "Acoustically tuned piano lounge with custom terrazzo and brass inlays"
    ],
    materials: ["Terrazzo", "Antique Mirror", "French Mohair", "Hand-painted Silk", "Aged Brass"],
    gallery: [
      { url: "https://images.pexels.com/photos/33778904/pexels-photo-33778904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800", caption: "Grand arrival lounge with bespoke furniture grouping and grand piano" },
      { url: "https://images.pexels.com/photos/19689227/pexels-photo-19689227.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800", caption: "Members library salon with warm ambient illumination" }
    ]
  }
];

export const PRESS_ITEMS: PressItem[] = [
  {
    name: "Architectural Digest",
    quote: "Cinda Brown orchestrates spaces that feel simultaneously grand and intimately personal, establishing a new benchmark for Austin luxury.",
    date: "November 2023",
    issue: "The Architecture Issue",
    svgBadge: "AD"
  },
  {
    name: "Luxe Interiors + Design",
    quote: "A sublime mastery of organic materials—Brown proves that modern interior architecture can possess both soul and timeless longevity.",
    date: "Spring 2023",
    issue: "Texas Gold List",
    svgBadge: "LUXE"
  },
  {
    name: "Austin Monthly",
    quote: "The Austonian penthouse by Cinda Brown Interiors elevates Texas high-rise living to world-class artistic stature.",
    date: "Best of Design 2023",
    issue: "Annual Design Awards",
    svgBadge: "AUSTIN"
  },
  {
    name: "Elle Decor",
    quote: "Quiet confidence defined. Brown's interiors never shout; instead, they draw you into a whisper of tactile perfection.",
    date: "September 2022",
    issue: "Global Style",
    svgBadge: "ELLE"
  },
  {
    name: "Modern Luxury Interiors",
    quote: "Cinda Brown continues to shape the aesthetic fabric of the American Southwest with unshakeable elegance.",
    date: "Summer 2022",
    issue: "Leaders of Design",
    svgBadge: "MODERN LUXURY"
  },
  {
    name: "Dwell",
    quote: "A seamless synthesis of historic West Austin character and crisp, contemporary functionality.",
    date: "Fall 2021",
    issue: "Modern Renovation",
    svgBadge: "DWELL"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "[PLACEHOLDER] Working with Cinda transformed how our family experiences everyday life. Her eye for natural light, scale, and tactile materials turned our Austonian penthouse into an oasis of serenity 50 floors above the city.",
    author: "Harrison & Claire Vance",
    role: "Private Clients",
    project: "The Austonian Penthouse",
    location: "Austin, Texas"
  },
  {
    quote: "[PLACEHOLDER] Cinda Brown possesses that rare gift of listening deeply to what you value before drawing a single line. She honored the historic soul of our Enfield Road home while making it remarkably contemporary and effortless to live in.",
    author: "Dr. Marcus & Elena Sterling",
    role: "Homeowners",
    project: "Enfield Road Unit #5",
    location: "Old West Austin"
  },
  {
    quote: "[PLACEHOLDER] In commercial design, balancing rigorous acoustic and spatial functionality with residential warmth is extraordinary difficult. Cinda achieved it with effortless poise for our venture headquarters.",
    author: "Victoria Thorne",
    role: "Managing Partner",
    project: "South Congress Atelier",
    location: "Austin, Texas"
  },
  {
    quote: "[PLACEHOLDER] From site visits in Texas to snowy Aspen construction meetings, Cinda's meticulous attention to detail and calm professionalism made an ambitious multi-year build a joyous creative journey.",
    author: "Julian & Sarah Montgomery",
    role: "Private Clients",
    project: "Aspen Mountain Retreat",
    location: "Aspen, Colorado"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Architectural Vision",
    subtitle: "[PLACEHOLDER] Deep listening & spatial lifestyle immersion",
    description: "[PLACEHOLDER] We begin with an intensive discovery session exploring how you inhabit space, your daily rituals, aesthetic affinities, and lifestyle ambitions. We analyze site orientation, light patterns, architectural proportion, and establish the foundational vision.",
    deliverables: ["Project brief & spatial goals", "Design ethos & material moodboards", "Site feasibility & preliminary budgets", "Architectural timeline"],
    duration: "2 — 3 Weeks",
    isPlaceholder: true
  },
  {
    number: "02",
    title: "Concept Development & Spatial Planning",
    subtitle: "[PLACEHOLDER] Translating essence into physical choreography",
    description: "[PLACEHOLDER] Our studio develops schematic layouts, initial floor plans, lighting strategies, and curated 3D material compositions. Every sightline, focal point, and transition is sculpted to ensure effortless visual flow and intuitive functionality.",
    deliverables: ["Curated 3D architectural renderings", "Schematic floor plans & spatial flows", "Material palette samples & stone selection", "Preliminary lighting schematics"],
    duration: "4 — 6 Weeks",
    isPlaceholder: true
  },
  {
    number: "03",
    title: "Design Development & Technical Detailing",
    subtitle: "[PLACEHOLDER] Millwork, custom fixtures, and precision documentation",
    description: "[PLACEHOLDER] Vision is refined into exacting technical drawings. We engineer custom millwork, specify artisan hardware, finalize plumbing and electrical plans, and source bespoke furnishings from our global network of master craftspeople and galleries.",
    deliverables: ["Comprehensive CAD architectural sets", "Custom millwork & joinery elevations", "Finish & fixture specification schedules", "Curated fabric & furnishing dossiers"],
    duration: "6 — 8 Weeks",
    isPlaceholder: true
  },
  {
    number: "04",
    title: "Procurement & Artisan Fabrication",
    subtitle: "[PLACEHOLDER] White-glove orchestration and international sourcing",
    description: "[PLACEHOLDER] We manage every procurement detail: order placement, custom fabrication oversight, freight logistics, customs clearance, and secure climate-controlled Austin warehousing. Strict quality inspection guarantees every item arrives flawlessly.",
    deliverables: ["Transparent procurement accounting", "Artisan fabrication tracking", "Climate-controlled white-glove receiving", "Inspection & defect verification reports"],
    duration: "Ongoing during construction",
    isPlaceholder: true
  },
  {
    number: "05",
    title: "Installation & The Grand Reveal",
    subtitle: "[PLACEHOLDER] Turnkey styling, art hanging, and sensory debut",
    description: "[PLACEHOLDER] Over a curated multi-day installation, our team arranges every piece of custom furniture, hangs artwork with museum accuracy, styles curated objects, dresses textiles, and perfumes the space. You walk into a fully realized, breathtaking home.",
    deliverables: ["Turnkey turnkey installation", "Curated art curation & installation", "Professional architectural photography", "Comprehensive home care & maintenance bible"],
    duration: "3 — 7 Days",
    isPlaceholder: true
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/7722168/pexels-photo-7722168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    caption: "Morning light catching the honed travertine at The Austonian. Austin, TX.",
    likes: "1,248"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/36650049/pexels-photo-36650049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    caption: "Aged brass detailing against hand-selected Calacatta marble slab.",
    likes: "982"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/6394514/pexels-photo-6394514.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    caption: "Old West Austin history reimagined. Enfield Road project.",
    likes: "1,530"
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/8146212/pexels-photo-8146212.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    caption: "Bespoke kitchen architecture. Smoked oak meets clean monolithic stone.",
    likes: "1,114"
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/36464518/pexels-photo-36464518.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    caption: "South Congress creative headquarters lounge. Texture, curve, acoustic calm.",
    likes: "1,420"
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/36777913/pexels-photo-36777913.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    caption: "Soft morning sanctuary. Linen, bouclé, and custom architectural reveals.",
    likes: "1,675"
  }
];

export const MATERIAL_PALETTE = [
  {
    name: "Navona Travertine",
    origin: "Tivoli, Italy",
    type: "Honed Natural Stone",
    use: "Monolithic hearths, primary vanities, and low architectural plinths.",
    accent: "#E7E1D8"
  },
  {
    name: "Aged Patinated Brass",
    origin: "Bespoke Foundry",
    type: "Living Architectural Metal",
    use: "Custom unlacquered hardware, precision hairlines, and luminaire armatures.",
    accent: "#A88B5C"
  },
  {
    name: "Rift-Sawn White Oak",
    origin: "Appalachian Forests",
    type: "Fine Architectural Timber",
    use: "Concealed cabinetry, library walls, and warm acoustic ceiling wraps.",
    accent: "#C4AA7D"
  },
  {
    name: "Belgian Bouclé & Raw Silk",
    origin: "Flanders, Belgium",
    type: "Tactile Heritage Textile",
    use: "Sculptural seating upholstery, acoustic drapery, and headboard niches.",
    accent: "#F3EFE9"
  },
  {
    name: "Slaked Lime Plaster",
    origin: "Venetian Tradition",
    type: "Breathable Mineral Finish",
    use: "Subtly reflective wall surfaces that capture changing daylight.",
    accent: "#FAF8F5"
  }
];
