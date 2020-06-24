import React, {Component} from 'react';
import { Element} from 'react-scroll';
import { toast } from 'react-toastify';
import "./Skills.scss";

import skillsData from "../../data/skillsData.jsx";

import Nav from "../../components/Nav/Nav";
import SideNav from "../../components/SideNav/SideNav";
import SkillBlock from "../../components/SkillBlock/SkillBlock";
import Redirect from "../../components/Redirect/Redirect";
import Filter from "../../components/Filter/Filter";

export default class Skills extends Component {

    state = {
        allSkills: skillsData,
        filterBy: "All",
        filter: false  
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
        
        toast.info(`Filtered By: ${e.target.value} Skills`, {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        window.scrollTo({ top: 345, behavior: 'smooth' });
    };

    render() {

        const {allSkills, filterBy, filter} = this.state

        const links = [ "Overview", "Product","Design", "Development", "Marketing" ]

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
                        <div className="skills__filter skills__filter--web">
                            <Filter
                                filterBy={filterBy} 
                                filter={filter}
                                handleFilterChange={this.handleFilterChange}
                            />
                        </div>
                    </aside>
                    <section className="skills__content skills__content--skills">
                        <Element
                            name="Overview"
                            className="skills__overview">
                            <h1>My Skillset</h1>
                            <p>I'm currently on a mission to build up a cross-functional skillset to take on any problem standing between myself and delivering on great people-driven experiences. As I pursue this goal, I will be updating this space with the skills I have picked up along the way:</p>
                            <div className="skills__filter skills__filter--mobile">
                                <Filter 
                                    filterBy={filterBy} 
                                    filter={filter}
                                    handleFilterChange={this.handleFilterChange}
                                />
                            </div>
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