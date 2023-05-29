import React from 'react';
import PropTypes from 'prop-types';
import styles from './AddButton.scss';

const AddButton = props => (
	<div className="p-10">
		<button className="w-10 h-10 rounded-full bg-neutral-200 text-neutral-800">
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
