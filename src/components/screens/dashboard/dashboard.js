import React from 'react';
import cn from 'classnames';
import styles from './dashboard.module.scss';
import time from '../../../img/dashboard/time.svg';
import copy from '../../../img/dashboard/copy.svg';
import circle from '../../../img/dashboard/circle.svg';
import table from '../../../img/dashboard/table.svg';
function Dashboard() {
	return(
		<div className={cn(styles.content__box,styles.dashboard)}>
			<div className={styles.dashboard__content}>
				
				<div className={styles.dashboard__wrap}>
				<div className={styles.dashboard__item}>
					<div className={styles.dashboard__heading}>
						<h3>BALANCE</h3>
					</div>
					<div className={cn(styles.dashboard__box,styles.dashboard__box_balance)}>
						<div className={styles.dashboard__price}>200,000</div>
						<p className={styles.dashboard__text}>SOAX Credits</p>
					</div>
				</div>
				<div className={styles.dashboard__item}>
					<div className={styles.dashboard__heading}>
						<h3>subscription</h3>
					</div>
					<div className={cn(styles.dashboard__box,styles.dashboard__box_subs)}>
						<img src={time} alt='soax.com'/>
						<p className={styles.dashboard__text}>Your subscription expires <span>7 September 2022</span>
						</p>
					</div>
				</div>
				</div>
				<div className={styles.dashboard__wrap}>
				<div className={styles.dashboard__item}>
					<div className={styles.dashboard__heading}>
						<h3>request statistics</h3>
					</div>
					<div className={cn(styles.dashboard__box,styles.dashboard__box_statistics)}>
						<img src={circle}/>
						<ul  className={styles.dashboard__list}>
							<li><span className={cn(styles.dashboard__list_span,styles.dashboard__list_span_green)}></span>
								<span>87%</span> Successful
							</li>
							<li><span className={cn(styles.dashboard__list_span,styles.dashboard__list_span_red)}></span>
								<span>13%</span> Failed
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.dashboard__item}>
					<div className={styles.dashboard__heading}>
						<h3>you API key</h3>
					</div>
					<div className={cn(styles.dashboard__box,styles.dashboard__box_api)}>
						<p className={styles.api_text}>cklsjfh9834573984p5k656090394892338u4o32fj..</p>
						<a className={styles.api_link} href="#"><img src={copy} alt='soax.com'/>Copy</a>
					</div>
				</div>
				</div>
				<div className={styles.dashboard__item}>
					<div className={styles.dashboard__heading}>
						<h3>soax credit usage</h3>
					</div>
					<div className={cn(styles.dashboard__box,styles.dashboard__box_soax)}>
						<p><span className={cn(styles.dashboard__list_span,styles.dashboard__list_span_red)}></span>Credit Limit</p>
						{/* тут должен быть компонент диаграммы таблицы */}
						<img width="100%" src={table}/>
					</div>
				</div>
				<div className={styles.dashboard__item}>
					<div className={styles.dashboard__heading}>
						<h3>usage by domain</h3>
					</div>
					<div className={styles.dashboard__table}>
						<table>
							<thead>
								<tr>
									<th>Domain 
										<span>
											<svg width="6" height="15" viewBox="0 0 6 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.5H6L3 14.5L0 8.5Z" fill="#808080"/>
												<path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.5H6L3 0.5L0 6.5Z" fill="#808080"/>
											</svg>
										</span>
									</th>
									<th>200
									<span>
										<svg width="6" height="15" viewBox="0 0 6 15" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.5H6L3 14.5L0 8.5Z" fill="#0FA6AF"/>
											<path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.5H6L3 0.5L0 6.5Z" fill="#0FA6AF"/>
										</svg>
									</span>
									</th>
									<th>400-499
										<span>
											<svg width="6" height="15" viewBox="0 0 6 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.5H6L3 14.5L0 8.5Z" fill="#8B4FC8"/>
												<path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.5H6L3 0.5L0 6.5Z" fill="#8B4FC8"/>
											</svg>
										</span>
									</th>
									<th>500
										<span>
											<svg width="6" height="15" viewBox="0 0 6 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.5H6L3 14.5L0 8.5Z" fill="#CC0000"/>
												<path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.5H6L3 0.5L0 6.5Z" fill="#CC0000"/>
											</svg>
										</span>
									</th>
									<th>Requests
										<span>
											<svg width="6" height="15" viewBox="0 0 6 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.5H6L3 14.5L0 8.5Z" fill="#808080"/>
												<path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.5H6L3 0.5L0 6.5Z" fill="#808080"/>
											</svg>
										</span>
									</th>
									<th>Successful
										<span>
											<svg width="6" height="15" viewBox="0 0 6 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.5H6L3 14.5L0 8.5Z" fill="#808080"/>
												<path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.5H6L3 0.5L0 6.5Z" fill="#808080"/>
											</svg>
										</span>
									</th>
									<th>Failed
										<span>
											<svg width="6" height="15" viewBox="0 0 6 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.5H6L3 14.5L0 8.5Z" fill="#808080"/>
												<path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.5H6L3 0.5L0 6.5Z" fill="#808080"/>
											</svg>
										</span>
									</th>
									<th>Credit spent</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>amazon.com</td>
									<td>12</td>
									<td>3</td>
									<td>0</td>
									<td>15</td>
									<td>15</td>
									<td>0</td>
									<td>5</td>
								</tr>
								<tr>
									<td>еbay.com</td>
									<td>9</td>
									<td>2</td>
									<td>2</td>
									<td>12</td>
									<td>12</td>
									<td>0</td>
									<td>5</td>
								</tr>
								<tr>
									<td>alibaba.com</td>
									<td>9</td>
									<td>2</td>
									<td>0</td>
									<td>10</td>
									<td>10</td>
									<td>0</td>
									<td>5</td>
								</tr>
								<tr>
									<td>dnb.com</td>
									<td>7</td>
									<td>2</td>
									<td>0</td>
									<td>6</td>
									<td>6</td>
									<td>0</td>
									<td>5</td>
								</tr>
								<tr>
									<td>walmart.com</td>
									<td>7</td>
									<td>1</td>
									<td>1</td>
									<td>5</td>
									<td>5</td>
									<td>0</td>
									<td>5</td>
								</tr>
								<tr>
									<td>worldticket.com</td>
									<td>4</td>
									<td>1</td>
									<td>0</td>
									<td>4</td>
									<td>4</td>
									<td>0</td>
									<td>5</td>
								</tr>
								<tr>
									<td>officedepot.com</td>
									<td>3</td>
									<td>0</td>
									<td>0</td>
									<td>1</td>
									<td>1</td>
									<td>0</td>
									<td>5</td>
								</tr>
								<tr>
									<td>zappos.com</td>
									<td>1</td>
									<td>2</td>
									<td>0</td>
									<td>1</td>
									<td>1</td>
									<td>0</td>
									<td>5</td>
								</tr>
								<tr>
									<td>zoominfo.com</td>
									<td>1</td>
									<td>0</td>
									<td>0</td>
									<td>1</td>
									<td>1</td>
									<td>0</td>
									<td>5</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className={styles.dashboard__table_footer}>
						<p>Showing 1 to 10 of 417 entries</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;