import { Metadata } from 'next';

// Default metadata for the site
export const defaultMetadata: Metadata = {
  title: 'Certificate in Interior Design | Interior Designers Institute',
  description: 'Earn your Certificate in Interior Design from Interior Designers Institute. Professional training in the heart of Southern California.',
  keywords: 'interior design certificate, interior design school, interior design course, interior designers institute, california interior design',
  authors: [{ name: 'Interior Designers Institute' }],
  creator: 'Interior Designers Institute',
  publisher: 'Interior Designers Institute',
  metadataBase: new URL('https://idi.edu'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://idi.edu',
    title: 'Certificate in Interior Design | Interior Designers Institute',
    description: 'Earn your Certificate in Interior Design from Interior Designers Institute. Professional training in the heart of Southern California.',
    siteName: 'Interior Designers Institute',
    images: [
      {
        url: '/images/og-image.jpg', // This will need to be updated with a real image path
        width: 1200,
        height: 630,
        alt: 'Interior Designers Institute - Certificate in Interior Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certificate in Interior Design | Interior Designers Institute',
    description: 'Earn your Certificate in Interior Design from Interior Designers Institute. Professional training in the heart of Southern California.',
    images: ['/images/twitter-image.jpg'], // This will need to be updated with a real image path
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// JSON-LD structured data for educational organization
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Interior Designers Institute',
  url: 'https://idi.edu',
  logo: 'https://idi.edu/logo.png', // Update with actual logo URL
  description: 'Interior Designers Institute offers a Certificate Course, Associate of Arts Degree in Interior Design, Bachelor of Arts Degree in Interior Design and Master of Interior Architecture Degree.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1061 Camelback St.',
    addressLocality: 'Newport Beach',
    addressRegion: 'CA',
    postalCode: '92660',
    addressCountry: 'US',
  },
  telephone: '+1-949-675-4451',
  sameAs: [
    'https://www.facebook.com/interiordesignersinstitute',
    'https://www.instagram.com/idi_design/',
    // Add other social profiles
  ],
};

// JSON-LD structured data for course
export const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Certificate in Interior Design',
  description: 'A comprehensive certificate program in interior design principles and practices.',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Interior Designers Institute',
    sameAs: 'https://idi.edu',
  },
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: ['onsite', 'online'],
    courseWorkload: 'PT10H',
    educationalCredentialAwarded: 'Certificate in Interior Design',
    startDate: '2025-05-05', // Update with actual start date
  },
};
