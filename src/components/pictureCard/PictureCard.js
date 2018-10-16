import React from 'react';

function PictureCard (props) {
  return (
    <div className="card pic-card col-3-md ml-4 mr-4 mt-2 p-3" data-id={props.id} onClick={() => props.handlePicClick(props.value)}>
      <img className="card-img-top" src={props.url}></img>
    </div>
  );
};

export default PictureCard;