import React from 'react';
import { Slider } from 'antd';

const FilterOptions = (props) => {
    return (
        <div className="filter-options">
            <label className="filters">Filters</label>
            <Slider className="slider"
                range defaultValue={[0, 100]} />
            <button className="apply-button">Apply</button>
            <div style={{ height: '100%' }}></div>
        </div >
    )
}
export default FilterOptions;
