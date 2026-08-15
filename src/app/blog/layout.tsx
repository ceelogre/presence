import BlogArticleFooter from '@/components/BlogArticleFooter';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <BlogArticleFooter />
    </>
  );
}
