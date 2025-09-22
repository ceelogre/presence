import { Metadata } from 'next';


const title = "Contact";
const description = "This is the contact page";
export const metadata: Metadata = {
  title: {
    template: `%s - ${title}`,
    default: title
  },
  description,
};

