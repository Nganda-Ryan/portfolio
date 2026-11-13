export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectChallenge = {
  title: string;
  body: string | string[];
};

export type ArchitectureDiagramData = {
  title?: string;
  summary: string | string[];
  image: string;
  width: number;
  height: number;
};

export type ProjectRoleSection = {
  title: string;
  items: string[];
};

export type ProjectRole = {
  intro: string | string[];
  sections?: ProjectRoleSection[];
};

export type ProjectCaseStudy = {
  role: string | string[] | ProjectRole;
  architecture?: {
    diagrams: ArchitectureDiagramData[];
  };
  challenges: ProjectChallenge[];
};

export function isStructuredRole(role: ProjectCaseStudy["role"]): role is ProjectRole {
  return typeof role === "object" && role !== null && !Array.isArray(role) && "intro" in role;
}

export type Project = {
  slug: string;
  title: string;
  client?: string;
  category: string;
  headline: string;
  blurb: string;
  overview: string[];
  keyAreas: string[];
  stack: string[];
  img?: string;
  featured: boolean;
  featuredLabel?: string;
  links: ProjectLink[];
  caseStudy?: ProjectCaseStudy;
};

export const projects: Project[] = [
  {
    slug: "ttm-open-fiber",
    title: "TTM",
    client: "Open Fiber",
    category: "Enterprise",
    headline: "Operational Ticket Management & Integrations",
    blurb:
      "Salesforce application connecting operational workflows and multiple enterprise systems through REST and SOAP integrations.",
    overview: [
      "A Salesforce-based operational application designed to manage trouble tickets, guide technical diagnostics, coordinate work orders and streamline communication between operational teams.",
    ],
    keyAreas: [
      "Trouble ticket lifecycle and operational workflows.",
      "Guided diagnostics and work-order management.",
      "Integration with Smarthub, Tibco, PNI and CRM systems.",
      "REST and SOAP communication between enterprise platforms.",
      "Visibility into impacted resources and related operational activities.",
    ],
    stack: ["Salesforce", "Apex", "REST API", "SOAP API", "Enterprise Integrations"],
    img: "/of.png",
    featured: true,
    featuredLabel: "Featured project",
    links: [{ label: "Open Fiber", href: "openfiber.it" }],
  },
  {
    slug: "gespro-itw",
    title: "Gespro+",
    client: "ITW",
    category: "Enterprise",
    headline: "APQP Process Digitization",
    blurb:
      "Salesforce solution that translates an existing APQP process into a structured digital workflow, combining custom development and declarative automation.",
    overview: [
      "A Salesforce solution designed to digitize and structure the APQP (Advanced Product Quality Planning) process.",
      "The project involved translating an existing business process into a more structured digital workflow, combining custom development with Salesforce declarative capabilities.",
    ],
    keyAreas: [
      "Business process analysis and digitalization.",
      "Salesforce solution design and customization.",
      "Combination of custom code and declarative automation.",
      "Test class implementation to validate application behavior.",
    ],
    stack: ["Salesforce", "Apex", "Salesforce Flows", "Lightning Platform"],
    img: "/itw.png",
    featured: true,
    links: [{ label: "ITW", href: "www.itw.com" }],
  },
  {
    slug: "Ingosen",
    title: "Ingosen",
    category: "Enterprise",
    headline: "Stock Management for Electronics Distribution",
    blurb:
      "A NestJS backend for electronics distribution in Cameroon, covering catalog, inventory, sales, finance and operational reporting.",
    overview: [
      "Ingosen is a stock management system built for electronics distribution operations in Cameroon.",
      "The backend is organized by business domain and supports catalog and SKU management, inventory movements, sales and POS flows, finance, treasury, procurement, real-time notifications and reporting.",
    ],
    keyAreas: [
      "Product catalog, brands, attributes and channel-specific SKU pricing.",
      "Inventory traceability, transfers, shipments and IMEI-level item tracking.",
      "Sales orders, invoices, POS, discounts and customer credit.",
      "Procurement and supplier orders.",
      "Finance, cash closures, treasury and payment methods.",
      "RBAC, JWT authentication and encryption of sensitive data with pgcrypto.",
      "Realtime notifications over WebSockets and operational reports.",
    ],
    stack: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "Supabase", "JWT", "Sentry", "Socket.IO"],
    img: "/projects/ingosen.png",
    featured: true,
    links: [{ label: "Live site", href: "www.application.ingosen.comlogin" }],
    caseStudy: {
      role: [
        "I was the backend lead on Ingosen: the NestJS API and data model for electronics stock and distribution in Cameroon.",
        "I designed the domain and the contracts the frontend consumes: dual inventory (IMEI + quantity), channel-based pricing, supplier orders and reception, warehouse transfers, POS sales, daily closures, treasury, RBAC, and the business audit trail. I owned the Prisma schema, module boundaries, the hard invariants (what a SKU means in ops vs in stock, what may leave a warehouse, when a POS is allowed to sell), and the review of the paths that move stock or money.",
      ],
      architecture: {
        diagrams: [
          {
            summary: [
              "Modular NestJS monolith. The UI talks to REST (JWT via Supabase Auth). PostgreSQL is the source of truth; Redis caches hot reads; Bull runs async work; files sit in object storage.",
              "Price: customer channel, then location default, then system channel by client type. Stock is never one table: serialized units are UniqueItem; accessories are QuantityStock. Sensitive costs stay encrypted (pgcrypto). Mutations that matter go to BusinessAuditLog.",
            ],
            image: "/projects/ingosen-arch.png",
            width: 926,
            height: 675,
          },
        ],
      },
      challenges: [
        {
          title: "Product identity is not the SKU row",
          body: [
            "Catalog rows are colors and capacities. Operations order, transfer, and sell a model; stock must move on the physical SKU. ignoredAttributes is one rule across procurement, reception, transfers, POS, invoicing, bundles, and channel prices: two SKUs match if they share model, tracking mode, and attributes outside the ignored keys (color and couleur are the same key). null ignores color; an empty list locks everything.",
            "The hard part was the two failure modes: rejecting a valid other color, or collapsing too far and debiting the wrong variant (256 GB vs 512 GB). Every flow matches the group, then persists the real skuId.",
          ],
        },
        {
          title: "One stock need, N sources, live scans",
          body: [
            "A shop files a TransferRequest with no source. The approver must cover 100% of each line from one or more warehouses: that creates N DRAFT transfers. At load time the cap is neither the whole request nor that exact SKU, but that child's allocation, inside the collapsed group.",
            "The same document holds IMEIs (IN_STOCK, then TRANSIT, then the destination) and quantities (TRANSFER_OUT / TRANSFER_IN), over REST and WebSocket, with several operators. POS to warehouse is allowed; POS to POS is not. Snapshots, per-allocation quotas, and transactions keep a double scan or an over-cap from corrupting stock.",
          ],
        },
      ],
    },
  },
  {
    slug: "schoolapp-ebem",
    title: "EBEM",
    // client: "EBEM / Edurama",
    category: "SaaS Platform",
    headline: "School Management for Cameroon Secondary Schools",
    blurb:
      "A multi-tenant school management platform for lycées and collèges, with a NestJS API, a Next.js web app and an Expo companion for teachers.",
    overview: [
      "SchoolApp (EBEM / Edurama) is a SaaS platform designed for French-speaking secondary schools in Cameroon (lycées and collèges).",
      "The NestJS backend covers tenant configuration, academics, evaluations, finance and a family portal. The Next.js application provides establishment workspaces, a family portal, platform administration and a public marketing site. The Expo app currently exposes a teacher dashboard with courses, grades and profile.",
    ],
    keyAreas: [
      "Multi-tenant configuration, licensing and IAM.",
      "Academics: years, classrooms, enrollments, official IPN programmes and lesson logs.",
      "Timetable management with conflict checks.",
      "Evaluations, report cards, class councils and annual deliberation.",
      "Establishment finance, tuition fees, cash-in/out and payroll.",
      "Family portal for notes, report cards and attendance.",
      "Teacher mobile app for dashboard, courses, grades and profile.",
    ],
    stack: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Supabase Auth",
      "BullMQ",
      "Cloudflare R2",
      "TanStack Query",
      "Tailwind CSS",
      "Puppeteer",
      "Firebase",
      "Prometheus",
    ],
    img: "/projects/edurama.png",
    featured: true,
    links: [{ label: "Live site", href: "ebem-front.vercel.app/" }],
    caseStudy: {
      role: "Lead Backend Engineer. I owned the product end to end: API design, data model, authentication, permissions, and the school modules, plus the Next.js staff UI. One assistant developer worked with me on API implementation. I set the architecture, reviewed the code, and kept behavior consistent across tenants. On the staff app, server actions and React Query talk to the API, and the shell holds permissions and the academic year so pages only render.",
      architecture: {
        diagrams: [
          {
            title: "Frontend",
            summary:
              "The Next.js staff app loads the user, tenant, permissions, and academic year once in the shell. Feature pages read that scope and render. Server actions and TanStack Query call the API. Components do not.",
            image: "/projects/edurama-front-arch.png",
            width: 1406,
            height: 625,
          },
          {
            title: "Backend",
            summary:
              "One NestJS API serves every school. Each request is checked in order: Supabase JWT, active school, permission, then rate limit. PostgreSQL is the source of data. Redis caches permissions and rate limits. A BullMQ worker runs background jobs. Files go to Cloudflare R2, and report-card PDFs are rendered with Puppeteer.",
            image: "/projects/edurama-back-arch.png",
            width: 1283,
            height: 658,
          },
        ],
      },
      challenges: [
        {
          title: "Same permission, different students",
          body: "A teacher, a class head, and a parent can all read student data, but not the same students. A route checks a permission key. Who is visible depends on the school year and the assignment: a class, a subject, or one child. The active school comes from the validated session, and each service filters the query with that assignment.",
        },
        {
          title: "Marks vs calculated results",
          body: "Teachers enter individual marks. Subject averages, class ranks, and the PDF report card are calculated from those marks. Mark entries stay the record. A later correction recomputes averages and ranks from them, then generates the report card again from that result.",
        },
      ],
    },
  },
  {
    slug: "afri-insurance",
    title: "Afri Insurance / Afrilife",
    // client: "AFRI INSURANCE / AFRILIFE",
    category: "Business Application",
    headline: "Insurance Quote and Subscription Portal",
    blurb:
      "A Next.js portal for AFRI INSURANCE and AFRILIFE: instant quotes across multiple products, online travel subscription, and an admin console for policies and transactions.",
    overview: [
      "The portal lets visitors discover AFRI INSURANCE and AFRILIFE products, run instant quotes, and complete online travel insurance subscription with payment.",
      "Instant-quote products include automobile, home, health, individual providence, personal accident, Afrikids Etudes, Afri Helep and Afri Hemle. An administration area covers policies, transactions and user management.",
    ],
    keyAreas: [
      "Public product catalog and quote wizards.",
      "Instant quote generation for standard insurance products.",
      "Online travel insurance subscription and payment.",
      "Admin dashboard for policies, transactions and users.",
      "Authentication and session management.",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "NextAuth", "TanStack Query", "Tailwind CSS"],
    img: "/projects/afri-insurance.png",
    featured: true,
    links: [{ label: "Live site", href: "quote.afri-insurance.com" }],
    caseStudy: {
      role: {
        intro:
          "I designed and built the public quote and subscription portal for AFRI Insurance / AFRILIFE (CCA Holding, Cameroon).",
        sections: [
          {
            title: "Designed",
            items: [
              "A product hub with two journeys: instant quote (most products) and full online subscription (travel only).",
              "URL-driven wizards (shareable, back-button safe) with progress, recap, and French/FCFA UX.",
              "A server-side boundary so partner APIs never run in the browser.",
            ],
          },
          {
            title: "Developed",
            items: [
              "Travel end-to-end: trip details → EVO (AXA Partners) quote/plans → insureds → recap → Orange Money / MTN MoMo → policy → confirmation, PDF, and email with a magic link to the client dashboard.",
              "Instant-quote engines for auto, MRH, santé, prévoyance, accidents, Afrikids Études, Afri Helep, Afri Hemle, from official tariff grids.",
              "Auth and persistence: NextAuth, Prisma/Postgres, guest checkout, claims declaration, and a client/admin policy view.",
            ],
          },
          {
            title: "Maintained",
            items: [
              "Catalog and copy, payment UX, living functional spec (CAHIER-DES-CHARGES), and mapping to the Afri Cameroun EVO Postman collection.",
            ],
          },
        ],
      },
      challenges: [
        {
          title: "EVO travel API: strict domain rules and messy payloads",
          body: [
            "Quotes fail if destination_area strings, traveler composition (from oldest age), or catalog version are even slightly off. Prices arrive as strings, sometimes nested, with TTC at 0 while net is filled; business errors come as fe_code_error in the body, not only HTTP status. quote_code must not leak to the client.",
            "How it was solved: adapters (buildGetQuotePayload, factorizePlans, evo-quote-response) normalize plans, ages, zones, and prices; a server quote session (cache + httpOnly cookies) keeps the quote code; French mapping of known EVO errors for the UI.",
          ],
        },
        {
          title: "Pay first, then issue the policy",
          body: [
            "The business rule is: mobile money must succeed before POST travel/policies. Smobilpay status is async (pending, reversal), S3P HMAC must match the vendor Postman script, and the contract PDF is often not ready immediately.",
            "How it was solved: initiate cashout → poll until SUCCESS/DEBITED → subscribe on EVO → persist in Prisma and email. Contract fetch retries attachments/certificate; email still sends a dashboard magic link if the PDF is late. Checkout stays short so guest user + policy commit is not blocked by a long DB transaction.",
          ],
        },
      ],
    },
  },
  {
    slug: "irca-salesforce-cpq",
    title: "IRCA Group",
    category: "Enterprise Support",
    headline: "Salesforce CPQ, Enterprise Application Support",
    blurb:
      "Technical support for Salesforce CPQ used by global sales teams, covering investigation, configuration, data corrections and code fixes.",
    overview: [
      "Technical support for Salesforce CPQ used by global sales teams across multiple agencies.",
      "The work involved investigating issues reported by users, diagnosing configuration problems, correcting data and implementing code fixes when necessary.",
    ],
    keyAreas: [
      "Investigation and resolution of Salesforce CPQ incidents.",
      "Configuration troubleshooting.",
      "Data corrections and consistency.",
      "Technical fixes and Salesforce customization.",
      "Functional and technical communication with business users.",
    ],
    stack: ["Salesforce CPQ", "Apex", "Salesforce Configuration", "Data Management"],
    img: "/irca.png",
    featured: true,
    links: [{ label: "IRCA Group", href: "www.ircagroup.com" }],
  },
  {
    slug: "rentalafrique",
    title: "Rental",
    client: "RentalAfrique",
    category: "Business Application",
    headline: "Property Management Platform",
    blurb:
      "A web application for property listings and rental operations, with account access by email, NUI or phone and dedicated workspaces for landlords and tenants.",
    overview: [
      "RentalAfrique is a property management platform designed to centralize listings, account access and rental operations.",
      "The dashboard supports sign-in and account creation, then routes users into workflows for property management and rental activity.",
    ],
    keyAreas: [
      "Authentication by email, NUI or phone.",
      "Account creation and session management.",
      "Property listing and rental operations.",
      "Role-specific access for landlords and tenants.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    img: "/projects/rental.png",
    featured: true,
    links: [{ label: "Live site", href: "rentalafrique.com" }],
    caseStudy: {
      role: [
        "I designed and built the rental property management web app: a multi-role platform (admin, support, landlord, manager, renter) on Next.js 15, React 19, and TypeScript, deployed on Cloudflare Pages.",
        "On the product side I owned the property lifecycle (buildings, units, contracts, housing applications, and tenant requests), the support tools (account management and landlord verification), and the shared settings area. The interface is bilingual (English and French) with next-intl.",
        "On the platform side I designed the auth flow and the access control. Sign-in starts with Firebase Auth, user profiles come from a Cloudflare Workers API, and the app then issues its own JWT session in an HTTP-only cookie. Route access is enforced in middleware from the roles stored in that session, not in the UI. I also wired file uploads to Cloudflare R2 and contract PDFs, and I maintained the app through login, typing, and security fixes.",
      ],
      challenges: [
        {
          title: "Session auth on the edge",
          body: [
            "Firebase Auth alone could not protect routes: the Workers API owns profiles and roles, and Cloudflare’s edge runtime cannot run the Firebase Admin SDK inside middleware. I split the flow. The browser signs in with Firebase, a server action loads the Cloudflare user and active profiles, then a JWT is signed with jose (HS256) and stored in an HTTP-only, SameSite cookie. Middleware only decrypts that cookie and checks the path against the user’s roles. Sessions last one hour, with a short refresh window, so the token never sits in localStorage.",
          ],
        },
        {
          title: "Firebase private key in environment variables",
          body: [
            "Production deploys failed because the service-account private key does not survive env vars intact: quotes get wrapped around it, newlines become the two characters \\n, or the whole key is stored as base64. getPrivateKey() normalizes all three forms before firebase-admin initializes, and the Admin SDK is imported only inside the server actions that need it (password and account operations), so it never loads on the edge.",
          ],
        },
      ],
    },
  },
  {
    slug: "university-management",
    title: "Scholaris",
    client: "EPFPS Meiganga",
    category: "Platform",
    headline: "Academic, Administrative and Financial University Platform",
    blurb:
      "A Next.js platform for EPFPS Meiganga that brings admissions, teaching, internships, payments and administration into one environment for students, teachers and staff.",
    overview: [
      "Scholaris is a university management system used by EPFPS Meiganga (univ-mbere).",
      "The application exposes distinct workspaces for administrators, teachers and students, plus a public site for admissions, news, programmes and recruitment.",
    ],
    keyAreas: [
      "Admissions and public institutional pages.",
      "Course, classroom, timetable and academic-year management.",
      "Grades, examinations, absences and internships.",
      "Student documents, requests, messaging and feedback.",
      "Payment setup, payment tracking and financial dashboards.",
      "Teacher hours, leave/vacancy workflows and recruitment.",
      "Role-based access for admin, teacher and student profiles.",
      "File storage on Cloudflare R2.",
    ],
    stack: ["Next.js", "TypeScript", "NextAuth", "TanStack Query", "Cloudflare R2", "Tailwind CSS"],
    img: "/projects/scholaris.png",
    featured: true,
    links: [{ label: "Live demo", href: "builder-spark-lab-gamma.vercel.app" }],
    caseStudy: {
      role: [
        "Lead Frontend Engineer. I owned the Scholaris web client: architecture, UI, and delivery (Next.js App Router, React, TypeScript, Tailwind / shadcn).",
        "I designed and shipped the public site, authentication, and role-based dashboards (admin, teacher, student), plus planning, attendance, grades, enrollments, finance, and recruitment.",
        "I maintained shared client infrastructure (Server Actions, JWT session handling, Zustand, TanStack Query, RBAC). I led two junior frontend developers (code review, task breakdown, standards).",
      ],
      challenges: [
        {
          title: "Academic-year context",
          body: [
            "Time-based data (schedules, grades, enrollments, absences) must be scoped to academic_year_code. Missing or stale context produced empty or mixed-year views.",
            "Resolution: a persisted Zustand store, header selector defaulting to the year in IN_PROGRESS, and refetch on year change.",
          ],
        },
        {
          title: "Optimistic Kanban vs. failed mutations",
          body: [
            "Task status updates use @dnd-kit (pointer and touch). Binding the confirm dialog to mutation.isPending left it spinning on API errors; Authorization was also sent in the Axios body instead of the request config.",
            "Resolution: TanStack Query mutations with snapshot, rollback, and invalidate; local submit state reset in finally; dialog closed only on success; auth header moved to Axios config. ApexCharts also failed under Next.js SSR (r is not a constructor); charts are loaded with a client-only dynamic import.",
          ],
        },
      ],
    },
  },
  {
    slug: "youtube-transcript-panel",
    title: "YouTube Transcript Panel",
    category: "Frontend",
    headline: "In-page YouTube transcript and AI summary",
    blurb:
      "A Manifest V3 Chrome extension that injects a transcript panel into YouTube watch pages, with click-to-seek, optional Claude or Gemini summaries, and txt/srt export.",
    overview: [
      "YouTube Transcript Panel is a Chrome extension (Manifest V3) that injects a transcript panel directly into the YouTube watch page, without a server or iframe.",
      "It supports timestamped transcripts with click-to-seek, optional idea-based summaries via Claude or Gemini, and exports to .txt and .srt.",
    ],
    keyAreas: [
      "Shadow DOM panel injected into YouTube watch pages.",
      "Transcript extraction from page tracks, the native transcript UI, or YouTube’s get_transcript endpoint.",
      "Clickable timestamps synced with the real video element.",
      "Optional summaries through Anthropic Claude or Google Gemini, validated against real segments.",
      "Clipboard copy and .txt / .srt exports.",
    ],
    stack: ["React", "TypeScript", "Vite", "Chrome Extension", "Manifest V3"],
    img: "/projects/youtube-transcript.jpg",
    featured: false,
    links: [{ label: "Repo", href: "github.comNganda-Ryan/yt-summary" }],
  },
  {
    slug: "kodebem",
    title: "Kodebem",
    category: "Content",
    headline: "Technical blog and publishing platform",
    blurb:
      "A Next.js and Sanity blog using Incremental Static Regeneration for fast, SEO-friendly technical publishing.",
    overview: [
      "A modern development blog built with Next.js, Tailwind, and Sanity, designed to share tutorials and technical articles.",
    ],
    keyAreas: ["Content modeling with Sanity.", "ISR for static performance and background refresh."],
    stack: ["Next.js", "Sanity", "Tailwind CSS"],
    img: "/projects/kodebem.png",
    featured: false,
    links: [
      { label: "Live site", href: "www.laguildedescodeurs.com" },
      { label: "Repo", href: "github.comNganda-Ryan/blog" },
    ],
  },
  {
    slug: "take-a-look",
    title: "Take a Look",
    category: "Frontend",
    headline: "Chrome extension for social link sharing",
    blurb: "A React Chrome extension for sharing links to social networks, with an admin page for new sharing options.",
    overview: [
      "A Chrome extension built with React and Tailwind CSS for easy link sharing to social networks, with an admin page for adding new sharing options.",
    ],
    keyAreas: ["Chrome extension UI.", "Configurable sharing destinations."],
    stack: ["React", "Tailwind CSS", "Chrome Extension"],
    img: "/take-a-look.png",
    featured: false,
    links: [{ label: "Repo", href: "github.com/Nganda-Ryan/take-a-look" }],
  },
];

/** Display order for the Selected Work section (grid). */
export const selectedWorkOrder = [
  "ttm-open-fiber",
  "gespro-itw",
  "Ingosen",
  "university-management",
  "schoolapp-ebem",
  "afri-insurance",
  "irca-salesforce-cpq",
  "rentalafrique",
] as const;

export const featuredProjects = selectedWorkOrder
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project));

export const otherProjects = projects.filter((project) => !project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjectSlugs() {
  return featuredProjects.map((project) => project.slug);
}
