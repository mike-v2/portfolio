type ProjectData = {
  imagePath: string;
  title: string;
  subtitle: string;
  link?: string;
  article?: string;
  video?: string;
  desktopOnly?: boolean;
  source: string;
  summary: React.ReactNode;
  features: React.ReactNode;
  primaryTools: string[];
  secondaryTools: React.ReactNode;
};

type ToolIconData = {
  [index: string]: {
    src: string;
    invert?: boolean;
  };
};
