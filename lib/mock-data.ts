import type { ActivityData, ServiceData } from "./types";

export type { ActivityData, ServiceData };

const Services: ServiceData[] = [
  {
    slug: "planning",
    title: "Planning",
    hero: {
      paragraph:
        "The Planning service is the critical function responsible for ensuring optimal flow of materials and products across the entire supply chain, from raw material procurement to final customer delivery. Our objective is to strategically balance future demand forecasts, inventory investments, and supplier capacity to maximize service levels while minimizing operating costs and working capital. This integrated approach covering Demand and Procurement Planning – enables data-driven decision-making that directly impacts organizational agility, resilience, and financial performance.",
      customers: "MA, PS, VM, EM, IPO, MusP",
      headcount: "18",
      functions: "3"
    },
    overview: {
      description:
        "The Planning function is structured around two core pillars that work in concert to manage the entire lifecycle of goods and resources efficiently. Each pillar is vital for converting the company's strategic goals into an executable supply chain plan.",
      sections: [
        {
          title: "1. Demand Planning",
          content:
            "This process focuses on accurately predicting future customer requirements to create a single, unified view of expected sales.",
          items: [
            {
              label: "Core Responsibility:",
              text: "Develop and maintain statistical forecasts, incorporate market intelligence (sales, marketing, customer feedback), and manage the cross-functional consensus forecasting process."
            },
            {
              label: "Outcome:",
              text: "Reduces error and bias in forecast, allowing the business to anticipate market shifts, prevent costly stockouts, and avoid risks associated with excess inventory."
            }
          ]
        },
        {
          title: "2. Procurement Planning",
          content:
            "This pillar translates the approved demand plan into a feasible plan for material procurement and production, ensuring we have the right components at the right time.",
          items: [
            {
              label: "Core Responsibility:",
              text: "Determine the optimal timing, location, and volume for purchasing raw materials and components, manage supplier capacity constraints, and execute the detailed material requirements planning (MRP)."
            },
            {
              label: "Outcome:",
              text: "Improves supplier lead time compliance, optimizes inventory levels for key materials, and maximizes production capacity utilization, safeguarding all manufacturing and assembly schedules."
            }
          ]
        }
      ]
    },
    standardProcess: {
      description:
        "The following process map visually outlines the essential steps and review stages of the Procurement Planning process, ensuring a synchronized and efficient approach to material acquisition and scheduling.",
      images: [
        {
          imagePath:
            "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763726852/Standard_Process_Planning_chs3sj.png"
        }
      ]
    },
    relatedLinks: [
      {
        href: "",
        linkText: "OSD6AP2-13_Procurement_Planning_Procedure",
        details: "Procurement Planning Procedure"
      },
      {
        href: "",
        linkText: "OSD6AP2-13-02_Procurement_Planning_-_An_Overview",
        details: "Procurement Planning - An Overview"
      },
      {
        href: "",
        linkText: "OSD6AP2-13-03-01_Creating_Scheduling_Agreement_Releases",
        details: "Creating Scheduling Agreement Releases"
      },
      {
        href: "",
        linkText:
          "OSD6AP2-13-03-02_Creating_Purchase_Order_with_Purchase_Requisition_Number",
        details: "Creating Purchase Order with Purchase Requisition Number"
      },
      {
        href: "",
        linkText: "OSD6AP2-13-03-03_Modifying_MM_Delivery_Schedule_Lines",
        details: "Modifying MM Delivery Schedule Lines"
      }
    ]
  },
  {
    slug: "inbound-control",
    title: "Inbound Control",
    hero: {
      paragraph:
        "The Inbound Control service is the foundational operational discipline responsible for managing the flow of materials entering our system. This function encompasses the administrative and physical cooperation, required to transition materials from the supplier's custody into our designated inventory.",
      customers: "MA, VM, DCEA, ME, PS, IPO, GS/OSD1-JP",
      headcount: "16",
      functions: "3"
    },
    overview: {
      description:
        "The Inbound Control service is structured around three key activities: Shipment Tracking, I-star Creation, and Goods Receipt.",
      sections: [
        {
          title: "1. Real-Time Inbound Control",
          content:
            "This process focuses on maintaining continuous, end-to-end visibility of all materials scheduled for delivery, from the moment they depart the supplier until they arrive at our receiving warehouse.",
          items: [
            {
              label: "Core Responsibility:",
              text: "Monitor supplier performance and transit milestones against expected delivery dates. Proactively communicate and manage exceptions with logistics providers and internal stakeholders (eg: shipment delays, import/export documentations, etc). Raise, maintain, and track the ISTAR Creation process - a mandatory pre-authorization step that monitors the change in shipment mode, before order is changed & released."
            },
            {
              label: "Outcome:",
              text: "Help gather data to monitor source planning capability, by tracking actual cost vs. estimated cost of shipment mode change. Ensure accurate documentation required for importing process. Minimizes demurrage and detention charges by ensuring resources are ready upon arrival, and allows internal functions to plan production or distribution based on confirmed material availability."
            }
          ]
        },
        {
          title: "2. ISTAR",
          content:
            "This is the mandatory pre-authorization step that monitors the change in shipment method, before order is changed and releases.",
          items: [
            {
              label: "Core Responsibility:",
              text: "Generate documentation that would help the process of approving a shipment mode change."
            },
            {
              label: "Outcome:",
              text: "Help gather data to monitor source planning capability, by tracking actual cost vs. estimated cost of shipment mode change."
            }
          ]
        },
        {
          title: "3. Inbound Coordination and Verification",
          content:
            "This activity is the final administrative confirmation that the materials have been successfully transferred from the carrier into our inventory system, marking the start of internal accountability.",
          items: [
            {
              label: "Core Responsibility:",
              text: "Maintain close coordination with customs brokers, forwarders and warehouses to monitor booking arrangements, shipping schedules, and cargo readiness."
            },
            {
              label: "Outcome:",
              text: "Ensure goods are delivered to the company’s warehouse on time and in compliance with regulations."
            }
          ]
        }
      ]
    },
    standardProcess: {
      description: "",
      images: [
        {
          title: "Inbound Control: ",
          imagePath:
            "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763726632/inbound_control_shipment_tracking_jjs9g3.png"
        },
        // {
        //   title: "Istar:",
        //   imagePath:
        //     "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763726626/inbound_control_Istar_acqwcc.png"
        // },
        {
          title:
            "Inbound Coordination: The goods receipt process is divided into a process where WH have access to the system and where WH do not have access to the system.",
          imagePath:
            "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763726627/inbound_control_GR_Process_oy4j13.png"
        }
      ]
    },
    relatedLinks: [
      {
        href: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1764651011/OSD6AP2-13-02_iSTAR_Process.pdf",
        linkText: "OSD6AP2-13-02 iStar Process",
        details: "iStar Process documentation"
      },
      {
        href: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1764649414/OSD6AP2-13-02-01_MA_ISTAR_Process.pdf",
        linkText: "OSD6AP2-13-02-01 MA ISTAR Process",
        details: "MA ISTAR Process"
      },
      {
        href: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1764649413/OSD6AP2-13-02-02_PSLOP_ISTAR.pdf",
        linkText: "OSD6AP2-13-02-02 PSLOP_ISTAR",
        details: "PSLOP ISTAR documentation"
      },
      {
        href: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1764649412/OSD6AP2-13-03-01_Manual__ISTAR_Creation_Process_For_JP.pdf",
        linkText: "OSD6AP2-13-03-01 (Manual) ISTAR Creation for JP",
        details: "Manual ISTAR Creation for JP"
      },
      {
        href: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1764649410/OSD6AP2-13-3_iSTAR_WI_for_NonJP_MA_voaxvf.pdf",
        linkText: "OSD6AP2-13-03-02 ISTAR WI for NonJP (MA)",
        details: "ISTAR WI for NonJP MA"
      },
      {
        href: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1764649407/OSD6AP2-15_Shipment_Tracking_and_Monitoring_Procedure.pdf",
        linkText: "OSD6AP2-15 Shipment Tracking and Monitoring Procedure",
        details: "Shipment Tracking and Monitoring Procedure"
      },
      {
        href: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1764650802/OSD6AP2-17_Good_Receipt_Coordination_Procedure.pdf",
        linkText: "OSD6-AP2-17 Good Receipt Coordination Procedure",
        details: "Good Receipt Coordination Procedure"
      },
      {
        href: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1764649408/OSD6AP2-17-01-01-Goods_Receipt_Tracking_File.pdf",
        linkText: "OSD6AP2-17-01-01 Goods Receipt Tracking File",
        details: "Goods Receipt Tracking File"
      },
      {
        href: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1764650802/OSD6AP2-17-01-02-Delivery_Notice_To_Warehouse_Template_SEA.pdf",
        linkText:
          "OSD6AP2-17-01-02 Delivery Notice to Warehouse Template (SEA)",
        details: "Delivery Notice to Warehouse Template SEA"
      },
      {
        href: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1764649406/OSD6AP2-17-01-03-Delivery_Notice_To_Warehouse_Template_AIR_COURIER.pdf",
        linkText:
          "OSD6AP2-17-01-03 Delivery Notice To Warehouse Template (AIR&COURIER)",
        details: "Delivery Notice To Warehouse Template AIR and COURIER"
      }
    ]
  },
  {
    slug: "master-data",
    title: "Master Data",
    hero: {
      paragraph:
        "The Master Data function is the central governance discipline responsible for defining and maintaining all foundational data elements of a material.",
      customers: "MA",
      headcount: "2"
      // functions: "4"
    },
    overview: {
      description:
        "This process focuses on maintaining all critical, transactional parameters necessary to define and use materials correctly across the entire supply chain and enterprise system landscape.",
      sections: [
        {
          items: [
            {
              label: "Core Responsibility:",
              text: " Manage the complete lifecycle of Material Master Data records, including creation, classification, extension to new plant/storage locations, and retirement. Ensure accurate definition and configuration of key parameters."
            },
            {
              label: "Outcome:",
              text: "Maintains an accurate source of information on all materials. Enabling the process of planning, selling, and buying."
            }
          ]
        }
      ]
    },
    standardProcess: {
      description:
        "The following process map visually outlines the essential steps in maintain material master data.",
      images: [
        {
          imagePath:
            "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763726627/Standard_Process_Master_Data_wwycld.png"
        }
      ]
    },
    relatedLinks: [
      // {
      //   href: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763735212/MA_IB_New_vendor_setup_gvr6pd.pdf",
      //   linkText: "Vendor Connection Set-up",
      //   details: "New Vendor Connection Set-up WI"
      // },
      // {
      //   href: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763735212/MA_IB_Manual_Master_Data_Maintenance_fqchly.pdf",
      //   linkText: "Manual Master Data Maintenance",
      //   details: "Manual Master Data Maintenance WI"
      // },
      // {
      //   href: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763735213/MA_IB_Source_Creation_for_source_change_stock_transfer_process_p5yjs3.pdf",
      //   linkText: "Source Creation",
      //   details: "Source creation for Source Change & Stock Transfer Process WI"
      // },
      // {
      //   href: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763735213/MA_IB_Master_data_housekeeping_for_new_release_PN_yflmop.pdf",
      //   linkText: "Master Data Housekeeping",
      //   details: "Master data housekeeping for new release PN"
      // },
      // {
      //   href: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763735212/Inventory_Management_Stocking_Policy_srhrps.pdf",
      //   linkText: "Stocking Policy",
      //   details: "Inventory Management Stocking Policy WI"
      // },
      {
        href: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1764649515/OSD6AP2-11_Internal_Audit_Procedure.pdf",
        linkText: "OSD6AP2-11_Internal_Audit_Procedure",
        details: "Internal Audit Procedure"
      },
      {
        href: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1764655623/OSD6AP2-12_Material_Master_Data_Management_Procedure.pdf",
        linkText: "OSD6AP2-12_Material_Master_Data_Management_Procedure",
        details: "Material Master Data Management Procedure"
      },
      {
        href: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1764649514/OSD6AP2-12-01-01_New_vendor_connection_setup.pdf",
        linkText: "OSD6AP2-12-01-01_New_vendor_connection_setup",
        details: "New vendor connection setup"
      },
      {
        href: "https://bosch.sharepoint.com/:x:/r/sites/msteams_7348963/_layouts/15/Doc.aspx?sourcedoc=%7BBADE1AB1-337C-491C-8A17-60ABBF44083E%7D&file=OSD6AP2-12-02-01_BOD%20Matrix.xlsx&action=default&mobileredirect=true)&isSPOFile=1&xsdata=MDV8MDJ8fDhjZjFmOGMyYThiZjRiNWQwNWQ4MDhkZTMwYjg2MTRlfDBhZTUxZTE5MDdjODRlNGJiYjZkNjQ4ZWU1ODQxMGY0fDB8MHw2MzkwMDE3NjU1OTc4MDgwODh8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKRFFTSTZJbFJsWVcxelgwRlVVRk5sY25acFkyVmZVMUJQVEU5R0lpd2lWaUk2SWpBdU1DNHdNREF3SWl3aVVDSTZJbGRwYmpNeUlpd2lRVTRpT2lKUGRHaGxjaUlzSWxkVUlqb3hNWDA9fDF8TDJOb1lYUnpMekU1T2pRNU0ySmpaVFEzTFdOa1lqVXRORFEwWWkwNVkySXhMV1kzTVdRNU1ESXlZMlF4TTE5bFl6RXpaREZtWkMxaU5XTm1MVFF5TVRrdE9UUTFZUzFtWkRsbE1HVmlaRGd6WW1OQWRXNXhMbWRpYkM1emNHRmpaWE12YldWemMyRm5aWE12TVRjMk5EVTNPVGMxTnpVeE5RPT18ZmRkNzhmMDMyMTk0NDc2YTkzNTYwOGRlMzBiODYxNGR8MDIxMmU3NmQxOGQ1NGY3Yzg3MGQ1ZjljMDE1Zjc5OGI%3D&sdata=V1pwcHJzS1dyTjY0c0FSTXcxbjlZVG51THd6VEdGTk1lWnBTNWNPSEpnRT0%3D&ovuser=0ae51e19-07c8-4e4b-bb6d-648ee58410f4%2Cpga7hc%40bosch.com",
        linkText: "OSD6AP2-12-02-01_BOD Matrix",
        details: "Excel link document"
      },
      {
        href: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1764649511/OSD6APC-12-02-02_Source_Creation_for_source_change_stock_transfer_process.pdf",
        linkText: "OSD6AP2-12-02-02_Source_Creation",
        details: "Source Creation"
      },
      {
        href: "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1764649510/OSD6APC-12-02-03_Master_data_housekeeping_for_new_release_PN.pdf",
        linkText:
          "OSD6AP2-12-02-03_Master_data_housekeeping_for_new_release_PN",
        details: "Master data housekeeping for new release PN"
      }
    ]
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    hero: {
      paragraph:
        "The Data Analytics service focuses on transforming vast streams of supply chain data into comprehensive overview and actionable insights. The service encompasses full-stack development process of supply chain digital tools: from business analysis to frontend/backend development of advanced analytics and reporting functionalities. Key products include the Bottleneck Prevention (Shortage & Overstock) dashboard, designed to proactively identify, quantify, alert, and make automated decisions to address material shortage/overstock risks.",
      customers: "PSD63 ",
      headcount: "3"
      // functions: "2"
    },
    overview: {
      description:
        "This function focuses on systematic approaches to build reliable, useful data pipelines and analytics products to support efficiency and effectiveness in inbound management processes.",
      sections: [
        {
          title: "Core Responsibilities:  ",
          content: " ",
          items: [
            {
              label: "Business analysis:",
              text: "Identify pain points based on a deep understanding of inbound management processes. This is where the OSD6 hands-on experience doing remote logistics planning and operations management for Bosch entities in APAC/EU region shines: from initial business problems/ideas to the learning feedback loops to develop tools with high UX value."
            },
            {
              label: "Technical translation:",
              text: "Translate the real-world business needs and customer expectations to technical requirements so that IT developers and machines can understand."
            },
            {
              label: "Product/Project management:",
              text: "Work in a close loop with customers and developers to ensure project delivery in a timely manner within the given resource boundaries."
            },
            {
              label: "Frontend/Backend Development:",
              text: "In-house IT developers working closely with domain experts to realize the IT solution needed by the customers/business."
            },
            {
              label: "QA testing/User testing:",
              text: "Assure the final solution complies to the requirements and actually solves the business problems via internal team testing as well as frequent feedback exchange with users/customers."
            }
          ]
        },
        {
          title: "Outcomes:",
          items: [
            {
              text: "Reliable, accurate, and useful supply chain digital tools that can be used by global users."
            }
          ]
        }
      ]
    },
    standardProcess: {
      description:
        "The following process map shows the analytics workflow, from data collection and processing to insights generation and action planning.",
      images: [
        {
          imagePath:
            "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763726629/DA_Standard_Process_mormti.jpg"
        }
      ]
    },
    relatedLinks: [
      {
        href: "https://digilink.app.bosch.com/",
        linkText: "Shortage Prevention",
        details:
          "Simulates inventory to flag risks when supply fails to cover demand."
      },
      {
        href: "https://app.visily.ai/projects/742dcd3d-40e4-46cb-b8fe-59a47dc7d7b4/boards/1560967",
        linkText: "Overstock Prevention",
        details:
          "Proactively identifies stock exceeding demand and other material risks."
      }
    ]
  },
  {
    slug: "logistics-projects",
    title: "Logistics Projects",
    hero: {
      paragraph:
        "The Logistics Projects service provides specialized consulting and project management expertise tailored to optimize complex supply chain operations. This service currently centers on the Kinaxis Implementation Project, which ensures a functional adoption of the Kinaxis platform.",
      customers: "BBM",
      headcount: "2"
      // functions: "2"
    },
    overview: {
      description:
        "This process focuses on providing dedicated consulting support and oversight necessary to successfully implement and integrate the Kinaxis planning platform across relevant logistics and supply chain functions.",
      sections: [
        {
          title: "Core Responsibilities:",
          items: [
            {
              label: "Project Governance & Alignment:",
              text: "Guide the implementation lifecycle, ensuring all project phases (design, configuration, testing, and deployment) align with defined business requirements and strategic logistics objectives."
            },
            {
              label: "System Design & Process Mapping:",
              text: "Serve as the liaison between technical implementers and logistics end-users, translating complex operational processes into functional Kinaxis workflows and configurations."
            },
            {
              label: " Solution Validation & Testing:",
              text: "Develop and execute comprehensive test plans for Kinaxis modules, verifying that the configured solution accurately models and optimizes key logistics scenarios (e.g., demand sensing, inventory optimization)."
            },
            {
              label: "Change Management & Training:",
              text: "Facilitate the transition to the new planning system by supporting the development of training materials and providing expert guidance to users adopting the Kinaxis platform. "
            }
          ]
        },
        {
          title: "Outcome",
          content:
            "Support in establishing a unified high-performing planning environment powered by Kinaxis. Enabling supply chain planning with improved forecast accuracy, end-to-end visibility and responsiveness.",
          items: []
        }
      ]
    },
    standardProcess: {
      description: "This is our team structure for the Kinaxis project. ",
      images: [
        {
          imagePath:
            "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763726633/Log_Proj_standard_process_femkuo.jpg"
        },
        {
          title:
            "In regards to the Kinaxis project, here is the future we envisioned of BBM with Kinaxis.",
          imagePath:
            "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763726635/Log_Proj_System_vqovru.jpg"
        }
      ]
    }
  }
]

const Activities: ActivityData[] = [
  {
    slug: "TransPlan-Hub-Experience-Day",
    title: "TransPlan Hub Experience Day ",
    date: "October 15, 2024",
    author: "Pham Hong Ngoc ",
    mainImages: [
      "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763626715/TransPlan_1_fkg3hn.jpg",
      "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763716245/TransPlan_5_rzibjj.jpg"
    ],
    mainImageCaption: "TransPlan Hub Experience Day Images",
    content: [
      "On September 9th, 2025, our department has hosted an experience day, where we showcased our services to other departments in RBVN. As the event ends with a lasting impression, a big appreciation goes to GEM team for organizing this event, our amazing moderator – Ryan, and all our speakers who were excellent in explaining our services to a non-logistics audience – anh Phương, anh Huy, chị Sanny, anh Lộc, anh Đạt, anh Minh, chị Thương, chị Trân, chị Bình, anh Hậu, and chị Giang."
    ],
    galleryImages: [
      "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763716232/TransPlan4_edqjfw.jpg",
      "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763716235/TransPlan2_wralyf.jpg",
      "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763716247/TransPlan3_fwfjgj.jpg"
    ]
  },
  {
    slug: "Welcome-MA-LO-Visit",
    title: "Welcome MA/LO Visit",
    date: "October 15, 2024",
    author: "Pham Hong Ngoc ",
    mainImages: [
      "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763569581/MALO_Visit_cbpmoe.png"
    ],
    mainImageCaption: " MA/LO Visit",
    content: [
      "On September 4th – 5th, 2025, Philipp and Matthias have visited our team with a presentation that aimed to appreciate and ignite us with the mindset of building a #promisechain.In contrast to the old supply chain of storing goods and selling them to customer, this #promisechain is a circular loop that include planned promises being translated into full deliveries, going full circle back to the customer.Being a customer- forward model, many achievements have been made, across customer satisfaction, inventory, stock availability, and forecast accuracy.",
      "Looking into the future, Matthias has mentioned the upcoming pivot from internal improvements, to strengthening external relations.To understand more about the concept of #PromiseChain please click here."
    ]
  },
  {
    slug: "Digi-awareness-Session-4",
    title: "Digi-awareness Session#4 ",
    date: "July 18th, 2025",
    author: "Pham Hong Ngoc ",
    mainImages: [
      "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763716736/Digiawarness2_s0miw0.jpg",
      "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763716734/Digiawareness_1_u2mwgd.jpg"
    ],
    mainImageCaption: "Session Images",
    content: [
      "On the July 18th, 2025, we had our 4th Digi-awareness session, learning about the different tips & tricks of SAP. Starting from the logon and home screen, we can add our favorite system / t-codes to top section, create folders to help us with navigation, change languages, and save these settings as a file for later uploads. Then, navigating from our home screen to each t-codes, some shortcuts can be used to open new ones / new windows, and close the current one even while running. Inside our t-codes, further personalization can be carried out with creating & saving variants, creating & saving layouts, and filtering & sorting tables before downloading as an excel file.",
      "As this session brings us a step closer to the last UXcellent session of the year, we hope that everyone will continue to keep up this professional positive energy, and finish the year strong with a new level in UX maturity."
    ]
  },
  {
    slug: "Custom-Procedure-Workshop",
    title: "Custom Procedure Workshop   ",
    date: "July 18th, 2025",
    author: "Pham Hong Ngoc ",
    mainImages: [
      "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763716678/customs_1_yfzl5q.jpg"
    ],
    mainImageCaption: "Workshop Images",
    content: [
      "Following the transportation of goods, on May 30th, anh Lộc and Ngoc have shared about the custom procedure when importing / exporting goods. Starting with the HS Code, we must remember its format of 6 international standard codes with 2-4 country-specific numbers. Then, determining the specific code with the 6 GRIs (general rules of interpretation), we must rely on GRI 5 for all packaging – except for transportation.",
      "With the code now defined, declaring its customs value depends on our transaction values plus all payables before destination port, minus all costs beyond this point. However, as transaction values can be manipulated, 5 other methods are used in its stead, depending on certain situations.",
      "Finally, with our HS code and Customs value now ready to be written into the declaration form, we then go to the steps of calculating taxes, applying 4 main types: tariffs, VAT, SCT, and EPT. Fortunately, specifically for tariffs, this tax is reducible with MFN and FTA – through the utilization of C/O (country of origin). To decide whether our shipment is eligible, however, we must rely on these 4 rules: wholly obtained, change in tariff classification, regional value content, and specific process rule."
    ]
  },
  {
    slug: "UXcellent-Session-From-Pain-Points-to-Possibilities",
    title: "UXcellent Session #2: From Pain Points to Possibilities ",
    date: "July 18th, 2025",
    author: "Pham Hong Ngoc ",
    mainImages: [
      "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763569421/UXcellent1_lfup0h.jpg"
    ],
    mainImageCaption: "UXcellent Session #2 Images",
    content: [
      "This year, to refresh everyone’s UX mindset and improve our UX maturity level, on June 19th, our UXcellent session 2 focuses on solving the case study of improving a dashboard according to the collected user feedback. Utilizing the tools of customer journey mapping and a persona map, 4 teams have re-designed their dashboard according to the respective understanding of the users need, presenting 4 different views of the same case study.",
      "As this session brings us a step closer to the last UXcellent session of the year, we hope that everyone will continue to keep up this professional positive energy, and finish the year strong with a new level in UX maturity."
    ],
    galleryImages: [
      "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763715676/Uxcellent_2_lppsrr.jpg"
    ]
  },
  {
    slug: "Introduction-from-GS-PSD6-DA",
    title: "Introduction from GS/PSD6-DA  ",
    date: "July 18th, 2025",
    author: "Pham Hong Ngoc ",
    mainImages: [
      "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763716253/PSD6_1_nelsba.jpg",
      "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763716251/PSD6_2_fe6kde.jpg"
    ],
    mainImageCaption: "GS-PSD6-DA Team Image",
    content: [
      "On May 15th – 16th, our office has welcome 3 guests from GS/PSD6-DA: Kobold Miriam, Zhao Sylvia, and Xia Ningning. With an introductory session on their second day, the team got to know more about the full inbound cockpit project and the team members of the PSD6-DA team.",
      "With the cockpit now live, the chatbot is expected to be release soon with abilities in calculating numbers, and drawing quick charts – hence, answering our questions without having to export data onto excel. "
    ]
  }
]

const Mock = {
  Activities,
  Services
}
export default Mock
