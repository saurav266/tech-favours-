
import {
  ShoppingBag,
  HeartPulse,
  Users,
  Utensils,
  Building2,
} from "lucide-react";

export const sharedStack = [
  "React",
  "Node.js",
  "MongoDB",
  "Redis",
];

export const projects = [
  {
    number: "01",
    slug: "minta-fresh",
    title: "Minta Fresh",
    category: "Food & Delivery",
    image: "/projects/minta-fresh.jpeg",
    imageAlt: "Minta Fresh application screenshot",
    description:
      "A vegetarian-only food delivery application focused on convenient vegetarian food discovery and ordering.",
    status: "Under Development",
    metric: "100% Vegetarian",
    icon: Utensils,
    overview:
      "Minta Fresh is being developed as a dedicated vegetarian food delivery experience. Its scope focuses on a clear food discovery and ordering journey for customers looking for vegetarian options.",
    challenge:
      "A dedicated vegetarian experience needs to make its food focus immediately clear and keep the customer journey straightforward. The product must distinguish itself from general food platforms.",
    solution:
      "The product is being developed around a focused vegetarian food delivery experience. Its interface and application workflows are being designed around that positioning. The project remains under development.",
    contribution: [
      "Full-stack product development",
      "Frontend application implementation",
      "Backend and API development",
      "Application architecture and integration",
    ],
    architecture: [
      "React-based user interface",
      "Node.js application and backend layer",
      "MongoDB data layer",
      "Redis for caching or fast data access, where implemented",
    ],
    gallery: [
      {
        src: "/projects/minta-fresh.jpeg",
        caption: "Minta Fresh application screenshot",
      },
    ],
    liveUrl: null,
  },

  {
    number: "02",
    slug: "minta-restro",
    title: "Minta Restro",
    category: "Food & Delivery",
    image: null,
    imageAlt: "Minta Restro project preview",
    description:
      "A food delivery application supporting both vegetarian and non-vegetarian food options.",
    status: "Under Development",
    metric: "Veg + Non-Veg",
    icon: Utensils,
    overview:
      "Minta Restro is being developed as a food delivery application with both vegetarian and non-vegetarian choices. It is a separate product from Minta Fresh, with a broader food catalogue scope.",
    challenge:
      "A mixed food catalogue needs clear categorization so customers can understand and browse vegetarian and non-vegetarian choices confidently.",
    solution:
      "The product is being developed around a food delivery journey that accommodates both food categories. Screenshots and finalized features can be added as the application UI is completed.",
    contribution: [
      "Full-stack product development",
      "Frontend application implementation",
      "Backend and API development",
      "Application architecture and integration",
    ],
    architecture: [
      "React-based user interface",
      "Node.js application and backend layer",
      "MongoDB data layer",
      "Redis for caching or fast data access, where implemented",
    ],
    gallery: [],
    liveUrl: null,
  },

  {
    number: "03",
    slug: "livhomio-crm",
    title: "Livhomio CRM",
    category: "CRM",
    image: "/projects/livhomio-crm.png",
    imageAlt: "Livhomio CRM screenshot",
    description:
      "A customer relationship management platform designed to support business relationship and workflow management.",
    status: "Live",
    metric: "CRM Platform",
    icon: Building2,
    overview:
      "Livhomio CRM is a customer relationship management platform. The portfolio case study represents a full-stack development contribution.",
    challenge:
      "CRM software needs to bring customer-related information and business workflows into a usable application experience. The interface and backend need to work together reliably.",
    solution:
      "The project is presented as a full-stack CRM platform. This case study focuses on its application experience and engineering contribution without claiming unverified modules or automation features.",
    contribution: [
      "Full-stack development",
      "Frontend implementation",
      "Backend and API implementation",
      "Application integration",
    ],
    architecture: [
      "React frontend",
      "Node.js backend",
      "Confirm the exact MongoDB and Redis usage before publishing project-specific architecture claims",
    ],
    gallery: [
      {
        src: "/projects/livhomio-crm.png",
        caption: "Livhomio CRM application screenshot",
      },
    ],
    liveUrl: "https://livhomio.com/",
  },

  {
    number: "04",
    slug: "fuel-nutrients",
    title: "Fuel & Nutrients",
    category: "E-Commerce",
    image: "/projects/fuel-nutrients.png",
    imageAlt: "Fuel and Nutrients e-commerce screenshot",
    description:
      "An e-commerce platform for protein and nutrition products.",
    status: "Live",
    metric: "Nutrition E-Commerce",
    icon: ShoppingBag,
    overview:
      "Fuel & Nutrients is an e-commerce website focused on protein and nutrition products. The project is included as a full-stack development contribution.",
    challenge:
      "A product-focused e-commerce experience needs to present product information clearly and make it easy for visitors to explore the catalogue and proceed through the shopping journey.",
    solution:
      "The website provides an online storefront for protein and nutrition products. Specific payment, inventory and order-management capabilities should only be listed after confirming their implementation.",
    contribution: [
      "Full-stack development",
      "Frontend implementation",
      "Backend and API implementation",
      "Application integration",
    ],
    architecture: [
      "React frontend",
      "Node.js backend",
      "Confirm the exact MongoDB and Redis usage before publishing project-specific architecture claims",
    ],
    gallery: [
      {
        src: "/projects/fuel-nutrients.png",
        caption: "Fuel & Nutrients e-commerce screenshot",
      },
    ],
    liveUrl: "https://www.fuelandnutrients.com/",
  },

  {
    number: "05",
    slug: "symbosys-hrms",
    title: "Symbosys HRMS",
    category: "HRMS",
    image: "/projects/symbosys-hrms.png",
    imageAlt: "Symbosys HRMS screenshot",
    description:
      "A human resource management software platform.",
    status: "Live",
    metric: "HR Management",
    icon: Users,
    overview:
      "Symbosys HRMS is a human resource management software platform. The project is presented as a full-stack development contribution.",
    challenge:
      "HRMS platforms support people-related organizational processes. A usable application needs a clear interface and a dependable application layer for its workflows.",
    solution:
      "This case study presents the HRMS platform and the full-stack development contribution. Specific HR modules should be added after confirming which modules were implemented.",
    contribution: [
      "Full-stack development",
      "Frontend implementation",
      "Backend and API implementation",
      "Application integration",
    ],
    architecture: [
      "React frontend",
      "Node.js backend",
      "Confirm the exact MongoDB and Redis usage before publishing project-specific architecture claims",
    ],
    gallery: [
      {
        src: "/projects/symbosys-hrms.png",
        caption: "Symbosys HRMS application screenshot",
      },
    ],
    liveUrl: "https://hrms.symbosys.com/",
  },

  {
    number: "06",
    slug: "curewrap",
    title: "CureWrap",
    category: "Healthcare",
    image: "/projects/curewrap.png",
    imageAlt: "CureWrap healthcare e-commerce screenshot",
    description:
      "A healthcare e-commerce platform with an online storefront experience.",
    status: "Live",
    metric: "Healthcare E-Commerce",
    icon: HeartPulse,
    overview:
      "CureWrap is presented as a healthcare e-commerce website. The supplied screenshot shows its storefront experience.",
    challenge:
      "Healthcare commerce requires a clear, trustworthy storefront where visitors can understand the offering and navigate the shopping experience with confidence.",
    solution:
      "The project provides a healthcare-focused e-commerce web experience. Specific checkout, payment, product or clinical capabilities should only be added after confirming their implementation.",
    contribution: [
      "Full-stack development contribution",
      "Frontend implementation",
      "Backend and API implementation",
      "Application integration",
    ],
    architecture: [
      "React and Node.js are within the general stack information supplied for the portfolio",
      "Confirm the exact technologies used by CureWrap before publishing a project-specific architecture statement",
    ],
    gallery: [
      {
        src: "/projects/curewrap.png",
        caption: "CureWrap healthcare e-commerce screenshot",
      },
    ],
    liveUrl: "https://curewrap.com",
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}


export const projectDetails = {
  "minta-fresh": {
    tagline: "A dedicated digital food delivery experience for vegetarian customers.",
    businessContext:
      "Minta Fresh is being developed as a vegetarian-only food delivery platform. The product focuses on making vegetarian food discovery and ordering more convenient.",
    objectives: [
      "Build a dedicated vegetarian food delivery experience.",
      "Create a simple and accessible customer interface.",
      "Organize vegetarian food discovery and ordering workflows.",
      "Develop a backend foundation that can support future product growth."
    ],
    modules: [
      {
        title: "Customer application",
        description:
          "Customer-facing experience for discovering vegetarian food and accessing the ordering journey."
      },
      {
        title: "Food catalogue",
        description:
          "A focused catalogue structure for vegetarian food offerings."
      },
      {
        title: "Backend services",
        description:
          "Application APIs and backend logic supporting the product."
      },
      {
        title: "Data management",
        description:
          "Structured application data management for the platform."
      }
    ],
    engineering: [
      "React-based frontend development",
      "Node.js backend development",
      "MongoDB data modelling",
      "Redis integration where implemented",
      "Microservices-oriented architecture as applicable"
    ],
    futureScope: [
      "Further customer experience improvements",
      "Additional ordering workflows",
      "Operational and delivery integrations"
    ]
  },

  "minta-restro": {
    tagline: "A food delivery platform for vegetarian and non-vegetarian choices.",
    businessContext:
      "Minta Restro is being developed as a food delivery application supporting both vegetarian and non-vegetarian food options. It is a separate product from Minta Fresh.",
    objectives: [
      "Build a food delivery experience with both food categories.",
      "Make food discovery and browsing straightforward.",
      "Create clear food categorization.",
      "Establish a scalable application foundation."
    ],
    modules: [
      {
        title: "Customer application",
        description:
          "Customer-facing interface for exploring available food options."
      },
      {
        title: "Food categories",
        description:
          "Organization of vegetarian and non-vegetarian food choices."
      },
      {
        title: "Backend services",
        description:
          "Backend application logic and API development."
      },
      {
        title: "Data management",
        description:
          "Application data structures and database integration."
      }
    ],
    engineering: [
      "React frontend development",
      "Node.js backend development",
      "MongoDB data modelling",
      "Redis integration where implemented",
      "Microservices-oriented architecture as applicable"
    ],
    futureScope: [
      "Additional customer workflows",
      "Further catalogue improvements",
      "Delivery and operational integrations"
    ]
  },

  "livhomio-crm": {
    tagline: "A digital platform for customer relationship and business workflows.",
    businessContext:
      "Livhomio CRM is a customer relationship management platform. The project demonstrates full-stack development work on a business-oriented software application.",
    objectives: [
      "Develop a structured CRM application experience.",
      "Create a usable interface for business workflows.",
      "Connect frontend functionality with backend services.",
      "Support maintainable application development."
    ],
    modules: [
      {
        title: "CRM interface",
        description:
          "Application interface for accessing the CRM platform."
      },
      {
        title: "Business workflows",
        description:
          "Application workflows designed around customer relationship management."
      },
      {
        title: "Backend integration",
        description:
          "Server-side application logic and API integration."
      },
      {
        title: "Data layer",
        description:
          "Application data handling and persistence."
      }
    ],
    engineering: [
      "Full-stack application development",
      "Frontend and backend integration",
      "API implementation",
      "Application data management"
    ],
    futureScope: [
      "Additional workflow improvements",
      "Further integrations",
      "Reporting and analytics enhancements, if required"
    ]
  },

  "fuel-nutrients": {
    tagline: "An online shopping experience for protein and nutrition products.",
    businessContext:
      "Fuel & Nutrients is an e-commerce platform focused on protein and nutrition products. The website provides an online storefront for visitors exploring the product range.",
    objectives: [
      "Build a product-focused online storefront.",
      "Present nutrition products clearly.",
      "Create a straightforward browsing experience.",
      "Connect the user interface with application services."
    ],
    modules: [
      {
        title: "E-commerce storefront",
        description:
          "Website experience for discovering protein and nutrition products."
      },
      {
        title: "Product presentation",
        description:
          "Product-focused layouts and information presentation."
      },
      {
        title: "Application backend",
        description:
          "Backend application functionality and integration."
      },
      {
        title: "Data management",
        description:
          "Application data handling for the e-commerce experience."
      }
    ],
    engineering: [
      "Full-stack web development",
      "Frontend implementation",
      "Backend and API integration",
      "Application data management"
    ],
    futureScope: [
      "Further storefront improvements",
      "Additional customer experience enhancements",
      "Further commerce integrations"
    ]
  },

  "symbosys-hrms": {
    tagline: "A human resource management software platform.",
    businessContext:
      "Symbosys HRMS is a human resource management platform. The project demonstrates full-stack development contribution to an HR-focused software application.",
    objectives: [
      "Develop an accessible HR software interface.",
      "Support structured application workflows.",
      "Integrate frontend and backend functionality.",
      "Maintain a clear and consistent user experience."
    ],
    modules: [
      {
        title: "HRMS application",
        description:
          "User-facing software interface for the HR management platform."
      },
      {
        title: "Workflow interface",
        description:
          "Application screens supporting HR-related workflows."
      },
      {
        title: "Backend integration",
        description:
          "Server-side application functionality and API integration."
      },
      {
        title: "Data management",
        description:
          "Application data handling and persistence."
      }
    ],
    engineering: [
      "Full-stack application development",
      "Frontend implementation",
      "Backend integration",
      "API and data management"
    ],
    futureScope: [
      "Further HR workflow enhancements",
      "Additional integrations",
      "Reporting improvements"
    ]
  },

  "curewrap": {
    tagline: "A healthcare-focused e-commerce storefront.",
    businessContext:
      "CureWrap is a healthcare e-commerce website. Its storefront provides visitors with an online interface for exploring its healthcare-related offerings.",
    objectives: [
      "Create a healthcare-focused online storefront.",
      "Present products and information clearly.",
      "Provide a consistent website browsing experience.",
      "Connect the frontend with application services."
    ],
    modules: [
      {
        title: "Healthcare storefront",
        description:
          "Website interface for exploring the platform's healthcare-related offerings."
      },
      {
        title: "Product presentation",
        description:
          "Storefront layouts for displaying available offerings."
      },
      {
        title: "Application integration",
        description:
          "Integration of website functionality with its supporting application services."
      },
      {
        title: "Responsive experience",
        description:
          "Presentation designed to work across different screen sizes."
      }
    ],
    engineering: [
      "Web application development",
      "Frontend implementation",
      "Application integration",
      "Backend development contribution"
    ],
    futureScope: [
      "Further storefront improvements",
      "Additional user experience enhancements",
      "Further commerce integrations"
    ]
  }
};
