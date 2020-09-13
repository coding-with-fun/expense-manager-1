import React from 'react';

function Balance() {
	return (
		<div className='balance'>
			<div className='balance__heading'>
				<div className='title'>Your Balance</div>
				<div className='amount'>&#x20B9; 4000.00</div>
			</div>
			<div className='balance__info'>
				<div className='income'>
					<div className='income__heading'>Income</div>
					<div className='income__amount'>&#x20B9; 200.00</div>
				</div>
				<div className='expense'>
					<div className='expense__heading'>Expense</div>
					<div className='expense__amount'>&#x20B9; 200.00</div>
				</div>
			</div>
		</div>
	);
}

export default Balance;
