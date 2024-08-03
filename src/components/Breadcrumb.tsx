import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const BreadcrumbWithCustomSeparator: React.FC = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);

  useEffect(() => {
    if (router.isReady) {
      const path = router.asPath;
      if (path !== '/') {
        const paths = path.split('/').filter(path => path);
        setBreadcrumbs(paths);
      } else {
        setBreadcrumbs([]);
      }
    }
  }, [router.asPath, router.isReady]);

  const createBreadcrumbs = () => {
    return breadcrumbs.map((breadcrumb, index) => {
      const href = `/${breadcrumbs.slice(0, index + 1).join('/')}`;
      const isLast = index === breadcrumbs.length - 1;

      return (
        <React.Fragment key={href}>
          <BreadcrumbItem>
            <Link href={href} className='transition-colors hover:text-blue-600'>
              {decodeURIComponent(breadcrumb)}
            </Link>
          </BreadcrumbItem>
          {!isLast && <BreadcrumbSeparator />}
        </React.Fragment>
      );
    });
  };

  if (router.asPath === '/') {
    // Don't render breadcrumbs on the home page
    return null;
  }

  return (
    <div className="absolute top-24">
      <Breadcrumb className="container ml-40">
        <BreadcrumbList className="flex items-center space-x-2 text-md">
          <BreadcrumbItem>
            <Link href="/" className='transition-colors hover:text-orange-300'>Home</Link>
          </BreadcrumbItem>
          {breadcrumbs.length > 0 && <BreadcrumbSeparator />}
          {createBreadcrumbs()}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export { BreadcrumbWithCustomSeparator };
