import React from 'react';
import "../Project/Project.scss";
import "./TouchBase.scss"


const TouchBase = () => {
    return (
        <>
        <section className="touch-base">

        </section>
        <main className="project">
            <div className="project__container">
                <div className="project__nav">
                    <aside>
                        <p>Process</p>
                        <ul className="project__links">
                            <li>
                                <a href="">
                                    Discovery
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Research
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Frame
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    
                                </a>
                            </li>
                        </ul>
                    </aside>
                </div>
                <main className="project__content">
                    <article>
                        <h1>TouchBase</h1>
                        <p>TouchBase is an iOS app that allows users to seamlessly transition from discovering, making, and sharing plans for in-person interactions. Rally empowers this process by connecting friends who are actively wanting to make plans so that they can collectively support one-another through the plan creation process before sharing it within their social circles.</p>
                        <p>TouchBase is a solo venture so I oversaw all aspects of this project from research, ideation, design, testing and development.</p>
                    </article>
                    <article>
                        <h2>The Problem</h2>
                        <p>After moving out of my residence hall from first year, I found it was harder to figure out what all my friends were up to at a moments notice as I wasn’t able to just head across the hall and ask them in person. I now had to message them through a variety of channels in order to figure out if there was anything going on that night. Throughout the years, and especially after graduating, this problem has only worsened as we have even less free time and become increasingly unaware of when we can meetup with our friends to do something fun. </p>
                        <p>Making plans with friends is analogous to playing Go-Fish where the “cards” are one’s current interests or availability and the “game” is the process of finding common ground. The inherent challenge of Go-Fish is that we cannot see the cards of the other player and the only way to determine what they have is to explicitly ask.</p>
                    </article>
                    <article>
                        <h2>Research Plan</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </article>
                </main>
            </div>
        </main>
        </>
    );
};

export default TouchBase;