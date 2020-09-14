import React from 'react';

function NewTransaction({ toggle, visibility }) {
	return (
		<div className='new_transaction'>
			<div className='new_transaction__mode'>
				<label htmlFor='income' className='mode__label'>
					<input
						type='radio'
						name='income'
						id='income'
						className='mode__label_input'
					/>
					<div className='mode__label_radio'></div>
					Income
				</label>
				<label htmlFor='expense' className='mode__label'>
					<input
						type='radio'
						name='expense'
						id='expense'
						className='mode__label_input'
					/>
					<div className='mode__label_radio'></div>
					Expense
				</label>
			</div>
		</div>
	);
}

export default NewTransaction;
