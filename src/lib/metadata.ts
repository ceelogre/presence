import { Metadata } from 'next';

interface MetadataOptions {
  title: string;
  description: string;
  template?: string;
}

export function createMetadata({ title, description, template }: MetadataOptions): Metadata {
  return {
    title: {
      template: template || `%s - ${title}`,
      default: title
    },
    description,
  };
}
