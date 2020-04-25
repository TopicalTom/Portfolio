import React, {Component} from 'react';
import { Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
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
                                        <li className="filter__checkbox"><label>
                                            <input 
                                                className="filter__label"
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
                            <p>My goal is to keep on learning new skills to gain a better understading of how each discipline comes together to create digital products. Due to this I'll be updating this space with my current progress. In the pursuit of that goal I have acquired the following certificates and skills:</p>
                            <Degrees />
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