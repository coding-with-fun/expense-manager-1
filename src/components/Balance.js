import React, { Fragment, useState } from 'react';
import NewTransaction from './NewTransaction';

function Balance() {
	const [addTransaction, setAddTransaction] = useState(true);

	return (
		<Fragment>
			{!addTransaction ? (
				<>
					<div className='balance'>
						<div className='balance__heading'>
							<div className='balance__heading__title'>
								<div className='title'>Your Balance</div>
								<div className='amount'>&#x20B9; 4000.00</div>
							</div>
							<img
								src='https://img.icons8.com/plasticine/100/000000/plus-2-math.png'
								alt='Add New Entry'
								onClick={() => setAddTransaction(true)}
							/>
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
				</>
			) : (
				<NewTransaction
					toggle={setAddTransaction}
					visibility={addTransaction}
				/>
			)}
		</Fragment>
	);
}

export default Balance;
