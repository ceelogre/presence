import ContactClient from './ContactClient';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Contact',
  description: 'Use this form to contact me',
});

export default function ContactPage() {
  return <ContactClient />
} 