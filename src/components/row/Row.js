import React, { Component } from 'react';
import Instructions from '../instructions';
import Container from '../container';
import Pictures from '../../pictures.json';
import PictureCard from '../pictureCard';

function Row (props) {
    return (
      <div className="row mt-2 justify-content-md-center">{props.children}</div>
    );
}

export default Row;