import { memo } from 'react';
import { ISampleComponentProps } from './SampleComponent.types';
import styles from './styles.module.scss';

export const SampleComponent = memo<ISampleComponentProps>(({ foo }) => (
  <div className={styles.container}>{foo}</div>
));

SampleComponent.displayName = 'SampleComponent';

export default SampleComponent;
