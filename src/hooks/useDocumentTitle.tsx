import { useEffect } from 'react';
import Head from 'next/head';

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.title = title;
    }
  }, [title]);

  // Return the Head component for SSR
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
export default useDocumentTitle