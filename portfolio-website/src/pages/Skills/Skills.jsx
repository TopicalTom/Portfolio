import React, {Component} from 'react';
import { Element} from 'react-scroll';
import { toast } from 'react-toastify';
import "./Skills.scss";

import skillsData from "../../data/skillsData.jsx";

import Nav from "../../components/Nav/Nav";
import SideNav from "../../components/SideNav/SideNav";
import SkillBlock from "../../components/SkillBlock/SkillBlock";
import Redirect from "../../components/Redirect/Redirect";

export default class Skills extends Component {

    state = {
        allSkills: skillsData,
        filterBy: "All",
        filter: false,
        isOpen: false     
    }


    filterOptions = (e) => {
        if (this.state.isOpen !== true) {
            this.setState({
                isOpen: true
            });
        } else {
            this.setState({
                isOpen: false
            });
        }
    }

    handleFilterChange = (e) => {
        this.setState({
            filterBy: e.target.value
        });
        
        if (e.target.value !== "All") {
            this.setState({
                filter: true
            });
        } else {
            this.setState({
                filter: false
            });
        }

        window.scrollTo({ top: 345, behavior: 'smooth' });
    };

    render() {

        const {allSkills, filterBy, filter, isOpen} = this.state

        const links = [ "Overview", "Product","Design", "Development", "Marketing" ]
        const filters = [ "All", "Current", "Learning", "Upcoming"]

        const notify = () => 
            toast.info(`Filtered By: ${filterBy} Skills`, {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });

        return (
            <>
            <Nav/>
            <main className="skills">
                <div className="skills__container">
                    <aside className="skills__content skills__content--filter">
                        <SideNav 
                            header="Skills"
                            links={links}
                        />
                        <form className="filter">
                            <div 
                                className="filter__current" 
                                onClick={this.filterOptions}>
                                <span>{filterBy}</span>
                                <svg className={`filter__drop filter__drop${isOpen ? "--active" : "--inactive"}`} viewBox="0 0 24 24">
                                    <path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"></path>
                                </svg>
                            </div>
                            {isOpen &&
                                <ul className="filter__selections">
                                    {filters.map(filter => {
                                        return (
                                            <li className="filter__checkbox"><label className="filter__label">
                                                <input 
                                                    className="filter__input"
                                                    type="radio" 
                                                    name="filter"
                                                    value={filter}
                                                    checked={filterBy === filter}
                                                    onChange={this.handleFilterChange}
                                                    onClick={notify}
                                                />
                                                {filter}
                                            </label></li>
                                        )
                                    })}
                                </ul>

                            }
                        </form>
                    </aside>
                    <section className="skills__content skills__content--skills">
                        <Element
                            name="Overview"
                            className="skills__overview">
                            <h1>My Skillset</h1>
                            <p>I'm currently on a mission to build up a cross-functional skillset to take on any problem standing between myself and delivering on great people-driven experiences. As I pursue this goal, I will be updating this space with the skills I have picked up along the way:</p>
                        </Element>
                        <SkillBlock 
                            allSkills={allSkills}
                            filterBy={filterBy}
                            filter={filter}
                        />
                        <Redirect 
                            text=""
                            link="/about"
                            cta="About Me"
                        />
                    </section>
                </div>
            </main>
            </>
        );
    }
};


/*
                        <form className="filter">
                            <h3 className="filter__header">
                                Filter
                            </h3>
                            <ul className="filter__selections">
                                {filters.map(filter => {
                                    return (
                                        <li className="filter__checkbox"><label className="filter__label">
                                            <input 
                                                className="filter__input"
                                                type="radio" 
                                                name="filter"
                                                value={filter}
                                                checked={filterBy === filter}
                                                onChange={this.handleFilterChange}
                                            />
                                            {filter}
                                        </label></li>
                                    )
                                })}
                            </ul>
                        </form>


*/