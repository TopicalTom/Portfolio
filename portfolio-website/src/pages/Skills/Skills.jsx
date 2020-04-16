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
        filterBy: "All",
        filter: false,
        links: [ "Overview", "Design", "Development", "Product" ]      
    }

    resetFilter = (e) => {
        this.setState({
            filterBy: e.target.value,
            filter: false
        });

        window.scrollTo({ top: 700, behavior: 'smooth' });
    };

    handleFilterChange = (e) => {
        this.setState({
            filterBy: e.target.value,
            filter: true
        });

        window.scrollTo({ top: 700, behavior: 'smooth' });
    };

    render() {

        const {links, allSkills, filterBy, filter} = this.state

        return (
            <>
            <Nav/>
            <main className="skills">
                <div className="skills__container">
                    <aside className="skills__content skills__content--filter">
                        <SideNav links={links}/>
                        <form className="filter">
                            <p className="filter__header">
                                Filter
                            </p>
                            <div className="filter__selections">
                                <label className="filter__checkbox">
                                    <input 
                                        className="filter__label"
                                        type="radio" 
                                        name="filter"
                                        value="All"
                                        checked={filterBy === "All"}
                                        onChange={this.resetFilter}
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
                                    onChange={this.handleFilterChange}
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
                                    onChange={this.handleFilterChange}
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
                                    onChange={this.handleFilterChange}
                                />
                                Expected
                                </label>
                            </div>
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
                            text="Do I have a skill you need?"
                            link="/contact"
                            cta="Let's Chat"
                        />
                    </section>
                </div>
            </main>
            </>
        );
    }
};