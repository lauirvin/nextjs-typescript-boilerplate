import Link from 'next/link';
import { memo } from 'react';
import { IDashboardLayoutProps } from './DashboardLayout.types';
import styles from './styles.module.scss';

export const DashboardLayout = memo<IDashboardLayoutProps>(({ children }) => (
  <div className={styles.container}>
    <Link href="/">Home</Link>
    <Link href="/details/123">Details</Link>
    {children}
  </div>
));

DashboardLayout.displayName = 'DashboardLayout';

export default DashboardLayout;
