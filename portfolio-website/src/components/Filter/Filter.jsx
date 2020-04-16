import React, { Component } from 'react';
import "./Filter.scss";

const Filter = (props) => {

    const {filterBy, resetFilter, handleFilterChange} = props

        return (
            <form className="filter">
                            <p className="filter__header">
                                Skills
                            </p>
                            <div className="filter__selections">
                                <label className="filter__checkbox">
                                <input 
                                    className="filter__label"
                                    type="radio" 
                                    name="filter"
                                    value="All"
                                    checked={filterBy === "All"}
                                    onChange={resetFilter}
                                />
                                All
                                </label>
                                <label className="filter__checkbox">
                                <input 
                                    className="filter__label"
                                    type="radio" 
                                    name="filter"
                                    value="Current"
                                    checked={filterBy === "Current"}
                                    onChange={handleFilterChange}
                                />
                                Current
                                </label>
                                <label className="filter__checkbox">
                                <input 
                                    className="filter__label"
                                    type="radio" 
                                    name="filter"
                                    value="Learning"
                                    checked={filterBy === "Learning"}
                                    onChange={handleFilterChange}
                                />
                                Learning
                                </label>
                                <label className="filter__checkbox">
                                <input 
                                    className="filter__label"
                                    type="radio" 
                                    name="filter"
                                    value="Expected"
                                    checked={filterBy === "Expected"}
                                    onChange={() => handleFilterChange}
                                />
                                Expected
                                </label>
                            </div>
                        </form>
        );
};

export default Filter;