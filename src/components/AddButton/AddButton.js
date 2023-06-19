import React from 'react';
import PropTypes from 'prop-types';
import styles from './AddButton.scss';

const AddButton = props => (
	<div className="p-10">
		<button className="flex justify-center items-center w-10 h-10 rounded-full bg-neutral-200 text-neutral-800 shadow">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
				 stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"/>
			</svg>
		</button>
	</div>
);

export default AddButton;
