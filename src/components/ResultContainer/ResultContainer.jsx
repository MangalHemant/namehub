import React from 'react'
import NameCard from '../NameCard/NameCard';
import './ResultContainer.css';

const ResultContainer = ({ suggestedNames }) => {

    const allNames = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />;
    });


    return (
        <div className="result-container">
            {allNames}
        </div>
    )
}



export default ResultContainer