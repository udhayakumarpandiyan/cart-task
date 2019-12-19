import React, { useState } from 'react';
import { Slider } from 'antd';

const FilterOptions = (props) => {
    const [priceRange, setPriceRange] = useState([100, 10000]);
    const onPriceRangeChange = (value) => {
        setPriceRange(value);
    }
    const onApplyFilter = () => {
        props.onApplyFilter(priceRange);
    }
    return (
        <div className="filter-options">
            <label className="filters">Filters</label>
            <div className="price-range">
                <label>&#8377;{priceRange[0]}</label>
                <label>&#8377;{priceRange[1]}</label>
            </div>
            <Slider className="slider" min={100} max={10000}
                range defaultValue={[100, 10000]}
                onChange={onPriceRangeChange} />
            <label>Price</label>
            <button className="apply-button" onClick={onApplyFilter}>Apply</button>
            <div style={{ height: '100%' }}></div>
        </div >
    )
}
export default FilterOptions;
