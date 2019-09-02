import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fonstawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default props =>
  props.image.map((image, i) =>
    <div key={i} className='fade in' >
      <div
        onClick={() => props.removeImage(image.public_id)}
        className='delete'
      >

      
    </div>
)
