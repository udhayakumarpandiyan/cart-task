import React, { useState } from 'react';
import AlertModal from '../../../common/alert-modal/alertModal';
import { Radio, Slider } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faFilter } from '@fortawesome/free-solid-svg-icons';
import 'antd/dist/antd.css';

const SortOptions = (props) => {
    const radioStyle = {
        display: 'block',
        height: '40px',
    };
    let [showSortDialog, setSortOptionsVisibility] = useState(false);
    let [showFilterDialog, setFilterDailogVisibility] = useState(false);
    let [selectedSortOption, setSelectedSortOption] = useState(props.selectedSortOption);
    let [priceRange, setPriceRange] = useState([100, 10000]);

    const onPriceRangeChange = (value) => {
        setPriceRange(value);
    }
    const onSortClick = () => {
        setSortOptionsVisibility(true);
    }
    const onAlertClose = () => {
        setSortOptionsVisibility(false);
        setFilterDailogVisibility(false);
    }
    const onSortOptionChange = (value) => {
        setSelectedSortOption(value.target ? value.target.value : value);
    }
    const onFilterClick = () => {
        setFilterDailogVisibility(true);
    }
    const onApply = (value) => {
        props.onSortOptionClick(value.target ? value.target.value : value);
        setSortOptionsVisibility(false);

    }
    const onApplyFilter = () => {
        props.onApplyFilter(priceRange);
        setFilterDailogVisibility(false);

    }

    return (

        <div>
            <div className="sort-options">
                Sort By :
            {props.options && props.options.map(option => {
                    return <button key={option.value}
                        className={option.value === props.selectedSortOption ? "sort-option-button-selected" : "sort-option-button"}
                        value={option.value}
                        onClick={() => props.onSortOptionClick(option.value)}>{option.type}</button>
                })}

            </div >
            <div className="options-container">
                <button className="options-button button-sort" onClick={onSortClick}>
                    <FontAwesomeIcon icon={faSort} />
                    <label>Sort</label>
                </button>
                <button className="options-button" onClick={onFilterClick}>
                    <FontAwesomeIcon icon={faFilter} />
                    <label>Filter</label>
                </button>
                <AlertModal confirmation
                    title={`Sort Options`}
                    open={showSortDialog}
                    content={<div>
                        <Radio.Group onChange={onSortOptionChange}
                            value={selectedSortOption}>
                            <Radio value={1}
                                style={radioStyle}>Price -- High Low</Radio>
                            <Radio value={2}
                                style={radioStyle}>Price -- Low High</Radio>
                            <Radio value={3}
                                style={radioStyle}>Discount</Radio>
                        </Radio.Group>
                    </div>}
                    btnTtl="Apply"
                    onYesClick={() => onApply(selectedSortOption)}
                    onClose={onAlertClose} />
                <AlertModal confirmation
                    title={`Filter Options`}
                    open={showFilterDialog}
                    content={<div style={{ textAlign: "center", paddingBottom: "16px" }}>
                        <div className="price-range">
                            <label>&#8377;{priceRange[0]}</label>
                            <label>&#8377;{priceRange[1]}</label>
                        </div>
                        <Slider className="slider" min={100} max={10000}
                            range defaultValue={[100, 10000]}
                            onChange={onPriceRangeChange} />
                        <label>Price</label>
                    </div>}
                    btnTtl="Apply"
                    onYesClick={onApplyFilter}
                    onClose={onAlertClose} />
            </div>
        </div>
    )
}
export default SortOptions;