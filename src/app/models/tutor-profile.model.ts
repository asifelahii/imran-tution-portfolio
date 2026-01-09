export interface TutorProfile {
  name: string;
  title: string;
  typedRoles: string[]; // Multiple roles that will be typed out
  roles?: string[]; // Alias for typedRoles
  aboutText: string;
  yearsExperience: number;
  happyStudents: number;
  coursesCompleted: number;
  awardsReceived: number;
  videoUrl?: string; // Optional intro video
  email: string;
  phone: string;
  address: string;
  greeting?: string; // Hero greeting text
  fullName?: string; // Full name for hero
  cvLink?: string; // CV download link
  introVideoLink?: string; // Intro video link
  profileImage?: string; // Profile image URL
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}
