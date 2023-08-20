
import Ikooru1 from "../public/project-images/ikooru-1.PNG";
import Ikooru2 from "../public/project-images/ikooru-2.PNG";
import Ikooru3 from "../public/project-images/ikooru-3.PNG";
import Ikooru4 from "../public/project-images/ikooru-4.PNG";
import Ikooru5 from "../public/project-images/ikooru-5.PNG";
import GoMonday1 from "../public/project-images/gomonday-1.PNG";
import GoMonday2 from "../public/project-images/gomonday-2.PNG";
import GoMonday3 from "../public/project-images/gomonday-3.PNG";
import Curacut1 from "../public/project-images/curacut-1.PNG";
import Curacut2 from "../public/project-images/curacut-2.PNG";
import Curacut3 from "../public/project-images/curacut-3.PNG";
import Curacut4 from "../public/project-images/curacut-3.PNG";

export const links = {
  github: "https://github.com/touseef-haider",
  twitter: "https://twitter.com/TOUSEEF358",
  linkedIn: "https://www.linkedin.com/in/touseef-haider-5796231a4/",
  facebook: "https://www.facebook.com/touseef.haider.75457/",
};

export const floatingText = [
  "Software Engineer",
  "Full Stack Engineer",
  "Freelancer",
  "Mixed Martial Artist",
];

export const personalInfo = {
  // About Page Data
  name: "Touseef Haider",
  aboutInto: `I am  an accomplished software engineer with 2.5 years of experience, specializing in full stack development. my expertise spans JavaScript, Golang, Python, React, Next.js, Node.js, and PostgreSQL. my proficiency extends to technologies like MongoDB, AWS, Docker, and NGINX, showcasing my adaptability. I graduated in 2022 with 3 CGPA, reflecting my commitment to growth. my proactive approach, collaborative nature, and continuous learning make me an asset in delivering high-quality software solutions.`,
  profession: "Software Engineer.",
  professionIntro: `A software engineer with 2.5 years of experience in the dynamic domain of full stack development, my journey commenced in 2019. Immersed in various facets of software engineering,`,
  birthDay: "17 Jan,1998",
  majorDegree: "Bachelors in Computer Science",
  phone: "+92 331-2924590",
  email: "touseefhaider358@gmail.com",
  city: "Karachi, Pakistan",
  isFreelanceAvailable: "Available",
  generalIntro:
    "I have cultivated a strong foundation of expertise and a fervor for crafting efficient solutions. Graduating in 2022 marked a significant milestone, underlining a commitment to continuous growth and excellence. Characterized by a proactive mindset, adaptability, and a collaborative spirit, the focus remains on pushing the boundaries of innovation and creating impactful digital experiences.",
  address: "R-118, Abdullah Shah Ghazi Villages, Scheme 33, Karachi, Sindh, Pakistan",
  footerIntro:
    "Committed to code",
};

export const facts = {
  clients: 11,
  projectsCompleted: 23,
  supportHours: "24/7",
  awards: 4,
  get intro() {
    return `Numbers tell my story: ${this.clients} clients served, ${this.projectsCompleted} projects accomplished, ${this.supportHours} support hours given, and ${this.awards} awards earned – each digit a testament to my journey's dedication and impact.`;
  },
};

export const portfolio = {
  intro: `Discover the culmination of my software engineering journey through a curated selection of projects. Delve into the intricate fusion of frontend finesse and backend functionality, each exemplifying my dedication to crafting dynamic digital solutions. Explore the diverse challenges I've embraced and the innovative strategies I've employed to deliver tangible results.`
}

export const slider = [
  {
    image: "https://picsum.photos/600/300?random=1",
    clientName: "Tanveer Haider",
    role: "Ceo Co-founder (GYM Karo)",
    review: `Touseef's frontend expertise brought our project to life. His designs captured the essence of our brand, and his attention to detail ensured a flawless user experience. His ability to adapt to our evolving requirements made collaboration a breeze.`,
  },
  {
    image: "https://picsum.photos/600/300?random=2",
    clientName: "Ateeq Haider",
    role: "Artist & Designer",
    review: `Impressed by Touseef's backend proficiency! His architecture laid the groundwork for our application's success. The robust APIs and databases he crafted seamlessly handle our data needs. His dedication to security and staying current with trends made him an invaluable asset.`,
  },
  {
    image: "https://picsum.photos/600/300?random=3",
    clientName: "Ateeq Haider",
    role: "Artist & Designer",
    review: `Working with Touseef was a pleasure. His frontend skills turned our vision into reality. The user interfaces he designed were not only visually appealing but also highly functional. His commitment to deadlines and clear communication made the entire process smooth.`,
  },
];

export const skills = {
  intro: `My skillset forms the cornerstone of innovation in the software landscape. Proficient in a spectrum of technologies, I weave them harmoniously to craft seamless digital experiences. From empowering dynamic frontend interactions to architecting robust backend systems, my skills converge to drive impactful solutions that transcend conventional boundaries.`,
  majorSkills: [
    {
      skill: "HTML",
      percentage: 100,
    },
    {
      skill: "CSS",
      percentage: 90,
    },
    {
      skill: "Javascript",
      percentage: 80,
    },
    {
      skill: "React",
      percentage: 80,
    },
    {
      skill: "NextJs",
      percentage: 80,
    },
    {
      skill: "NestJs",
      percentage: 90,
    },
    {
      skill: "MongoDB",
      percentage: 90,
    },
    {
      skill: "PostgresQL",
      percentage: 90,
    },
    {
      skill: "Golang (Learning)",
      percentage: 60,
    },
    {
      skill: "Docker",
      percentage: 100,
    },
    {
      skill: "Kubernetes",
      percentage: 70,
    },
    {
      skill: "Git (version control)",
      percentage: 95,
    },
    {
      skill: "AWS",
      percentage: 40,
    },
    {
      skill: "Firebase",
      percentage: 40,
    },
  ],
};

export const portfolioTabs = [
  {
    item: "ALL",
    index: 1,
    cards: [
      {
        image: Ikooru1,
        title: "ALL",
        name: "Ikooru"
      },
      {
        image: Ikooru2,
        title: "ALL",
        name: "Ikooru"

      },
      {
        image: Ikooru3,
        title: "ALL",
        name: "Ikooru"

      },
      {
        image: Ikooru4,
        title: "ALL",
        name: "Ikooru"

      },
      {
        image: Ikooru5,
        title: "ALL",
        name: "Ikooru"

      },
      {
        image: Curacut1,
        title: "ALL",
        name: "Curacut"

      },
      {
        image: Curacut2,
        title: "ALL",
        name: "Curacut"

      },
      {
        image: Curacut3,
        title: "ALL",
        name: "Curacut"

      },
      {
        image: Curacut4,
        title: "ALL",
        name: "Curacut"

      },
      {
        image: GoMonday1,
        title: "ALL",
        name: "Go Monday"

      },
      {
        image: GoMonday2,
        title: "ALL",
        name: "Go Monday"

      },
      {
        image: GoMonday3,
        title: "ALL",
        name: "Go Monday"

      },
    ],
  },
  // {
  //   item: "WEB",
  //   index: 2,
  //   cards: [
  //     {
  //       image: Ikooru1,
  //       title: "WEB",
  //       name: "Ikooru"

  //     },
  //     {
  //       image: Ikooru2,
  //       title: "WEB",
  //       name: "Ikooru"

  //     },
  //     {
  //       image: Ikooru3,
  //       title: "WEB",
  //       name: "Ikooru"

  //     },
  //     {
  //       image: GoMonday1,
  //       title: "ALL",
  //       name: "Go Monday"

  //     },
  //     {
  //       image: GoMonday2,
  //       title: "ALL",
  //       name: "Go Monday"

  //     },
  //     {
  //       image: GoMonday3,
  //       title: "ALL",
  //       name: "Go Monday"

  //     },
  //   ],
  // },
  // {
  //   item: "APP",
  //   index: 3,
  //   cards: [
  //     {
  //       image: "https://picsum.photos/500/500?random=8",
  //       title: "APP",
  //     },
  //     {
  //       image: "https://picsum.photos/500/500?random=9",
  //       title: "APP",
  //     },
  //     {
  //       image: "https://picsum.photos/500/500?random=10",
  //       title: "APP",
  //     },
  //   ],
  // },
];

export const services = {
  intro: `As a dedicated software engineer, I offer specialized services in both frontend and backend development. By combining a user-focused approach to frontend design with the technical intricacies of backend systems, I strive to create seamless and impactful digital experiences. With a commitment to continuous learning and a collaborative mindset, I bring a comprehensive perspective to every project, working to deliver effective solutions that resonate with users.`,

  servicesGiven: [
    {
      serviceName: "Frontend Development",
      details: [
        `In frontend development, I specialize in crafting captivating user interfaces with expertise in HTML, CSS, Antd, Material UI, styled-components, JavaScript, React, Nextjs, and Gatsby. I design responsive web applications that prioritize user experience, harmonizing layout and interaction for seamless journeys. With attention to detail and a pulse on design trends, I transform concepts into visually appealing, user-centric solutions.`
      ],
    },
    {
      serviceName: "Backend Development",
      details: [
        `In backend development, I excel in crafting robust foundations for dynamic web apps using Node.js, Golang, and Python. I design efficient APIs and databases for seamless data processing and prioritize security and scalability. Adhering to best practices and staying current with tech, I build reliable, adaptable backend systems that seamlessly integrate APIs and third-party services for peak performance`
      ],
    },
  ],
};

export const resume = {
  intro: `My resumé reflects a journey of growth, experience, and accomplishments. With 2.5 years in software engineering, I've contributed to diverse projects and harnessed skills across the tech spectrum. From collaborating with clients to crafting efficient solutions, my resumé echoes dedication, versatility, and a track record of delivering high-quality results. Explore a snapshot of my professional evolution, underscoring my commitment to excellence and innovation`,
  summary: {
    title: "Summary",
    name: personalInfo.name,
    basicIntro: `A versatile skillset spanning frontend, backend, and cloud technologies, and a commitment to innovation, I am poised to create impactful digital solutions that drive results and exceed expectation`,
  },
  education: [
    {
      course: personalInfo.majorDegree,
      duration: "2018 - 2022",
      institute: "University Of Karachi",
      detail: `My academic journey culminated in a 4 degree earned in 2022. This milestone not only represents my dedication to learning but also underscores my foundation in Computer Science. Equipped with theoretical insights and practical skills, this degree empowers me to approach software engineering with a holistic perspective, enhancing my ability to create effective, innovative solutions`,
    },
    {
      course: "Intermediate from Karachi Board",
      duration: "2016 - 2018",
      institute: "Govt. National College, Karachi, Sindh",
      detail: `My college education was a vital phase where I immersed myself in the world of pre-engineering. During this time, I honed my analytical thinking, problem-solving abilities, and foundational understanding of engineering principles. These years laid the groundwork for my future pursuits, sparking my enduring passion for crafting innovative solutions that bridge technology and creativity.`,
    },
    {
      course: "Matriculation from Karachi Board",
      duration: "2014 - 2016",
      institute: "NDDS. School Safoora, Karachi, Sindh",
      detail: `My school years were a time of discovery and wonder, where the seeds of curiosity and a love for learning were planted. It was during these formative years that I began cultivating the fundamentals of knowledge, communication, and teamwork. These early experiences ignited a lifelong journey of exploration, setting the stage for my ongoing pursuit of excellence in the field of software engineering."`,
    },
  ],
  experience: [
    {
      jobTitle: "Software Engineer",
      duration: "2021 - present",
      company: "Kodexo Labs,Nazimabad 4, Karachi, Sindh",
      responsibilities: [
        `Within my role as an Engineer at Kodexo Labs, I navigate the frontier of innovation. My responsibilities encompass steering intricate projects, providing strategic vision, and nurturing a dynamic team. By fostering collaboration and leveraging technical expertise, I ensure the creation of exceptional solutions that consistently surpass client expectations. This leadership position not only sharpens my engineering skills but also underscores my unwavering commitment to driving technological excellence`,
        `Spearheading innovation and project execution as an Engineer, providing strategic direction and mentorship to a dynamic team.`,
        `Architecting and overseeing the development of cutting-edge software solutions, harnessing a diverse tech stack that includes JavaScript, Golang, Python, and more, to address complex client requirements.`,
        `Streamlining processes through the implementation of advanced technologies like AWS, Google Cloud , Docker, NGINX, and cloud services, optimizing system performance and enhancing scalability across projects`
      ],
    },
    {
      jobTitle: "Software Engineer",
      duration: "2020 - 2021",
      company: "Vamonos.pk (Remote), Karachi, Sindh",
      responsibilities: [
        `Collaborated with cross-functional teams to develop and maintain responsive web applications using JavaScript, React, and Next.js, effectively enhancing user experience and engagement`,
        `Gained hands-on experience in backend development with Node.js and Mongodb/Postgresql, contributing to the creation of robust APIs and efficient data management solutions.`,
        `Played an integral role in the adoption of containerization using Docker, streamlining deployment processes and bolstering application scalability on AWS EBS`
      ],
    },
    {
      jobTitle: "Internee",
      duration: "2020-2021",
      company: "Truly Future Pvt ltd, Karachi, Sindh",
      responsibilities: [
        `Assisted in the development and testing of software applications, gaining practical exposure to languages such as JavaScript and Goland, while contributing to the optimization of codebase efficiency.`,
        `Collaborated within a diverse team to troubleshoot issues and enhance the functionality of web applications, learning to navigate version control systems like Git for seamless code management.`,
        `Participated in the deployment process of applications on cloud platforms, acquiring fundamental skills in utilizing cloud services and understanding the significance of scalability and reliability in modern software architecture.`
      ]
    }
  ],
};
