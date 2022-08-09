import React from 'react';
import cn from 'classnames';
import styles from './menu.module.scss';
import logo from '../../../img/header/logo.svg';
import out from '../../../img/header/menu_icon-out.svg';

function Menu() {
	return (
		<nav className={styles.menu}>
			<div className={styles.menu__logo}>
				<a href="#"><img src={logo} alt='soax.com'/></a>
			</div>
			<div className={styles.menu__list}>
				<div className={styles.menu__box}>
					<div className={styles.menu__sup}>manage</div>
					<div className={styles.menu__list}>
						<button className={cn(styles.menu__item,styles.menu__item_active)}>
							<span className={cn(styles.menu__item_icon,styles.menu__item_icon_1)}></span>
							Dashboard
						</button>
						<button className={styles.menu__item}>
							<span className={cn(styles.menu__item_icon,styles.menu__item_icon_2)}></span>
							Query Builder
						</button>
						<button className={styles.menu__item}>
							<span className={cn(styles.menu__item_icon,styles.menu__item_icon_3)}></span>
							Store
						</button>
						<button className={styles.menu__item}>
							<span className={cn(styles.menu__item_icon,styles.menu__item_icon_4)}></span>
							My Scrapers
							<span className={styles.menu__item_arrow}></span>
						</button>
					</div>
				</div>
				<div className={styles.menu__box}>
					<div className={styles.menu__sup}>info</div>
					<div className={styles.menu__list}>
						<button className={styles.menu__item}>
							<span className={cn(styles.menu__item_icon,styles.menu__item_icon_5)}></span>
							Documentation
						</button>
						<button className={styles.menu__item}>
							<span className={cn(styles.menu__item_icon,styles.menu__item_icon_6)}></span>
							Query Builder
						</button>
					</div>
				</div>
				<div className={styles.menu__out}>
					<a href="#" className={styles.menu__out_button}>
						<img src={out} alt='Out'/>
						Sign Out
					</a>
				</div>
			</div>
		</nav>
	)
}

export default Menu;