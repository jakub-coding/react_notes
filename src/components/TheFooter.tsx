import React from 'react';
import Moment from 'react-moment';

//Interface Props

const TheFooter: React.FC = () => {
	//State

	//Methods
	const dateHandle = () => {
		return Date();
	};

	//Template
	return (
		<div className="the-Footer flex justify-center items-center">
			<p className="text-sm text-gray-900 py-4">&copy; <Moment format="YYYY">{dateHandle()}</Moment> - All rights reserved</p>
		</div>
	);
};

export default TheFooter;