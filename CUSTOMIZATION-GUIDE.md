# 📚 ProMan Tutor - Angular Portfolio Website

> A modern, standalone component-based Angular application for tutors and educators offering personal tutoring and coaching center services.

---

## 🎯 Project Overview

This is a **fully responsive** Angular 17+ application converted from an HTML template, specifically customized for **tutors, educators, and coaching centers**. Built with **standalone components**, **TypeScript**, and **Bootstrap 5**.

---

## 🚀 Quick Start

### 1. Install Dependencies

\`\`\`bash
cd proman-tutor-angular
npm install
\`\`\`

### 2. Run Development Server

\`\`\`bash
ng serve
\`\`\`
Navigate to `http://localhost:4200/`

### 3. Build for Production

\`\`\`bash
ng build --configuration production
\`\`\`

---

## 📝 CUSTOMIZATION GUIDE

### ⚠️ **WHERE TO CHANGE CONTENT/IMAGES**

All customization is done through **JSON files** and **image assets**. No need to edit component code!

---

## 📂 **FILE STRUCTURE**

\`\`\`
src/
├── app/
│ ├── components/ # UI Components (✅ Already created)
│ ├── models/ # TypeScript interfaces
│ ├── services/ # Data & scroll services
│ ├── directives/ # Animations & effects
│ └── pipes/ # Filter pipes
├── assets/
│ ├── data/ # ⚠️ EDIT JSON FILES HERE
│ │ ├── tutor-profile.json
│ │ ├── courses.json
│ │ ├── subjects.json
│ │ ├── services.json
│ │ ├── faculty.json
│ │ ├── testimonials.json
│ │ └── experience.json
│ └── images/ # ⚠️ ADD YOUR IMAGES HERE
│ ├── profile.png # Your profile photo
│ ├── course-_.jpg # Course images
│ ├── faculty-_.jpg # Faculty photos
│ └── testimonial-\*.jpg
\`\`\`

---

## 📋 **STEP-BY-STEP CUSTOMIZATION**

### 1️⃣ **Update Your Profile**

**File:** `src/assets/data/tutor-profile.json`

\`\`\`json
{
"fullName": "YOUR NAME HERE", // ⚠️ CHANGE
"greeting": "Hello, I'm",
"roles": [ // ⚠️ CHANGE (typing effect)
"Mathematics Tutor",
"Science Expert",
"Exam Specialist"
],
"tagline": "Expert Tutor with 10+ Years Experience", // ⚠️ CHANGE
"bio": "YOUR BIO/DESCRIPTION HERE...", // ⚠️ CHANGE
"yearsOfExperience": 10, // ⚠️ CHANGE
"profileImage": "assets/images/profile.png", // ⚠️ ADD YOUR IMAGE
"cvLink": "assets/cv/your-cv.pdf", // ⚠️ ADD YOUR CV
"introVideoLink": "https://youtube.com/embed/YOUR-VIDEO", // ⚠️ OPTIONAL
"contact": {
"email": "your.email@example.com", // ⚠️ CHANGE
"phone": "+1234567890", // ⚠️ CHANGE
"address": "Your Address" // ⚠️ CHANGE
},
"social": {
"facebook": "https://facebook.com/yourpage", // ⚠️ CHANGE
"youtube": "https://youtube.com/yourchannel", // ⚠️ CHANGE
"linkedin": "https://linkedin.com/in/yourprofile" // ⚠️ CHANGE
},
"stats": {
"studentsEnrolled": 500, // ⚠️ CHANGE
"coursesCompleted": 50 // ⚠️ CHANGE
}
}
\`\`\`

---

### 2️⃣ **Add Your Subjects**

**File:** `src/assets/data/subjects.json`

\`\`\`json
[
{
"name": "Mathematics", // ⚠️ CHANGE
"description": "Advanced Math from basics to competitive exams", // ⚠️ CHANGE
"icon": "fa-calculator", // ⚠️ CHANGE (FontAwesome icon)
"proficiency": 95 // ⚠️ CHANGE (0-100)
}
// Add more subjects...
]
\`\`\`

**Available FontAwesome Icons:** `fa-calculator`, `fa-flask`, `fa-book`, `fa-language`, `fa-globe`, `fa-laptop-code`

---

### 3️⃣ **Define Your Services**

**File:** `src/assets/data/services.json`

\`\`\`json
[
{
"title": "Personal One-on-One Tutoring", // ⚠️ CHANGE
"description": "Customized learning...", // ⚠️ CHANGE
"icon": "fa-user-graduate", // ⚠️ CHANGE
"price": "$30/hour", // ⚠️ CHANGE
"features": [ // ⚠️ CHANGE
"Flexible scheduling",
"Personalized curriculum",
"Regular progress reports"
]
}
// Add more services...
]
\`\`\`

---

### 4️⃣ **List Your Courses**

**File:** `src/assets/data/courses.json`

\`\`\`json
[
{
"title": "Grade 10 Mathematics Mastery", // ⚠️ CHANGE
"description": "Complete Grade 10 math...", // ⚠️ CHANGE
"category": "mathematics", // ⚠️ CHANGE (lowercase)
"image": "assets/images/course-math.jpg", // ⚠️ ADD IMAGE
"duration": "6 months", // ⚠️ CHANGE
"level": "Intermediate", // ⚠️ CHANGE
"fee": "$500", // ⚠️ CHANGE
"studentsEnrolled": 45 // ⚠️ CHANGE
}
// Add more courses...
]
\`\`\`

**Categories:** `mathematics`, `science`, `english`, `exam-prep`, etc.

---

### 5️⃣ **Add Faculty Members**

**File:** `src/assets/data/faculty.json`

\`\`\`json
[
{
"name": "Dr. John Doe", // ⚠️ CHANGE
"role": "Senior Mathematics Instructor", // ⚠️ CHANGE
"specialization": "Calculus & Algebra", // ⚠️ CHANGE
"photo": "assets/images/faculty-1.jpg", // ⚠️ ADD IMAGE
"social": {
"facebook": "https://facebook.com/...", // ⚠️ OPTIONAL
"linkedin": "https://linkedin.com/..." // ⚠️ OPTIONAL
}
}
// Add more faculty...
]
\`\`\`

---

### 6️⃣ **Add Student Testimonials**

**File:** `src/assets/data/testimonials.json`

\`\`\`json
[
{
"name": "Sarah Johnson", // ⚠️ CHANGE
"role": "Student, Grade 12", // ⚠️ CHANGE
"message": "Best tutor ever! Improved...", // ⚠️ CHANGE
"rating": 5, // ⚠️ CHANGE (1-5)
"photo": "assets/images/testimonial-1.jpg" // ⚠️ ADD IMAGE
}
// Add more testimonials...
]
\`\`\`

---

### 7️⃣ **Update Experience & Education**

**File:** `src/assets/data/experience.json`

\`\`\`json
[
{
"type": "experience", // "experience" or "education"
"title": "Senior Mathematics Tutor", // ⚠️ CHANGE
"institution": "ABC Coaching Center", // ⚠️ CHANGE
"period": "2018 - Present", // ⚠️ CHANGE
"description": "Teaching advanced math..." // ⚠️ CHANGE
},
{
"type": "education",
"title": "M.Sc. Mathematics", // ⚠️ CHANGE
"institution": "University Name", // ⚠️ CHANGE
"period": "2014 - 2016", // ⚠️ CHANGE
"description": "Specialized in..." // ⚠️ CHANGE
}
]
\`\`\`

---

## 🖼️ **IMAGE REQUIREMENTS**

### Where to Add Images:

\`\`\`
src/assets/images/
├── profile.png # Your main profile photo (500x500px recommended)
├── course-math.jpg # Course images (600x400px)
├── course-science.jpg
├── faculty-1.jpg # Faculty photos (400x500px)
├── faculty-2.jpg
├── testimonial-1.jpg # Student photos (200x200px, circular)
└── testimonial-2.jpg
\`\`\`

### Image Guidelines:

- **Profile Photo:** Square, professional headshot (PNG/JPG, 500x500px)
- **Course Images:** Landscape orientation (JPG, 600x400px)
- **Faculty Photos:** Portrait orientation (JPG, 400x500px)
- **Testimonial Photos:** Square, clear face (JPG, 200x200px)

### Copy Original Images:

\`\`\`bash

# Copy images from original template

cp -r "../ProMan/img/\*" "src/assets/images/"
\`\`\`

---

## 🎨 **STYLING CUSTOMIZATION**

### Change Primary Color:

**File:** `src/styles.css`

\`\`\`css
:root {
--primary: #3B7DDD; /_ ⚠️ CHANGE THIS _/
--secondary: #6C757D;
--light: #F8F9FA;
--dark: #212529;
}
\`\`\`

### Common Color Schemes:

- **Blue:** `#3B7DDD` (default)
- **Green:** `#28a745`
- **Purple:** `#6f42c1`
- **Orange:** `#fd7e14`
- **Red:** `#dc3545`

---

## 📦 **DEPENDENCIES**

### Install Required Packages:

\`\`\`bash
npm install bootstrap @fortawesome/fontawesome-free
\`\`\`

### Already Included:

- Angular 17+ (Standalone Components)
- TypeScript 5+
- RxJS for reactive data
- Angular Forms (Reactive)

---

## 🛠️ **CONTACT FORM SETUP**

The contact form is ready but needs backend integration.

### Option 1: Use FormSpree (Easy)

1. Go to [formspree.io](https://formspree.io)
2. Create a form
3. Update `contact.component.ts`:

\`\`\`typescript
onSubmit() {
if (this.contactForm.valid) {
const formData = this.contactForm.value;
fetch('https://formspree.io/f/YOUR-FORM-ID', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(formData)
}).then(() => {
this.submitMessage = 'Message sent successfully!';
this.contactForm.reset();
});
}
}
\`\`\`

### Option 2: Use EmailJS

### Option 3: Build custom backend API

---

## 🚀 **DEPLOYMENT**

### Deploy to GitHub Pages:

\`\`\`bash
ng build --configuration production --base-href "/your-repo-name/"
npx angular-cli-ghpages --dir=dist/proman-tutor-angular/browser
\`\`\`

### Deploy to Netlify:

1. Build: `ng build --configuration production`
2. Drag `dist/proman-tutor-angular/browser` folder to Netlify

### Deploy to Vercel:

\`\`\`bash
npm install -g vercel
vercel --prod
\`\`\`

---

## ✅ **CHECKLIST**

- [ ] Update `tutor-profile.json` with your information
- [ ] Add your profile photo to `assets/images/profile.png`
- [ ] Update `subjects.json` with subjects you teach
- [ ] Update `services.json` with your offerings
- [ ] Add courses to `courses.json`
- [ ] Add course images to `assets/images/`
- [ ] Update `faculty.json` (if applicable)
- [ ] Add testimonials to `testimonials.json`
- [ ] Update `experience.json` with your background
- [ ] Change primary color in `styles.css` (optional)
- [ ] Setup contact form backend
- [ ] Test all sections locally
- [ ] Build and deploy

---

## 📧 **NEED HELP?**

If you encounter any issues:

1. Check the browser console for errors
2. Ensure all JSON files have valid syntax
3. Verify image paths are correct
4. Run `ng serve` to see detailed error messages

---

## 📜 **LICENSE**

This project is based on the ProMan HTML template, converted to Angular with standalone components.

---

**Happy Teaching! 🎓**
