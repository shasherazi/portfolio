export interface Work {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  links: {
    live: string;
    github: string;
  };
  image: string;
}
