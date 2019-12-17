import React from 'react';
import PropTypes from 'prop-types';

const TitleComponent = ({title, updateTitle}) => {
    return(
        <div>
            <h1>{title}</h1>
            <input type="text" name="title" id="title" onChange={(e) => updateTitle(e.target.value)}/> 
        </div>
    );
};

TitleComponent.propTypes = {
    title: PropTypes.string.isRequired,
    updateTitle: PropTypes.func.isRequired,
};

export default TitleComponent;
