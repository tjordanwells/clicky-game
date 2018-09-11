import React from 'react';

const ImageCard = props => (
  <img src={props.image} alt={props.name} data-id={props.id} className="img-thumbnail characters m-3"></img>
);

export default ImageCard;