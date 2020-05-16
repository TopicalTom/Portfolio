import React, {Component} from 'react';
import * as Scroll from 'react-scroll';
import { Element , animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import "../Project/Project.scss";

import Redirect from "../../components/Redirect/Redirect";
import SideNav from '../../components/SideNav/SideNav';
import Layers from "../../assets/layers/HomediateLayer.png";

class Homediate extends Component {

    state = {
        links: [
            "Coming Soon"
        ]      
    }

    componentDidMount() {
        scrollSpy.update();
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
                                <h1 className="project__heading">Homediate</h1>
                                <p className="project__paragraph">Homediate is a React Native that empowers the plan-creation process by connecting friends who are actively wanting to make plans so that they can collectively support one-another through the plan creation process before sharing it within their social circles.</p>
                                <img className="project__image" src={Layers}/>
                                <p className="project__paragraph">TouchBase is a React Native that empowers the plan-creation process by connecting friends who are actively wanting to make plans so that they can collectively support one-another through the plan creation process before sharing it within their social circles.</p>
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

export default Homediate;