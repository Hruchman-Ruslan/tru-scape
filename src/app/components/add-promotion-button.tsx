'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from './button';

export interface AddPromotionButtonProps {
  companyId: string;
}

export default function AddPromotionButton({
  companyId,
}: AddPromotionButtonProps) {
  const route = useRouter();
  return (
    <Button onClick={() => route.push(`/companies/${companyId}/new-promotion`)}>
      Add promotion
    </Button>
  );
}
