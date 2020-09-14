import React from 'react';

function NewTransaction({ toggle, visibility }) {
	return (
		<div className='new_transaction'>
			<div className='new_transaction__mode'>
				<label className='mode__label'>
					<input type='radio' name='transaction' id='income' required />
					<span></span>
					<p>Income</p>
				</label>
				<label className='mode__label'>
					<input type='radio' name='transaction' id='expense' required />
					<span></span>
					<p>Expense</p>
				</label>
			</div>

			<div className='new_transaction__input'>
				<form className='input__form'>
					<div className='remark__container'>
						<label htmlFor='remark' className='remark__label'>
							<span className='remark__span'>Remarks</span>
						</label>
						<input
							type='text'
							name='remark'
							id='remark'
							className='remark__input'
							autoComplete='off'
							autoFocus
							required
						/>
					</div>
					<div className='amount__container'>
						<label htmlFor='amount' className='amount__label'>
							<span className='amount__span'>Amount</span>
						</label>
						<input
							type='number'
							name='amount'
							id='amount'
							className='amount__input'
							required
						/>
					</div>
					<button type='submit' onClick={() => toggle(false)}>
						Add
					</button>
				</form>
			</div>
		</div>
	);
}

export default NewTransaction;
