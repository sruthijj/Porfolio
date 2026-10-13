/**
 * Projects Data - Strictly verified information only.
 */
export const projectsData = [
  {
    id: "lumina-health",
    slug: "lumina-health",
    num: "01",
    title: "Lumina Health — Healthcare Booking Platform",
    shortTitle: "Lumina Health",
    category: "FULL-STACK DEVELOPMENT / HEALTHCARE",
    summary:
      "A healthcare booking and patient management platform designed to simplify appointment scheduling and access to medical services.",
    description:
      "A comprehensive digital health system connecting patients with certified specialists. Built with Angular 21, TypeScript, and AWS Cognito, the platform features streamlined booking flows, role-based medical dashboards, doctor directory filtering, and low-latency scheduling APIs.",
    technologies: [
      "Angular 21",
      "TypeScript",
      "Bootstrap",
      "REST APIs",
      "AWS Cognito",
      "SQL"
    ],
    liveUrl: "https://clinic.cubacle.uk",
    hasLiveUrl: true,
    githubUrl: null, // Verified point: do not invent repo URLs
    route: "/work/lumina-health",
    theme: "lime",
    accentColor: "#D7FF3F",
    metrics: [
      { label: "DEPARTMENTS", value: "8+" },
      { label: "DOCTOR PROFILES", value: "20+" },
      { label: "CODE REDUNDANCY", value: "-35%" },
      { label: "API LATENCY", value: "<200ms" }
    ],
    verifiedHighlights: [
      "Architected a patient management portal supporting appointment scheduling across 8+ medical departments and 20+ doctor profiles.",
      "Integrated secure multi-factor authentication and role segregation for patients, doctors, and administrators through AWS Cognito User Pools.",
      "Developed modular, reusable Angular components and custom reactive forms, reducing code redundancy across modules by 35%.",
      "Optimized SQL schema and API payload structures to accelerate doctor availability queries, sustaining sub-200ms API response times."
    ],
    deepDive: {
      role: "Lead Full-Stack Developer",
      timeline: "Comprehensive System Implementation",
      problem:
        "Conventional clinic appointment scheduling frequently suffers from scheduling friction, uncoordinated doctor availability, and fragmented patient record access. The objective was to engineer a unified, role-segregated portal allowing patients to discover doctors and secure slots seamlessly while giving clinical staff centralized scheduling control.",
      architecture:
        "The frontend is engineered as a modular Angular 21 application leveraging TypeScript strict type definitions and reactive forms for high-precision validation. Authentication and token lifecycle management are delegated to AWS Cognito User Pools with granular role-based claims (Patient, Doctor, Administrator). The backend architecture provides RESTful endpoints querying relational SQL tables with optimized index structures for low-latency slot calculation.",
      keyDecisions: [
        {
          title: "Angular 21 Reactive Modular Architecture",
          desc: "Implemented standalone components and reusable form controls across booking, profile editing, and slot inspection. This modular approach decreased duplicate component definitions by 35%."
        },
        {
          title: "AWS Cognito Role-Based Authorization",
          desc: "Enforced strict JWT verification and role segregation. Patients can only query and reserve open appointments, while physicians have restricted access to their specific calendar blocks and department heads can manage departmental shifts."
        },
        {
          title: "SQL Query & Payload Optimization",
          desc: "Restructured doctor schedule lookup queries and indexed timestamp intervals, maintaining sub-200ms roundtrip response times under peak query loads."
        }
      ]
    }
  },
  {
    id: "dentcare",
    slug: "dentcare",
    num: "02",
    title: "DentCare — AI-Powered Clinical Decision Support System",
    shortTitle: "DentCare",
    category: "ARTIFICIAL INTELLIGENCE / MOBILE DEVELOPMENT",
    summary:
      "An AI-assisted mobile diagnostic tool that classifies tooth enamel wear into four clinical severity grades and supports the generation of assessment reports.",
    description:
      "A clinical decision support tool designed to aid practitioners in detecting tooth enamel degradation. Utilizing computer vision preprocessing and a fine-tuned Convolutional Neural Network deployed on mobile, the system analyzes dental images with 92.8% test accuracy.",
    technologies: [
      "Python",
      "TensorFlow",
      "CNN",
      "OpenCV",
      "Flutter"
    ],
    liveUrl: null, // Project is development/research mobile tool, no live web URL
    hasLiveUrl: false,
    githubUrl: null,
    route: "/work/dentcare",
    theme: "paper",
    accentColor: "#FF4FA3",
    metrics: [
      { label: "CLINICAL SEVERITY GRADES", value: "4" },
      { label: "TRAINING SAMPLES", value: "1,000+" },
      { label: "TEST ACCURACY", value: "92.8%" },
      { label: "IMAGE PIPELINE", value: "CLAHE" }
    ],
    verifiedHighlights: [
      "Developed an end-to-end mobile diagnostic tool for four clinical severity grades.",
      "Trained and fine-tuned a CNN through transfer learning on 1,000+ annotated dental images.",
      "Achieved 92.8% test accuracy.",
      "Implemented preprocessing using CLAHE, normalization, and data augmentation through OpenCV.",
      "Integrated the trained model into a Flutter interface for near-real-time inference and report generation."
    ],
    deepDive: {
      role: "AI & Mobile Engineer",
      timeline: "Applied Machine Learning & Mobile Prototyping",
      problem:
        "Assessing tooth enamel loss visually across varying lighting conditions, angles, and intraoral reflections can lead to diagnostic discrepancies. The project aimed to explore whether transfer-learned convolutional architectures could reliably grade wear severity on consumer mobile hardware to assist dental screenings.",
      architecture:
        "The model pipeline begins with OpenCV-based image preprocessing using Contrast Limited Adaptive Histogram Equalization (CLAHE) to harmonize dynamic range in dental imagery, followed by color space standardization and geometric augmentation. The deep convolutional backbone was fine-tuned via transfer learning on an annotated dataset of 1,000+ intraoral photos. The resulting model was optimized and ported for on-device inference inside a cross-platform Flutter application.",
      keyDecisions: [
        {
          title: "CLAHE Preprocessing for Illumination Invariance",
          desc: "Dental photos frequently display high specular reflection from enamel surfaces. CLAHE redistributed local contrast without amplifying high-frequency noise, markedly improving feature extraction."
        },
        {
          title: "Transfer Learning & Fine-Tuning",
          desc: "Rather than training from scratch on limited medical samples, a proven CNN backbone was fine-tuned with customized classification heads, resulting in 92.8% classification accuracy across all 4 severity tiers."
        },
        {
          title: "On-Device Inference & PDF Summary Generation",
          desc: "Engineered a Flutter mobile interface that captures or imports patient teeth imagery, executes inference locally with minimal latency, and compiles clinical assessment summaries."
        }
      ]
    }
  }
];
