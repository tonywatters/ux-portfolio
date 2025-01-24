export const scrollToSection = (sectionId: string, currentPath: string) => {
  if (currentPath.includes('/project/')) {
    window.location.href = `/ux-portfolio/#${sectionId}`;
  } else {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
};

export const getImagePath = (path: string) => {
  // Remove any existing /ux-portfolio/ prefix
  const cleanPath = path.replace(/^\/ux-portfolio\//, '');
  return process.env.NODE_ENV === 'production'
    ? `/ux-portfolio/${cleanPath}`
    : `/${cleanPath}`;
};