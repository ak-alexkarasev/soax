import React from 'react';
import styles from './header.module.scss';
import avatar from '../../../img/header/photo.svg';
function Header() {
	return(
		<header className={styles.header}>
			<div className={styles.header__content}>
				<div className={styles.header__title}>
					<h3>Dashboard</h3>
				</div>
				<div className={styles.header__right}>
					<div className={styles.header__job}>Freelance</div>
					<span className={styles.header__line}></span>
					<div className={styles.header__name}>
						<img src={avatar} alt='photo'/>
						<p>Jonathan Rogers</p>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;