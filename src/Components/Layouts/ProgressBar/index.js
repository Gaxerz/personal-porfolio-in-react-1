import React from 'react';
import Certificates from '../Certificates';

import './progressbar.css';

const ProgressBar = ({ name, done, src, color }) => {
	return (
		<div className='progressBar-area'>
			<Certificates name={name} src={src} height='50px' width='50px' />
			<div className='sent_invitation'>

				<div className="progress">
					<div className="progress-done" style={{ opacity: 1, width: `${done}%`, background: `${color}` }} >
						{done}%
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProgressBar;