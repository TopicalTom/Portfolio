import React, {Component} from 'react';
import { Element} from 'react-scroll';
import "./Skills.scss";

import skillsData from "../../data/skillsData.jsx";

import Nav from "../../components/Nav/Nav";
import SideNav from "../../components/SideNav/SideNav";
import Degrees from "../../components/Degrees/Degrees";
import SkillBlock from "../../components/SkillBlock/SkillBlock";
import Redirect from "../../components/Redirect/Redirect";

export default class Skills extends Component {

    state = {
        allSkills: skillsData,
        filterBy: "None",
        filter: false,     
    }

    handleFilterChange = (e) => {
        this.setState({
            filterBy: e.target.value
        });
        
        if (e.target.value !== "None") {
            this.setState({
                filter: true
            });
        } else {
            this.setState({
                filter: false
            });
        }

        window.scrollTo({ top: 700, behavior: 'smooth' });
    };

    render() {

        const {allSkills, filterBy, filter} = this.state

        const links = [ "Overview", "Design", "Development", "Product" ]
        const filters = [ "None", "Current", "Learning", "Upcoming"]

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