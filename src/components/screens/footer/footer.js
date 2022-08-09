import React from 'react';
import styles from './footer.module.scss';
function Footer() {
	return(
		<footer className={styles.footer}>
			<div className={styles.footer__content}>
				<div className={styles.footer__content_contact}>
					<a href="mailto:support@soax.com">Mail <span>support@soax.com</span></a>
					<a href="mailto:support@soax.com">Skype <span>live:soax.com</span></a>
					<a href="https://t.me/SoaxBot">Telegram <span>SoaxBot</span></a>
					<a href="#">Language: <span>English</span></a>
				</div>
				<div className={styles.footer__content_copyright}>© 2019 - 2022 Soax Ltd. All right reserved</div>
			</div>
		</footer>
	);
}

export default Footer;