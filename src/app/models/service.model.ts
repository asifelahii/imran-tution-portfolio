export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string; // Font Awesome or Bootstrap icon class
  delay?: string; // Animation delay
  subtitle?: string; // Optional subtitle
  features?: string[]; // Optional list of features
}
