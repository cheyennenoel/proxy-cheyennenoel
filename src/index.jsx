import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Description from './Description';
import Photos from './Photos';
import Reviews from './Reviews';
import Similar from './Similar';

ReactDOM.render(<Description />,  document.getElementById('description'));

ReactDOM.render(<Photos />,  document.getElementById('photos'));

ReactDOM.render(<Reviews />,  document.getElementById('reviews'));

ReactDOM.render(<Similar />,  document.getElementById('similar'));
