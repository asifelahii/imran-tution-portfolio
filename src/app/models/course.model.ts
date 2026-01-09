export interface Course {
  id: number;
  title: string;
  description: string;
  category: string | string[]; // 'mathematics' | 'science' | 'languages' | 'exam-prep' etc.
  imageUrl: string;
  image?: string; // Alias for imageUrl
  price?: string; // Course price
  duration?: string;
  grade?: string; // e.g., "Grade 10-12"
  mode?: 'online' | 'offline' | 'both';
}
