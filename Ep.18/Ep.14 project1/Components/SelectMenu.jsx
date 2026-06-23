import React from 'react';

const SelectMenu = () => {
    return (
        <select className='filter-by-region'>
            <option hidden="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Africa">America</option>
            <option value="Africa">Asia</option>
            <option value="Africa">Europe</option>
            <option value="Africa">Oceania</option>            
        </select>
    );
}

export default SelectMenu;
