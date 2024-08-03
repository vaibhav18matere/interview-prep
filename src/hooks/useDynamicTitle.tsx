import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useDynamicTitle = (baseTitle: string) => {
  const router = useRouter();
  const routeSegments = router.asPath.split('/').filter((item) => item);
  const dynamicSegment = routeSegments.length > 0 ? routeSegments[routeSegments.length - 1] : '';

  useEffect(() => {
    const pageTitle = dynamicSegment ? `${baseTitle} | ${dynamicSegment}` : baseTitle;
    document.title = pageTitle;
  }, [dynamicSegment, baseTitle]);
};

export default useDynamicTitle;
