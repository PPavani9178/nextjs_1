// import React from 'react';

// export default function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>Welcome to the Home page!</p>
//     </div>
//   );
// }
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Home Page</h1>
      <p>Welcome to the Home page!</p>
    </div>
  );
}
