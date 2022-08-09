import React from 'react';
import cn from 'classnames';
import styles from './scss/main.module.scss';
import Header from '../src/components/screens/header/header.js';
import Menu from '../src/components/screens/menu/menu.js';
import Footer from '../src/components/screens/footer/footer.js';
import Dashboard from './components/screens/dashboard/dashboard';
function App() {
    return (
			<div  className={styles.wrapper}>
				<Menu></Menu>
				<section className={styles.content}>
					<Header></Header>
					<Dashboard></Dashboard>
					<Footer></Footer>
				</section>
			</div>
      
    );
  }
  
  export default App;
  