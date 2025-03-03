import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Somanath",
  lastName: "Khadanga",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/somnathraz",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/somnath-khadanga/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:somnathkhadanga810@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full stack Software Developer</>,
  subline: (
    <>
      I'm Somnath Khadanga, a Software Engineer at{" "}
      <InlineCode>LearnVista</InlineCode>, where I design and develop intuitive
      full-stack web experiences. Beyond work, I actively build and explore my
      own projects, continuously expanding my expertise.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Enthusiastic and results-driven Full Stack Developer with 4 years of
        experience in building and deploying web and mobile applications.
        Proficient in React.js, Next.js, React Native, Redux, Node.js, MongoDB,
        and AWS. Adept at integrating third-party services (Stripe, Google APIs)
        and delivering efficient, user-centric solutions. Skilled at
        collaborating with cross-functional teams to design, develop, and
        optimize modern, high-performance products.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Learnvista",
        timeframe: "2024 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Developed a component library (similar to Material-UI) for in-house
            projects, reducing UI development time by 40%.
          </>,
          <>
            Optimized e-commerce platform load time by 60% by implementing
            Next.js server-side rendering (SSR), lazy loading, and caching
            strategies.
          </>,
          <>
            Automated invoice/bill creation and integrated email sending
            functionality. Reduced billing errors and administrative overhead.
          </>,
          <>
            A cross-platform mobile application leveraging AI-driven language
            learning algorithms. Provided interactive lessons, quizzes, and
            user-specific analytics.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.png",
            alt: "outspokn",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Skillslash",
        timeframe: "2021 - 2024",
        role: "Full stack Developer",
        achievements: [
          <>
            Built a SaaS-based invoice generation system with automated PDF
            generation, email notifications, role-based access control (RBAC),
            and real-time analytics for financial tracking.
          </>,
          <>
            Architected and developed scalable e-commerce platforms and job
            portals similar to Naukri, ensuring optimal performance, SEO, and
            seamless user experience using React.js, Next.js (App Router & Pages
            Router), and Redux.
          </>,
          <>
            Built a real-time stock trading dashboard using WebSockets for live
            market updates, interactive D3.js visualizations, and Next.js
            middleware for secure authentication
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Biju Patnaik University of Technology",
        description: <>Studied software engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "React.js/Next.js",
        description: <>Full stack web application development </>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-08.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-09.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "React Native",
        description: (
          <>Building learning application Outspokn for both Ios and Android.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/chat_feedback.png",
            alt: "Project image",
            width: 9,
            height: 19,
          },
          {
            src: "/images/projects/project-01/readalong.png",
            alt: "Project image",
            width: 9,
            height: 19,
          },
          {
            src: "/images/projects/project-01/Home_page.png",
            alt: "Project image",
            width: 9,
            height: 19,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
