import React from 'react';
import FilterOptions from './FilterOptions';

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <FilterOptions onApplyFilter={props.onApplyFilter} />
        </div >
    )
}
export default Sidebar;