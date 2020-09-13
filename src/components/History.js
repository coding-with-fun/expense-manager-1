import React, { useState } from 'react';

function History() {
	const [expandHistory, setExpandHistory] = useState(false);

	let iconExpandClass = '';
	let dataExpandClass = '';

	if (!expandHistory) {
		iconExpandClass = 'heading-closed';
		dataExpandClass = 'data-closed history__data';
	} else {
		iconExpandClass = 'heading-open';
		dataExpandClass = 'data-open history__data';
	}

	return (
		<div className='history'>
			<div
				className='history__heading'
				onClick={() => setExpandHistory(!expandHistory)}
			>
				<div className='title'>History</div>
				<div className='expand-icon'>
					<img
						src='https://img.icons8.com/android/48/000000/collapse-arrow.png'
						alt='collapse-icon'
						className={iconExpandClass}
					/>
				</div>
			</div>
			<div className={dataExpandClass}>
				<div className='history__transaction'>
					<div className='close-btn'>x</div>
					<div className='data'>
						<div className='transaction-name'>Snacks</div>
						<div className='transaction-amount'>&#x20B9; 200</div>
					</div>
				</div>
				<div className='history__transaction'>
					<div className='close-btn'>x</div>
					<div className='data'>
						<div className='transaction-name'>Snacks</div>
						<div className='transaction-amount'>&#x20B9; 200</div>
					</div>
				</div>
				<div className='history__transaction'>
					<div className='close-btn'>x</div>
					<div className='data'>
						<div className='transaction-name'>Snacks</div>
						<div className='transaction-amount'>&#x20B9; 200</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default History;
