import React from 'react';
import cn from 'classnames';
import styles from './scss/main.module.scss';
import Header from '../src/components/screens/header/header.js';
import Menu from '../src/components/screens/menu/menu.js';
import Footer from '../src/components/screens/footer/footer.js';
import QBuilder from '../src/components/screens/qbuilder/qbuilder.js';
function QueryBuilder() {
    return (
			<div  className={styles.wrapper}>
				<Menu></Menu>
				<section className={styles.content}>
					<Header></Header>
					<QBuilder></QBuilder>
					<Footer></Footer>
				</section>
			</div>
    );
  }
  
  export default QueryBuilder;
  