import ContactClient from './ContactClient';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Contact',
  description: 'Contact me',
});

export default function ContactPage() {
  return <ContactClient />
} 