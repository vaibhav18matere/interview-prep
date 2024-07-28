export interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

export interface CompaniesListProps {
  icon: string;
  name: string;
}

export interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

export interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

export interface TheoryProps {
  id: number;
  question: string;
  answer: string;
}

export interface AccordionDemoProps {
  data: TheoryProps[];
  heading: string;
}

export interface TopicsProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}
