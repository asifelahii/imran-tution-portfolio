export interface Faculty {
  id: number;
  name: string;
  designation: string;
  imageUrl: string;
  image?: string; // Alias for imageUrl used in template
  role?: string; // Role/designation
  qualification?: string; // Qualification details
  experience?: string; // Experience description
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  socialLinks?: {
    // Alias for socialMedia used in template
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}
