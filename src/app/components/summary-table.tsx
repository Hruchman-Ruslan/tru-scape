import React from 'react';

export interface SummaryTableProps {
  headers: React.ReactNode;
  children?: React.ReactNode;
}

export default function SummaryTable({ children, headers }: SummaryTableProps) {
  return (
    <table className="table-auto w-full border-separate border-spacing-0">
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody className="[&>tr:nth-child(2n)]:bg-gry-100 [&>tr:nth-child(2n)]:bg-white">
        {children}
      </tbody>
    </table>
  );
}
