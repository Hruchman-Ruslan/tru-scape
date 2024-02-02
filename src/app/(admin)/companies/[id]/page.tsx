'use client';

import React, { useEffect } from 'react';
import Header from '@/app/components/header';
import { notFound } from 'next/navigation';

export interface PageProps {
  params: { id: string };
}

// export function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' }, { id: '3' }];
// }

export default function Page({ params }: PageProps) {
  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);

  return (
    <>
      <Header>Company ({params.id})</Header>
    </>
  );
}

// folder [...id]
// import React, { useEffect } from 'react';
// import Header from '@/app/components/header';
// import { notFound } from 'next/navigation';

// export interface PageProps {
//   params: { id: string[] };
// }

// export default function Page({ params }: PageProps) {
//   useEffect(() => {
//     const id = Number.parseInt(params.id[0]);
//     if (Number.isNaN(id)) {
//       notFound();
//     }
//   }, [params.id]);

//   return (
//     <>
//       <Header>Company ({String(params.id)})</Header>
//     </>
//   );
// }
