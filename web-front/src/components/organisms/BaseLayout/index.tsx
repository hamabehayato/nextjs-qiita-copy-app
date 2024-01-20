/**
 * BaseLayout
 *
 * @package components
 */
import { ReactNode } from 'react';
import { Navigation } from '@/components/molcules/Navigation';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
  title: string;
};

export const BaseLayout = ({ children }: Props) => {
  /**
   * BaseLayout
   * @returns {JSX.Element}
   * @constructor
   */
  return (
    <div className={styles.container}>
      <section>
        <Navigation />
      </section>
      <div className={styles.contents}>{children}</div>
    </div>
  );
};
