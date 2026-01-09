export interface Testimonial {
  id: number;
  studentName: string;
  parentName?: string; // Optional if parent gives review
  comment: string;
  rating?: number; // Optional 1-5 rating
  imageUrl?: string;
  course?: string; // Course they took
  // Template aliases
  image?: string; // Alias for imageUrl
  name?: string; // Alias for studentName
  review?: string; // Alias for comment
  relation?: string; // Alias for parentName or course
}
