export const profile = {
  name: "Shlok Mehroliya",
  shortName: "Shlok",
  role: "Full-stack engineer",
  email: "shlokvm@gmail.com",
  linkedin: "https://www.linkedin.com/in/shlok-mehroliya-2995b120a/",
  github: "https://github.com/ShlokM08",
} as const;

export type OutLink = {
  label: string;
  href: string;
};

/**
 * GitHub and live URLs go in `links`.
 * Leave the array empty and the site hides the control.
 */
export const hero = {
  dek: "I own frontend architecture from the first requirement through production. Streaming, large state, and interfaces that stay fast when the data does not.",
  facts: ["Full-stack engineer at SpyCraft", "Open to onsite and remote roles"],
};

export const experience: {
  date: string;
  role: string;
  company: string;
  summary: string;
  points: string[];
  tags: string[];
}[] = [
  {
    date: "Oct 2025 — Present",
    role: "Full-stack Engineer",
    company: "SpyCraft",
    summary:
      "Own the frontend of a production AI product, from the ads library and streaming chat through analytics and reports.",
    points: [
      "Architected the Ads Library data layer with a shared cache and context-scoped state, so high-volume browsing does not block the interface.",
      "Rebuilt pagination with React Query infinite scroll, predictive prefetch, and two scroll observers, cutting next-page wait 40% and API calls 25%.",
      "Built abort-safe streaming chat with incremental parsing, optimistic updates, and isolated state for each conversation.",
      "Made the Following page 35% faster to interactive with progressive loading and skeletons on high-volume accounts.",
      "Unified the report pipeline so live tasks and finished files stay in sync through polling, deduplication, and cache invalidation.",
    ],
    tags: ["React", "Next.js", "React Query", "TypeScript"],
  },
  {
    date: "Oct 2023 — Dec 2024",
    role: "Undergraduate Engineering Researcher",
    company: "KushalMa",
    summary:
      "Built a full-stack research system that turns WhatsApp transcripts into something moderators can query.",
    points: [
      "Parsed and structured chat transcripts into MongoDB for querying and analytics at scale.",
      "Designed pipelines for engagement, activity trends, and communication patterns across groups.",
      "Shipped dashboards and REST APIs so moderators can watch behaviour without waiting on a raw export.",
    ],
    tags: ["MongoDB", "REST", "Dashboards"],
  },
];

export const projects: {
  name: string;
  date: string;
  kind: string;
  summary: string;
  tags: string[];
  mark: "jalsa" | "route" | "audio";
  links: OutLink[];
}[] = [
  {
    name: "Jalsa",
    date: "",
    kind: "Restaurant platform",
    summary:
      "A two-sided restaurant product: diner discovery, QR checkout, loyalty, and a restaurant console. One transaction path handles discounts, redemptions, fees, and payouts, with analytics by hour, day, week, and month.",
    tags: ["React Native", "TypeScript", "FastAPI", "MongoDB", "GCP"],
    mark: "jalsa",
    links: [
      {
        label: "Demo",
        href: "https://drive.google.com/file/d/1Er7ZMN876WBLcJk0D79zZ8OhjlwKkE4e/view?usp=sharing",
      },
      { label: "Frontend", href: "https://github.com/Shlok7911/jalsa" },
      { label: "Backend", href: "https://github.com/Shlok7911/jalsa-be" },
      {
        label: "APK",
        href: "https://expo.dev/accounts/shlok_meh/projects/jalsa/builds/795c2589-3a4e-4f1a-baba-c92d9116dd28",
      },
    ],
  },
  {
    name: "RedRoute",
    date: "",
    kind: "Events and bookings",
    summary:
      "A full-stack events and holiday booking platform with JWT authentication, Prisma against PostgreSQL, and a responsive interface deployed end to end.",
    tags: ["React", "TypeScript", "PostgreSQL", "Prisma", "JWT"],
    mark: "route",
    links: [
      { label: "Live", href: "https://red-route-voau.vercel.app/" },
      { label: "Code", href: "https://github.com/ShlokM08/RedRoute" },
    ],
  },
  {
    name: "Storify",
    date: "",
    kind: "Music recommendations",
    summary:
      "An emotion-aware music engine. CNN and RNN models raised emotion detection from 40% to 67%, then Spotify turns that signal into a recommendation.",
    tags: ["Python", "CNN", "RNN", "scikit-learn", "Spotify API"],
    mark: "audio",
    links: [{ label: "Code", href: "https://github.com/ShlokM08/IR_Project" }],
  },
];

export const achievements: { label: string; detail: string }[] = [
  { label: "Academic scholarship, 100%", detail: "IIIT Delhi · 2021" },
  { label: "Treasurer", detail: "International Relations Council · 2024" },
  { label: "Growth team lead", detail: "Enveave · Sep–Dec 2023" },
  { label: "Teaching assistant", detail: "IHCI · 2023" },
  { label: "Registrations team lead", detail: "Astra · 2023" },
  { label: "Induction mentor", detail: "IIIT Delhi · 2022" },
  { label: "Ethical Hacking Essentials", detail: "EC-Council · 2024" },
  { label: "Machine learning in finance", detail: "NYU Tandon · 2024" },
  { label: "CBSE Nationals", detail: "Basketball · 2019" },
  { label: "Duke of Edinburgh, Bronze", detail: "2018" },
  { label: "Speaker", detail: "Gavel Club · 2018" },
];

export const spycraft = {
  facts: ["SpyCraft", "Full-stack engineer", "Oct 2025 – Present"],
  title: "The product cannot freeze while the data is still arriving.",
  lede: "I own the frontend architecture at SpyCraft. The ads library, the streaming chat, and the report pipeline all have to stay responsive while the data is still in motion.",
  streamTitle: "How a reply reaches the screen",
  stages: [
    {
      title: "The conversation",
      text: "Each chat keeps its own state. Leaving the view aborts the request, so a late chunk cannot land in the wrong thread.",
    },
    {
      title: "The stream",
      text: "The reply is parsed as chunks arrive, not after the whole message is done.",
    },
    {
      title: "The screen",
      text: "The interface updates optimistically, and one conversation cannot force the rest of the app to rerender.",
    },
  ],
  metrics: [
    {
      value: "40%",
      label:
        "Less time waiting for the next page of ads. Infinite scroll, predictive prefetch, and two scroll observers.",
    },
    {
      value: "25%",
      label: "Fewer API calls for that same browsing.",
    },
    {
      value: "35%",
      label:
        "Faster time to interactive on Following, for high-volume accounts. Progressive loading and skeletons.",
    },
  ],
  systems: [
    {
      title: "The library",
      text: "A shared cache and context-scoped state, so moving between views does not block on ads the person already loaded.",
    },
    {
      title: "The reports",
      text: "Live tasks and finished files stay reconciled through polling, deduplication, and an invalidation when the job completes. The screen keeps one version of the truth.",
    },
  ],
};

export const jalsa = {
  facts: ["Jalsa", "React Native · TypeScript · FastAPI · MongoDB · GCP · EAS"],
  title: "Both sides of the restaurant. One path for the money.",
  lede: "A diner discovers a place, checks out with a QR code, and redeems loyalty. The restaurant runs a separate console. I built and deployed both.",
  points: [
    {
      title: "The pipeline",
      text: "FastAPI and MongoDB apply promotional discounts, loyalty redemptions, platform fees, and restaurant payouts in one transaction path.",
    },
    {
      title: "The analytics",
      text: "Revenue, average order value, retention, and repeat visits, aggregated by the hour, day, week, and month.",
    },
    {
      title: "The clients",
      text: "A diner app and a restaurant console, in React Native and TypeScript, running on GCP and shipped with EAS.",
    },
  ],
  links: [] as OutLink[],
};

export const earlierWork: {
  name: string;
  meta: string;
  summary: string;
  stack: string;
  body: string[];
  links: OutLink[];
}[] = [
  {
    name: "RedRoute",
    meta: "Events and holiday booking",
    summary: "Authentication, booking, and a responsive interface, deployed end to end.",
    stack: "TypeScript, React, PostgreSQL, Prisma, JWT, Vercel",
    body: [
      "People book events and holidays, so the session has to stay trustworthy from the first login through the reservation.",
      "JWT authentication sits in front of Vercel serverless functions. Prisma talks to PostgreSQL on Render, with indexed queries and connection pooling, so the database is not opened once per click.",
      "The interface is responsive, and the product is deployed. The path from sign-in to a finished booking is live.",
    ],
    links: [],
  },
  {
    name: "KushalMa",
    meta: "Research · Oct 2023 – Dec 2024",
    summary: "WhatsApp transcripts turned into something a moderator can read.",
    stack: "MongoDB, REST, dashboards",
    body: [
      "A raw chat export is not a dataset. Moderators still need to see who is active, how a group behaves, and whether engagement is changing.",
      "I built the system that parses transcripts, stores them in MongoDB, and runs pipelines for engagement, activity trends, and communication patterns across groups.",
      "Dashboards show those statistics as they update. The APIs and queries are shaped for large histories, not a single small export.",
    ],
    links: [],
  },
  {
    name: "Storify",
    meta: "Emotion, then a song",
    summary: "Detect the feeling. Ask Spotify what to play.",
    stack: "Python, CNN, RNN, scikit-learn, Spotify API",
    body: [
      "A recommendation that only knows the last few tracks misses the reason someone pressed play.",
      "A convolutional network reads the emotion. A recurrent network models the sequence. On FER-2013 and HAR, detection accuracy moved from 40% to 67%.",
      "The Spotify API turns that emotion tag into a recommendation while the session is still live.",
    ],
    links: [],
  },
];

export const practice: { label: string; value: string }[] = [
  {
    label: "Frontend",
    value: "React, Next.js, TypeScript, JavaScript",
  },
  {
    label: "Backend",
    value: "Node.js, Python, Java, REST",
  },
  {
    label: "Data",
    value: "PostgreSQL, MongoDB, TensorFlow",
  },
  {
    label: "Tools",
    value: "Git, Docker, Figma",
  },
];

export const record: {
  label: string;
  value: string;
  href?: string;
  hrefLabel?: string;
}[] = [
  {
    label: "B.Tech, Computer Science",
    value: "IIIT Delhi · Dec 2021 – May 2025",
  },
  {
    label: "Academic scholarship",
    value: "Semesters I, II, V, and VII · 2021–2025",
  },
  {
    label: "Lecturer, human–computer interaction",
    value: "NPTEL · 2024",
  },
  {
    label: "Teaching assistant",
    value: "IHCI · 2023",
  },
  {
    label: "Treasurer",
    value: "International Relations Council, IIIT Delhi · 2024",
  },
  {
    label: "Ethical Hacking Essentials",
    value: "EC-Council · 2024",
  },
  {
    label: "Machine learning in finance",
    value: "NYU Tandon · 2024",
  },
];

export const backgroundLede =
  "Computer science at IIIT Delhi, then a lecture series on human–computer interaction. The same standard shows up in the work above: a clear order, a fast path, and nothing on screen that has not earned its place.";

export const contactLede =
  "I am looking for a senior product engineering role. The kind where the frontend architecture is part of the job, from the first requirement through production.";
