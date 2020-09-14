import React from 'react';

function NewTransaction({ toggle, visibility }) {
	return (
		<div className='new_transaction'>
			<div className='new_transaction__mode'>
				<label className='mode__label'>
					<input type='radio' name='transaction' id='income' />
					<span></span>
					<p>Income</p>
				</label>
				<label className='mode__label'>
					<input type='radio' name='transaction' id='expense' />
					<span></span>
					<p>Expense</p>
				</label>
			</div>
		</div>
	);
}

export default NewTransaction;
