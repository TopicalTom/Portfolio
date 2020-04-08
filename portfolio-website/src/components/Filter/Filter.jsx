import React, { Component } from 'react';
import "./Filter.scss";

export default class Filter extends Component {

    render() {
        return (
            <aside className="filter">
                <form className="filter__container">
                    <p 
                        className="filter__header">
                        Discipline
                    </p>
                    <div className="filter__selections">
                        <label className="filter__checkbox">
                            <input 
                                className="filter__label"
                                type="checkbox" 
                                name="Design"
                                value="Design"
                            />
                            Design
                        </label>
                        <label className="filter__checkbox">
                            <input 
                                className="filter__label"
                                type="checkbox" 
                                name="Design"
                                value="Design"
                            />
                            Development
                        </label>
                        <label className="filter__checkbox">
                            <input 
                                className="filter__label"
                                type="checkbox" 
                                name="Design"
                                value="Design"
                            />
                            Product
                        </label>
                    </div>
                    <br></br>
                    <p 
                        className="filter__header">
                        Filter
                    </p>
                    <div className="filter__selections">
                    <label className="filter__checkbox">
                            <input 
                                className="filter__label"
                                type="checkbox" 
                                name="Design"
                                value="Design"
                            />
                            All
                        </label>
                        <label className="filter__checkbox">
                            <input 
                                className="filter__label"
                                type="checkbox" 
                                name="Design"
                                value="Design"
                            />
                            Current
                        </label>
                        <label className="filter__checkbox">
                            <input 
                                className="filter__label"
                                type="checkbox" 
                                name="Design"
                                value="Design"
                            />
                            Upcoming
                        </label>
                    </div>
                </form>
                <br></br>
                <div 
                    className="filter__reset">
                    Reset
                </div>
            </aside>
        );
    }
};