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
                                value="all"
                                //checked={this.state.filterBy === "all"}
                            />
                            All
                        </label>
                        <label className="filter__checkbox">
                            <input 
                                className="filter__label"
                                type="radio" 
                                name="filter"
                                value="current"
                                //checked={this.state.filterBy === "current"}
                            />
                            Current
                        </label>
                        <label className="filter__checkbox">
                            <input 
                                className="filter__label"
                                type="radio" 
                                name="filter"
                                value="learning"
                                //checked={this.state.filterBy === "learning"}
                            />
                            Learning
                        </label>
                        <label className="filter__checkbox">
                            <input 
                                className="filter__label"
                                type="radio" 
                                name="filter"
                                value="upcoming"
                                //checked={this.state.filterBy === "upcoming"}
                            />
                            Upcoming
                        </label>
                    </div>
                </form>
        );
    }
};