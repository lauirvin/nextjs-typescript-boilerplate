import { SampleComponent } from '@components';
import React from 'react';
import styles from './styles.module.scss';

const Home = () => (
  <div className={styles.container}>
    Home
    <SampleComponent foo="hi" />
  </div>
);

export default Home;
