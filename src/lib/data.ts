import type { FieldOfStudy, DocumentItem, VisaStep, DubaiVisaType } from './types';

export const universitiesByField: { [key: string]: FieldOfStudy } = {
  medicine: {
    name: "Medicine & Health Sciences",
    description: "Pursue a world-class medical education in Belarus. Our partner universities offer state-of-the-art facilities, experienced faculty, and extensive clinical training recognized globally.",
    universities: [
      { name: "Belarusian State Medical University (BSMU)", image: "bsmu-main", field: "Medicine", gallery: [], videos: [] },
      { name: "Gomel State Medical University", image: "gomel-main", field: "Medicine", gallery: [], videos: [] },
      { name: "Vitebsk State Medical University", image: "vitebsk-main", field: "Medicine", gallery: [], videos: [] },
      { name: "Grodno State Medical University", image: "grodno-main", field: "Medicine", gallery: [], videos: [] },
    ],
  },
  it: {
    name: "IT & Computer Science",
    description: "Dive into the world of technology at Belarus's leading IT universities. Gain hands-on experience in programming, cybersecurity, AI, and more in a thriving tech ecosystem.",
    universities: [
      { name: "Belarusian State University (BSU)", image: "bsu-main", field: "IT", gallery: [], videos: [] },
      { name: "Belarusian State University of Informatics & Radioelectronics (BSUIR)", image: "bsuir-main", field: "IT", gallery: [], videos: [] },
      { name: "Belarusian National Technical University (BNTU)", image: "bntu-main", field: "IT", gallery: [], videos: [] },
    ],
  },
  engineering: {
    name: "Engineering & Technical Sciences",
    description: "Build the future with a degree from a top Belarusian technical university. Explore fields like civil, mechanical, and software engineering with a focus on practical application and innovation.",
    universities: [
      { name: "Belarusian National Technical University (BNTU)", image: "bntu-main", field: "Engineering", gallery: [], videos: [] },
      { name: "Brest State Technical University", image: "brest-main", field: "Engineering", gallery: [], videos: [] },
      { name: "Polotsk State University", image: "polotsk-main", field: "Engineering", gallery: [], videos: [] },
    ],
  },
  business: {
    name: "Business, Economics & Management",
    description: "Develop your leadership skills and business acumen at prestigious economic universities. Our programs prepare you for the global market with specializations in finance, marketing, and international trade.",
    universities: [
      { name: "Belarusian State Economic University (BSEU)", image: "bseu-main", field: "Business", gallery: [], videos: [] },
      { name: "Minsk Innovation University", image: "minsk-inno-main", field: "Business", gallery: [], videos: [] },
      { name: "International University MITSO", image: "mitso-main", field: "Business", gallery: [], videos: [] },
    ],
  },
};

export const requiredDocuments: { admission: DocumentItem[], visa: DocumentItem[] } = {
    admission: [
        { item: 'Passport' },
        { item: 'High School / Bachelor Certificate' },
        { item: 'Transcripts' },
        { item: 'Birth Certificate (translated)' },
        { item: 'Passport photos' },
        { item: 'Medical certificate (including HIV test)' },
    ],
    visa: [
        { item: 'Invitation letter from University' },
        { item: 'Visa application form' },
        { item: 'Medical insurance' },
        { item: 'Tuition payment confirmation' },
        { item: 'Proof of financial means' },
        { item: 'Original educational certificates' },
    ]
};

// This data is now translated in the JSON files
// export const belarusVisaSteps: VisaStep[] = [
//     { step: 1, title: 'Admission', description: 'Secure an admission letter from your chosen university with our assistance.' },
//     { step: 2, title: 'Invitation', description: 'Receive an official invitation letter from the university, required for the visa application.' },
//     { step: 3, title: 'Embassy Submission', description: 'We guide you in preparing and submitting your documents to the Belarusian embassy.' },
//     { step: 4, title: 'Visa Approval', description: 'Receive your student visa and prepare for your journey to Belarus.' },
// ];

// This data is now translated in the JSON files
// export const dubaiVisaTypes: DubaiVisaType[] = [
//     { title: 'Tourist Visa', description: 'Explore the wonders of Dubai. Available for 30 or 60 days, single or multiple entry.', icon: 'Plane' },
//     { title: 'Business Visa', description: 'For professionals attending meetings, conferences, or exploring business opportunities.', icon: 'Briefcase' },
//     { title: 'Short-Term Visa', description: 'Ideal for short stays, family visits, or transit passengers. Valid for up to 30 days.', icon: 'Clock' },
//     { title: 'Long-Term Visa', description: 'For extended stays, remote work, or long-term projects in Dubai.', icon: 'Calendar' },
// ];

export const studentMedia = {
    testimonials: [
        { id: 'media-gallery-8', type: 'video', description: '"Evan\'s Travel made my dream come true!" - Maria, BSMU', tags: ['BSMU', 'Belarus'] },
    ],
    arrivals: [
        { id: 'media-gallery-6', type: 'video', description: 'Warm welcome at Minsk National Airport', tags: ['Minsk', 'Arrival'] },
    ],
    graduations: [
        { id: 'media-gallery-1', type: 'video', description: 'Celebrating success on graduation day', tags: ['BSU', 'Graduation'] },
    ],
    campusLife: [
         { id: 'media-gallery-7', type: 'video', description: 'A glimpse into campus life at BNTU', tags: ['BNTU', 'Campus'] },
    ],
    gallery: [
        { id: 'media-gallery-2', type: 'photo', description: 'Late night study sessions at the library', tags: ['BSUIR', 'Study'] },
        { id: 'media-gallery-3', type: 'photo', description: 'Receiving the "Best International Student" award', tags: ['Gomel', 'Achievement'] },
        { id: 'media-gallery-4', type: 'photo', description: 'Making lifelong friends on campus', tags: ['MITSO', 'Friendship'] },
        { id: 'media-gallery-5', type: 'photo', description: 'Presenting final year project', tags: ['Brest', 'Academics'] },
    ]
};
