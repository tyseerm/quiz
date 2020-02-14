import React from 'react';

const ProgressBar = ({ percentage }) => (
  <div className='card m-3 p-3 sticky-top border-dark'>
    <h4 className='crard-title'>Your progress:</h4>  
    <div className='progress'>
      <div className='progress-bar' style={{ width: percentage + '%' }}>
        {percentage}%
      </div>
    </div>
  </div>
);

export default ProgressBar;
