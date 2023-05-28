import React from 'react';
import PropTypes from 'prop-types';
import styles from './AddButton.scss';

const AddButton = props => (
	<div className="p-10">
		<button className="w-20 h-20 rounded-full bg-neutral-200 hover:bg-slate-500 text-neutral-800">
			+
		</button>
	</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class AddButton extends React.Component {
//   render() {
//     return <div>This is a component called AddButton.</div>;
//   }
// }

const AddButtonPropTypes = {
	// always use prop types!
};

AddButton.propTypes = AddButtonPropTypes;

export default AddButton;
