import React, { useState } from 'react';
import AlertModal from '../../../common/alert-modal/alertModal';
import { Radio, Slider } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faFilter } from '@fortawesome/free-solid-svg-icons';

import 'antd/dist/antd.css';

const SortOptions = (props) => {
    let [showSortDialog, setSortOptionsVisibility] = useState(false);
    let [showFilterDialog, setFilterDailogVisibility] = useState(false);
    let [selectedSortOption, setSelectedSortOption] = useState(0);

    const onSortClick = () => {
        setSortOptionsVisibility(true);
    }
    const onAlertClose = () => {
        setSortOptionsVisibility(false);
        setFilterDailogVisibility(false);
    }
    const onSortOptionChange = (value) => {
        setSelectedSortOption(value);
    }
    const onFilterClick = () => {
        setFilterDailogVisibility(true);
    }
    const onApply = () => {
        setSortOptionsVisibility(false);
        props.onSortOptionClick(setSelectedSortOption);
    }

    return (
        <div>
            <div className="sort-options">
                Sort By :
            {props.options && props.options.map(option => {
                    return <button
                        className={option.value === props.selectedSortOption ? "sort-option-button-selected" : "sort-option-button"}
                        value={option.value}
                        onClick={() => props.onSortOptionClick(option.value)}>{option.type}</button>
                })}

            </div >
            <div className="options-container">
                <button className="button-sort" onClick={onSortClick}>
                    <FontAwesomeIcon icon={faSort} />
                    <label>Sort</label>
                </button>
                <button onClick={onFilterClick}>
                    <FontAwesomeIcon icon={faFilter} />
                    <label>Filter</label>
                </button>
                <AlertModal confirmation
                    title={`Sort Options`}
                    open={showSortDialog}
                    content={<div>
                        <Radio.Group onChange={onSortOptionChange}
                            value={selectedSortOption}>
                            <Radio value={1} style={{ display: "block", height: "40px" }}>Price -- High Low</Radio>
                            <Radio value={2} style={{ display: "block", height: "40px" }}>Price -- Low High</Radio>
                            <Radio value={3} style={{ display: "block", height: "40px" }}>Discount</Radio>
                        </Radio.Group>
                    </div>}
                    btnTtl="Apply"
                    onYesClick={onApply}
                    onClose={onAlertClose} />
                <AlertModal confirmation
                    title={`Filter Options`}
                    open={showFilterDialog}
                    content={<div>
                        <Slider className="slider"
                            range defaultValue={[0, 100]} />
                    </div>}
                    btnTtl="Apply"
                    onYesClick={onApply}
                    onClose={onAlertClose} />
            </div>
        </div>
    )
}
export default SortOptions;