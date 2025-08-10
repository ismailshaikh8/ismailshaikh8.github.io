/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mohammed Ismail's Portfolio",
  description:
    "Passionate about helping organizations unlock the story behind complex data to make smarter, more informed decisions.",
  og: {
    title: "Mohammed Ismail Portfolio",
    type: "website",
    url: "https://ismailshaikh8.github.io/portfolio/",
  },
};

//Home Page
const greeting = {
  title: "Ismail Shaikh",
  logo_name: "Ismail Shaikh",
  nickname: "ismailshaikh8",
  subTitle:
    "Passionate about helping organizations unlock the story behind complex data to make smarter, more informed decisions.",
  resumeLink:
    "https://drive.google.com/file/d/1qgGqrOC-IWM2javysqliuHShJjvuwBR-/view?usp=sharing",
  portfolio_repository: "https://github.com/ismailshaikh8",
  githubProfile: "https://github.com/ismailshaikh8",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ismailshaikh8",
  // linkedin: "https://www.linkedin.com/in/ismail804/",
  // gmail: "shaikhmohammedismail08@gmail.com"

  {
    name: "Github",
    link: "https://github.com/ismailshaikh8",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ismail804/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:shaikhmohammedismail08@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Engineering & Architecture",
      fileName: "DataScienceImg",
      skills: [
        "⚡  Architecting efficient and scalable data pipelines that support complex business requirements.",
        "⚡ Ensuring data integrity and consistency through robust validation and cleansing processes.",
        "⚡ Skilled in data modeling, integration, and optimization for analytics and reporting.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "cib-mysql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "cib-postgresql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "cib-apache",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Oracle",
          fontAwesomeClassname: "cib-oracle",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Technologies",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience designing and managing scalable data pipelines on multiple cloud platforms.",
        "⚡ Building and maintaining data architectures, integrating diverse data sources for analytics.",
        "⚡ Implementing automated data ingestion, transformation, and storage for real-time and batch processing.",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/shaikhmohammedi1",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/ismailshaikh08",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Pace University, New York",
      subtitle: "M.S. in Information Systems",
      logo_path: "pace.png",
      alt_name: "Pace University",
      duration: "2020 - 2021",
      descriptions: [
        "⚡ Gained knowledge in designing, managing, and optimizing information systems to support business operations and decision-making.",
        "⚡ Studied database management, data warehousing, and data analytics techniques to extract insights and drive strategic business outcomes.",
        "⚡ Gained hands-on experience managing IT projects and understanding how to keep data and systems secure.",
      ],
      website_link: "https://www.pace.edu/",
    },
    {
      title: "Don Bosco Institute of Technology, Mumbai",
      subtitle: "B.E. in Computer Engineering",
      logo_path: "dbit4.png",
      alt_name: "Don Bosco Institute of Technology",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ Gained in-depth understanding of core computer engineering concepts including software development, algorithms, data structures, and system architecture.",
        "⚡ Completed hands-on projects and research work that strengthened problem-solving skills and applied theoretical knowledge to real-world engineering challenges.",
        "⚡ Worked closely with peers and faculty on innovative technologies, fostering teamwork, critical thinking, and continuous learning mindset.",
      ],
      website_link: "https://www.dbit.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Microsoft Certified: Azure Data Fundamentals",
      subtitle: "Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://learn.microsoft.com/api/credentials/share/en-us/MohammedIsmailShaikh-6797/9DEA7040D19C020D?sharingId=F6B9C4557A900015",
      alt_name: "Stanford University",
      color_code: "transparent",
    },
    {
      title: "Databricks Fundamentals",
      subtitle: "Databricks",
      logo_path: "databricks.png",
      certificate_link:
        "https://credentials.databricks.com/4f51946d-8e19-4339-a80f-f2c58fa38a1c#acc.GHfh2VNz",
      alt_name: "Databricks",
      color_code: "transparent",
    },
    {
      title: "HackerRank Certified: SQL",
      subtitle: "HackerRank",
      logo_path: "hr.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/iframe/6564c1661779",
      alt_name: "HackerRank",
      color_code: "transparent",
    },
    {
      title: "SQL for Data Science",
      subtitle: "UC Davis",
      logo_path: "uc.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/PPQK9EDP7MPV",
      alt_name: "UC Davis",
      color_code: "transparent",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "I have worked with several multinational companies as a Data Engineer and Analyst, gaining valuable experience solving real-world data challenges.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Full Time Jobs",
      work: true,
      experiences: [
        {
          title: "Data Engineer",
          company: "Kenvue",
          company_url: "https://www.kenvue.com/",
          logo_path: "k.png",
          duration: "May 2023 - July 2025",
          location: "NJ, USA",
          description:
            "Improved data processing efficiency and quality by leading the development and automation of scalable data pipelines and workflows. Enabled reliable, real-time data insights through optimized architecture, storage, and collaborative solutions.",
          color: "#000000",
        },
        {
          title: "Data Analyst",
          company: "Johnson & Johnson",
          company_url: "https://www.jnj.com/",
          logo_path: "jj.png",
          duration: "March 2022 - April 2023",
          location: "NJ, USA",
          description:
            "Worked with SAP financial data using SQL and Tableau to boost data accuracy and retrieval speed, helping the business gain timely insights and make more informed decisions while ensuring data reliability.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage a wide range of cutting-edge technologies. My strongest experience is designing and deploying data engineering solutions, building scalable data pipelines, and integrating them with cloud infrastructure for reliable web application support.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.png",
    description: "I’d be happy to connect, feel free to reach out.",
  },
  blogSection: {},
  addressSection: {},
  phoneSection: {},
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
