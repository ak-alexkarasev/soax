import React from 'react';
import cn from 'classnames';
import styles from './qbuilder.module.scss';
import { InputNumber } from 'antd';
function QBuilder() {
    return (
			<div className={styles.qbubilder}>
				<form>
					<div className={styles.qbubilder__head}>
						<h3>Enter URL to scrape</h3>
						<p>This request costs 1 credit</p>
					</div>
					<div className={styles.qbubilder__content}>
						<InputNumber></InputNumber>
					</div>
				</form>
			</div>
    );
  }
  
  export default QBuilder;