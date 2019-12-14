import React from 'react';

const SortOptions = (props) => {
    return (
        <div className="sort-options">
            Sort By :
            {props.options && props.options.map(option => {
                return <button
                    className={option.value === props.selectedSortOption ? "sort-option-button-selected" : "sort-option-button"}
                    value={option.value}
                    onClick={() => props.onSortOptionClick(option.value)}>{option.type}</button>
            })}

        </div >
    )
}
export default SortOptions;