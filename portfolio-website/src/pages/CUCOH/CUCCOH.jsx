import React, {Component} from 'react';
import { Element , animateScroll as scrollSpy} from 'react-scroll'
import "../Project/Project.scss";

import Redirect from "../../components/Redirect/Redirect";
import SideNav from '../../components/SideNav/SideNav';
import Framework from "../../assets/files/CUCOHFramework.png";

class CUCOH extends Component {

    state = {
        links: [
            "Coming Soon"
        ]      
    }
    
    render() {
        return (
            <>
            <main className="project">
                <div className="project__container">
                    <aside className="project__nav">
                        <SideNav 
                            header="Process"
                            links={this.state.links}
                        />
                    </aside>
                    <section className="project__content">
                        <Element 
                            name="Coming Soon"
                            className="project__block">
                                <h1 className="project__heading">CUCOH</h1>
                                <p className="project__paragraph">The Canadian Undergraduate Conference on Healthcare (CUCOH) is a three-day student-run conference at Queen's University held annually in November. CUCOH exposes undergraduate students to a wide array of professions in the healthcare industry through inspiring keynotes, engaging case challenges, interactive workshops and a research competition that showcase the multidisciplinary nature of healthcare.</p>
                                <p className="project__paragraph">I took the initiative to independently create an end-to-end process that would allow our delegates to feel confident in their purchase of the conference experience the rest of the team was building.</p>
                                <img className="project__image" src={Framework} alt=""/>
                                <p className="project__paragraph">This goal was accomplished by implementing a slotting framework that enabled our team to preemptively slot delegates into our conference experiences and then by improving the way information regarding a delegates’ experience was communicated throughout their journey.</p>
                        </Element>
                        <Redirect 
                            link="/skills"
                            cta="View Skills"
                        />
                    </section>
                </div>
            </main>
            </>
        );

    }
};

export default CUCOH;