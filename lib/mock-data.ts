import { ActivityData } from "@/app/our-activities/[slug]/page";
import { SolutionProps } from "@/app/service-portfolio/page"
import { StoryProps } from "@/components/story-card/story-card"


const Activities: ActivityData[] = [
  {
    slug: "TransPlan-Hub-Experience-Day",
    title: "TransPlan Hub Experience Day ",
    date: "October 15, 2024",
    author: "Pham Hong Ngoc ",
    mainImages: [
      "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763569492/TransPlan_1_fkg3hn.jpg"
    ],
    mainImageCaption: "UXcellent1",
    content: [
      "On September 9th, 2025, our department has hosted an experience day, where we showcased our services to other departments in RBVN. As the event ends with a lasting impression, a big appreciation goes to GEM team for organizing this event, our amazing moderator – Ryan, and all our speakers who were excellent in explaining our services to a non-logistics audience – anh Phương, anh Huy, chị Sanny, anh Lộc, anh Đạt, anh Minh, chị Thương, chị Trân, chị Bình, anh Hậu, and chị Giang."
    ]
    // galleryImages: [
    //     '/images/UXcellent1.jpeg',
    //     '/images/UXcellent1.jpeg',
    //     '/images/UXcellent1.jpeg',
    //     '/images/UXcellent1.jpeg',
    // ],
  },
  {
    slug: "Welcome-MA-LO-Visit",
    title: "Welcome MA/LO Visit",
    date: "October 15, 2024",
    author: "Pham Hong Ngoc ",
    mainImages: [
      "https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763569581/MALO_Visit_cbpmoe.png"
    ],
    mainImageCaption: "UXcellent1",
    content: [
      "On September 4th – 5th, 2025, Philipp and Matthias have visited our team with a presentation that aimed to appreciate and ignite us with the mindset of building a #promisechain.In contrast to the old supply chain of storing goods and selling them to customer, this #promisechain is a circular loop that include planned promises being translated into full deliveries, going full circle back to the customer.Being a customer- forward model, many achievements have been made, across customer satisfaction, inventory, stock availability, and forecast accuracy.",
      "Looking into the future, Matthias has mentioned the upcoming pivot from internal improvements, to strengthening external relations.To understand more about the concept of #PromiseChain please click here."
    ]
    // galleryImages: [
    //     '/images/UXcellent1.jpeg',
    //     '/images/UXcellent1.jpeg',
    //     '/images/UXcellent1.jpeg',
    //     '/images/UXcellent1.jpeg',
    // ],
  },
  {
    slug: "Digi-awareness-Session-4",
    title: "Digi-awareness Session#4 ",
    date: "July 18th, 2025",
    author: "Pham Hong Ngoc ",
    mainImages: ["https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763569421/UXcellent1_lfup0h.jpg"],
    mainImageCaption: "UXcellent1",
    content: [
      "On the July 18th, 2025, we had our 4th Digi-awareness session, learning about the different tips & tricks of SAP. Starting from the logon and home screen, we can add our favorite system / t-codes to top section, create folders to help us with navigation, change languages, and save these settings as a file for later uploads. Then, navigating from our home screen to each t-codes, some shortcuts can be used to open new ones / new windows, and close the current one even while running. Inside our t-codes, further personalization can be carried out with creating & saving variants, creating & saving layouts, and filtering & sorting tables before downloading as an excel file.",
      "As this session brings us a step closer to the last UXcellent session of the year, we hope that everyone will continue to keep up this professional positive energy, and finish the year strong with a new level in UX maturity."
    ]
    // galleryImages: [
    //     '/images/UXcellent1.jpeg',
    //     '/images/UXcellent1.jpeg',
    //     '/images/UXcellent1.jpeg',
    //     '/images/UXcellent1.jpeg',
    // ],
  },
  {
    slug: "Custom-Procedure-Workshop",
    title: "Custom Procedure Workshop   ",
    date: "July 18th, 2025",
    author: "Pham Hong Ngoc ",
    mainImages: ["https://res.cloudinary.com/dr9bxbmwi/image/upload/v1763569421/UXcellent1_lfup0h.jpg"],
    mainImageCaption: "UXcellent1",
    content: [
      "Following the transportation of goods, on May 30th, anh Lộc and Ngoc have shared about the custom procedure when importing / exporting goods. Starting with the HS Code, we must remember its format of 6 international standard codes with 2-4 country-specific numbers. Then, determining the specific code with the 6 GRIs (general rules of interpretation), we must rely on GRI 5 for all packaging – except for transportation.",
      "With the code now defined, declaring its customs value depends on our transaction values plus all payables before destination port, minus all costs beyond this point. However, as transaction values can be manipulated, 5 other methods are used in its stead, depending on certain situations.",
      "Finally, with our HS code and Customs value now ready to be written into the declaration form, we then go to the steps of calculating taxes, applying 4 main types: tariffs, VAT, SCT, and EPT. Fortunately, specifically for tariffs, this tax is reducible with MFN and FTA – through the utilization of C/O (country of origin). To decide whether our shipment is eligible, however, we must rely on these 4 rules: wholly obtained, change in tariff classification, regional value content, and specific process rule."
    ]
    // galleryImages: [
    //     '/images/UXcellent1.jpeg',
    //     '/images/UXcellent1.jpeg',
    //     '/images/UXcellent1.jpeg',
    //     '/images/UXcellent1.jpeg',
    // ],
  }
]

const Mock = {
  Activities
}
export default Mock
