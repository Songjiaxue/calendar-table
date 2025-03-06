import React, { ReactNode } from 'react';
import { CalendarTable } from '../../index';

const home = (): ReactNode => {
  return (
    <div>
      <CalendarTable
        todos={{
          '2025-02-28': ['test', 'hello'],
          '2025-02-24': ['test', 'hello'],
        }}
      />
    </div>
  );
};

export default home;
