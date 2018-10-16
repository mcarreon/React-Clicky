import React from 'react';

function PictureCard (props) {
  return (
    <div className="card pic-card col-3-md ml-2 mr-2 mt-2 p-2" data-id={props.id}>
      <img className="card-img-top" src={props.url}></img>
    </div>
  );
};

export default PictureCard;