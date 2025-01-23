const getImagePath = (path: string) => {
  if (process.env.NODE_ENV === 'production') {
    return `/ux-portfolio${path.replace('/ux-portfolio', '')}`;
  }
  return path.replace('/ux-portfolio', '');
};

 export interface ProjectDetailContent {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    mainImage: string;
    challenge: string;
    process: string;
    solution: string;
    results: string;
    processImages?: string[];
    resultImages?: string[];
 }
 
 export const projectsData: ProjectDetailContent[] = [
    {
      id: 'legibility-articles',
      title: "Legibility of articles",
      description: "Users of the Vision website have voiced concerns about the degrading legibility of Vision articles.s",
      tags: ["UX Research", "User Testing", "Wireframing", "Prototyping"],
      image: getImagePath("/ux-portfolio/images/cards/portfolio-1.jpg"),
      mainImage: getImagePath("/ux-portfolio/images/pages/Advisor-promo-breaker.avif"),
      challenge: "Users of the Vision website reported issues with article legibility, including narrow fonts, hard-to-read text, and poor italic rendering in Chrome. These challenges stemmed from Microsoft's recent typographical updates to SharePoint, which negatively impacted readability and user experience.",
      process: "We conducted A/B testing with ten users from various roles at Pramerica, combining observations of body and eye movements with verbal feedback. The testing compared two prototypes: Prototype A, featuring smaller fonts to reduce scrolling, and Prototype B, designed with larger fonts to minimize eye strain.",
      solution: "An interesting observation was the difference between users' verbal feedback and their body language regarding Microsoft's implementation versus our suggested design. Users who frequently used social media platforms like Twitter and Facebook often preferred Option A but showed discomfort in reading from a comfortable position. Social media encourages continuous scrolling with tightly spaced text, which keeps users engaged but may compromise legibility.<br/> <br/> When switching from Option A to Option B, many users relaxed their posture and appeared more comfortable. Conversely, returning to Option A caused them to lean forward and hunch over. These findings suggest that regular exposure to social media has increased tolerance for less legible typography, affecting reading comfort.",
      results: "Most users found the typography in Prototype A tolerable, with some expressing a preference for it due to the smaller font that required less scrolling. However, it may be beneficial to allow users to control the font size of articles, similar to the functionality offered by Medium.com.<br/> <br/> In contrast, Prototype B typically resulted in less eye strain, with users adopting more comfortable reading positions. While engaging with Option B, users generally kept their hands resting on the table or mouse, whereas with Option A, they often held their temple or chin, indicating a more strained posture.",
      processImages: [
        getImagePath("/ux-portfolio/images/pages/body_language.png"),
        getImagePath("/ux-portfolio/images/pages/eye_movement.png")
      ]
    },
    {
      id: 'skills-accelerator',
      title: "Skills Accelerator",
      description: "Users of the Vision website have voiced concerns about the degrading legibility of Vision articles",
      tags: ["UX Research", "User Testing", "Wireframing", "Prototyping"],
      image: getImagePath("/ux-portfolio/images/cards/portfolio-1.jpg"),
      mainImage: getImagePath("/ux-portfolio/images/pages/ArticleImage_2.avif"),
      challenge: "The company needed to upskill a workforce of nearly 60,000 employees to prepare for future work demands and internal talent development.",
      process: "We developed a SharePoint website with custom web parts, enabling employees to: View current skillsets. Identify opportunities to upskill and expand their knowledge. This solution also facilitated internal recruitment by leveraging existing skillsets and fostering in-house talent development.",
      solution: "We created interactive features to support employee upskilling. The Get Started Card helped employees build their Eightfold profiles, while Call to Action Cards provided access to resources like role exploration, skills learning, and career coaching. Skills Cards shared company announcements, the Jobs Card highlighted internal roles with application options, and a Career Advice Booking System enabled easy scheduling with career coaches.",
      results: "Prototypes and Designs Logo designs for branding various features. Prototypes built in Adobe XD to visualize user interactions and workflows.",
      processImages: [
        getImagePath("/ux-portfolio/images/pages/skills_1.jpg"),
        getImagePath("/ux-portfolio/images/pages/skills_2.jpg")
      ],
      resultImages: [
        getImagePath("/ux-portfolio/images/pages/skills_3.jpg"),
        getImagePath("/ux-portfolio/images/pages/skills_4.jpg")
      ]
    },
    {
      id: 'learning-pool',
      title: "LCMS Key Metrics feature",
      description: "The Key Metrics feature in the Content Details tab provides administrators with an overview of content performance, showing metrics like Total Learners, Completion Rate, and Success Rate. With filtering options for specific Accounts or Licenses, it enables targeted analysis and supports data-driven decisions to improve content effectiveness and learner engagement.",
      tags: ["Information Architecture", "Data Visualization", "Wirefames", "Prototyping"],
      image: getImagePath("/ux-portfolio/images/cards/keymetrics1.png"),
      mainImage: getImagePath("/ux-portfolio/images/pages/keymetrics1.png"),
      challenge: "The feature includes a filtering mechanism allowing admins to view metrics across all data or drill down into specific Accounts or Licenses, enabling quick assessment of content effectiveness across different user segments. This addition to the Content Details streamlines the process of evaluating content performance, supporting data-driven decision-making for content improvement and learner engagement strategies.",
      process: "I analyzed workflows, created wireframes, designed high-fidelity prototypes, ensured responsiveness and accessibility, and collaborated with developers to deliver a seamless implementation.",
      solution: "We delivered low-fidelity wireframes, high-fidelity mockups, interactive prototypes, and detailed design specifications to streamline the design process. The solution focused on creating an intuitive, filterable Key Metrics feature for the Content Details tab, providing administrators with improved workflows and accessible interfaces.",
      results: "The design enhanced admin workflows for content performance analysis, improved data visualization, and enabled intuitive filtering for segmented data views. The interface adhered to WCAG guidelines, received positive stakeholder feedback, and ensured a smooth handoff to the development team, driving successful implementation.",
      processImages: [
        getImagePath("/ux-portfolio/images/pages/keymetrics2.png"),
        getImagePath("/ux-portfolio/images/pages/keymetrics3.png")
      ]
    }
 ];