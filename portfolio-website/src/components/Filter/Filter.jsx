import React, { Component } from 'react';
import "./Filter.scss";

export default class Filter extends Component {

    render() {
        return (
                <form className="filter">
                    <p 
                        className="filter__header">
                        Filter
                    </p>
                    <div className="filter__selections">
                        <label className="filter__checkbox">
                            <input 
                                className="filter__label"
                                type="radio" 
                                name="filter"
                                value="Design"
                            />
                            All
                        </label>
                        <label className="filter__checkbox">
                            <input 
                                className="filter__label"
                                type="radio" 
                                name="filter"
                                value="Design"
                            />
                            Current
                        </label>
                        <label className="filter__checkbox">
                            <input 
                                className="filter__label"
                                type="radio" 
                                name="filter"
                                value="Design"
                            />
                            Learning
                        </label>
                        <label className="filter__checkbox">
                            <input 
                                className="filter__label"
                                type="radio" 
                                name="filter"
                                value="Design"
                            />
                            Upcoming
                        </label>
                    </div>
                </form>
        );
    }
};