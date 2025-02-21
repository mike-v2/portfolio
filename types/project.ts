export type ProjectData = {
  id: string;
  imagePath: string;
  title: string;
  subtitle: string;
  link?: string;
  article?: string;
  video?: string;
  desktopOnly?: boolean;
  source: string;
  summary: string;
  summaryMore?: string;
  features: string[];
  primaryTools: string[];
  secondaryTools: React.ReactNode;
};

export type ToolIconData = {
  [index: string]: {
    src: string;
    invert?: boolean;
  };
};
