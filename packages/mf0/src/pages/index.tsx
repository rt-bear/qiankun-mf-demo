import styles from './index.less';
import { MicroApp } from 'umi';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <MicroApp name="mf2" />
    </div>
  );
}
