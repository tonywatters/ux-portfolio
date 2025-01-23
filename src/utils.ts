export const scrollToSection = (sectionId: string, currentPath: string) => {
    if (currentPath.includes('/project/')) {
      window.location.href = `/ux-portfolio/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };