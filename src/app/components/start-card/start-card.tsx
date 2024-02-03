import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export enum StartCardType {
  Dark = 'dark',
  Gradient = 'gradient',
}

export interface StartCardProps {
  type: StartCardType;
  label: string;
  counter: number;
}

export default function StartCard({ counter, label, type }: StartCardProps) {
  return (
    <div
      className={clsx(
        'rounded',
        type === StartCardType.Dark &&
          'pt-3 px-3 bg-gray-900 odd:text-purple-200 even:text-lime-200 text-right',
        type === StartCardType.Gradient && [
          styles.gradient,
          'p-7 bg-purple-200 text-gray-900 text-left',
        ],
      )}
    >
      <p
        className={clsx(
          'text-left before:w-4 before:h-0.5 before:rounded',
          type === StartCardType.Dark &&
            'text-sm mb-1 text-zinc-50 before:block before:mb-2 before:bg-zinc-50',
          type === StartCardType.Gradient &&
            'text-xs mb-5 before:inline-block before:mr-2 before:align-middle before:bg-gray-900',
        )}
      >
        {label}
      </p>
      <p className="text-6xl font-semibold">{counter}</p>
    </div>
  );
}
