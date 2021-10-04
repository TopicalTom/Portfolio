import React, {Component} from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import "../Project/Project.scss";

// Components
import Hero from "../../components/Hero/Hero";
import Quotes from "../../components/Quotes/Quotes";
import SideNav from '../../components/SideNav/SideNav';
import Redirect from "../../components/Redirect/Redirect";
import Takeaway from "../../components/Takeaway/Takeaway";
import Step from "../../components/Step/Step";
import Tag from "../../components/Tag/Tag";
import Selector from "../../components/Selector/Selector";
import Stats from "../../components/Stats/Stats";
import Palette from "../../components/Palette/Palette";
import PersonaCarousel from "../../components/PersonaCarousel/PersonaCarousel";
import Shopping from "../../components/Shopping/Shopping";
import DynamicCards from '../../components/DynamicCards/DynamicCards';
import Prototype from '../../components/Prototype/Prototype';
import Skip from "../../components/Skip/Skip";
import VideoCarousel from '../../components/VideoCarousel/VideoCarousel';

// Data
import projectsData from "../../data/projectsData";

class Shop extends Component {

    state = {
        links: [
            "Overview",
            "Problem",
            "Define",
            "Research",
            "Ideation",
            "Constraints",
            "Design",
            "Reflection",
            "Next Steps"
        ],        
        color: projectsData[2].color,
        palette: projectsData[2].palette,
        stats: projectsData[2].stats,
        preview: projectsData[2].preview,
        assets: projectsData[2].assets,
        personas: projectsData[2].personas,
        quotes: projectsData[2].quotes,
        videos: projectsData[2].videos,
        features: projectsData[2].features
    }

    handleScroll = (e) => {
        scroller.scrollTo(e.target.value, {
            duration: 500,
            delay: 100,
            offset: -120,
            smooth: true
        });
    }
    
    render() {

        const {links, color, stats, preview, assets, features, videos, quotes, palette, personas} = this.state
        const {map, current, next} = assets
        const {consumers, merchants} = quotes

        return (
            <>
            <Hero 
                project="shop"
                preview={preview}
                type="app"
            />
            <main className="project">
                <div className="project__container">
                    <aside className="project__nav">
                        <SideNav 
                            header="Shop"
                            links={links}
                        />
                    </aside>
                    <section className="project__content">
                        <Element 
                            name="Overview"
                            className="project__block">
                            <div 
                                className="project__sub-block">
                                <h1>Shop</h1>
                                <Tag 
                                    type="UX Improvement"
                                    role="Independent"
                                    duration="Jul 26 - Aug 24, 2020"
                                    color={color}
                                />
                                <p>For my design submission I took on the return process for online shopping which led me to do a UX improvement for the pre-existing Shop app.</p>
                                <p>At a high-level, I focused on how consumers go about requesting a product return through the Shop app, while reducing the app barrier of entry by leveraging the App Clips infrastructure to allow non-users to access the core features I designed.</p>
                                <Skip 
                                    links={links}
                                    handleScroll={this.handleScroll}
                                />
                            </div>
                            <div  
                                className="project__sub-block">
                                <Prototype video={preview} />
                            </div>
                        </Element>
                        <Element
                            name="Problem" 
                            className="project__block">
                            <div
                                className="project__sub-block">
                                <Step 
                                    step="Problem"
                                    color={color}
                                />
                                <h2>IRL vs. URL Shopping</h2>
                                <p>
                                    Recently I suggested to my sister (a front-line healthcare worker) that she check out 
                                    <a className="project__external-link" href="https://vessifootwear.ca/"> Vessi Footwear</a>
                                    , a brand I love, as she was in need of shoes that were easy to clean, comfortable and would pair (pun intended) well with her working environment.
                                </p>
                                <p>Unfortunately, when she received her order, the arch support wouldn’t work for her long shifts, and even though she was a fan of the product look she had to return them.</p>
                                <Shopping 
                                    color={color}
                                />
                                <p>While Vessi is an online-only store, and my sister wouldn’t have had any opportunity to try the product out first anyway, it had me thinking if businesses that were primarily brick-and-mortar have experienced higher returns, among other issues, in their shift to being online.</p>
                                <Takeaway 
                                    type="OBSERVATION"
                                    details="With a drastic shift to online shopping, it's more difficult to know whether a product is what someone wants as they can't physically test them out."
                                    color={color}
                                />
                            </div>
                        </Element>
                        <Element
                            name="Define" 
                            className="project__block">
                            <div  
                                className="project__sub-block">
                                <Step 
                                    step="Define"
                                    color={color}
                                />
                                <h2>Why We Should Care</h2>
                                <p>It seems almost counterintuitive to make the process of making a return less obtrusive, as you would be losing a sale, but it is in-fact beneficial for merchants in the long-run.</p>
                                <p>
                                    Looking over data collected by
                                    <a className="project__external-link" href="https://blog.hubspot.com/service/importance-customer-service"> HubSpot</a>,
                                    <a className="project__external-link" href="https://www.smartinsights.com/ecommerce/ecommerce-strategy/37-indispensable-ecommerce-stats-to-inform-your-2017-strategy/"> Smart Insights </a>and, 
                                    <a className="project__external-link" href="https://blog.globalwebindex.com/chart-of-the-week/online-shopping-returns/"> Global Web Index</a>, 
                                    return policies and the process itself, are deciding factors for whether a customer makes a purchase in the first place and can even lead to a greater 
                                    <a className="project__external-link" href="https://blog.hubspot.com/service/how-to-calculate-customer-lifetime-value"> CLTV</a>
                                    . Some highlights in this data are the following:
                                </p>
                                <Stats 
                                    stats={stats}
                                />
                                <p>With an improved return experience clearly having tangible benefits for both customers and merchants, the question I asked myself was:</p>
                                <Takeaway 
                                    type="HOW MIGHT WE"
                                    details="Ensure customers that have received a product that isn't up to their standards or expectations maintain a positive experience/impression of a business."
                                    color={color}
                                />
                            </div>
                        </Element>
                        <Element
                            name="Research" 
                            className="project__block">
                            <div  
                                className="project__sub-block">
                                <Step 
                                    step="Research"
                                    color={color}
                                />
                                <h2>D2C Shopping Dynamics</h2>
                                <p>Given current events I decided to focus my research on direct to consumer (D2C) merchants as, unlike established big brands or wholesale merchants, they are likely to have been impacted the most in the shift to online and might not have the infrastructure in place for handling online product returns.</p>
                                <p>My approach for gaining context in this space was to conduct three consumer interviews with people in my network while compiling as much information on the merchant perspective to supplement my lack of direct interviews on that front:</p>
                            </div>
                            <div  
                                className="project__sub-block">
                                <h2>Consumer Lens</h2>
                                <p>The biggest pain points for consumers came from the whole process feeling too involved which was only exacerbated by the qualifiers for return requiring manual guess-and-check work for eligibility.</p>
                                <p>Distilling all of the quotes down, the key words that came to light were accountable, personable, convenience and clarity for what consumers sought in an ideal online shopping return experience. Some of the quotes that led to these insights are provided below:</p>
                            </div>
                            <Quotes 
                                size={consumers.length}
                                quotes={consumers}
                                color={color}
                            />
                            <div  
                                className="project__sub-block">
                                <h2>Merchant Lens</h2>
                                <p>
                                    Having volunteered with the 
                                    <a
                                        className="project__external-link" 
                                        href="https://digitalmainstreet.ca/shophere/"
                                    > Shop HERE </a>
                                    initiative over the summer I had some prior experience with Shopify platform. However, for areas such as shipping, returns and refunds, I referred to the
                                    <a
                                        className="project__external-link" 
                                        href="https://www.youtube.com/channel/UCSG_dVp-hi_hWP-Z7DlpRgQ"
                                    > Shopify Help Center </a>
                                    YouTube account to better understand the process merchants go through in making a return.
                                </p>
                                <p>
                                    As for the merchant experience, I ventured into the 
                                    <a
                                        className="project__external-link" 
                                        href="https://community.shopify.com/c/Shopify-Discussion/How-to-handle-exchanges-for-my-online-store/td-p/318926"
                                    > Community Forum </a>
                                    and looked into posts about Exchanges / Returns and found the following quotes to fill in my gaps in knowledge that would have been covered through interviews:
                                </p>
                            </div>
                            <Quotes 
                                size={merchants.length}
                                quotes={merchants}
                                color={color}
                            />
                            <div
                                className="project__sub-block">
                                <p>I was surprised to learn that while returns and refunds were largely easy to accomplish within the Shopify ecosystem, the exchange process had some friction with merchants having to find workarounds (like using a Shopify POS system to handle online exchanges) or pay extra for third-party apps in order to provide an ideal exchange experience for their customers.</p>
                            </div>
                            <div
                                className="project__sub-block">
                                <h2>Frame of Reference</h2>
                                <p>Using the quotes I collected, I constructed two personas for use in ensuring the needs, frustrations and constraints of both parties were considered during my ideation and designing phases of this challenge. The two personas can be differentiated based on their role in the return process:</p>
                                <PersonaCarousel 
                                    personas={personas}
                                    color={color}
                                />
                                <p>From there, I mapped out the full return process from the perspective of both personas to understand how both parties interact in order to visualize problem areas and begin to outline areas of opportunity in addressing this problem:</p>
                                <img 
                                    className="project__image" 
                                    src={map} 
                                    alt=""
                                />
                                <Takeaway
                                    type="KEY INSIGHT"
                                    details="Both consumers and merchants have to engage with multiple touchpoints and inputs in order to complete an online product return which makes the process feel like an inconvenience. This problem is exacerbated by a lack of direction and clarity on how to proceed on the consumer-end, and a lack of in-service features for merchants to use."
                                    color={color}
                                />
                            </div>
                        </Element>
                        <Element
                            name="Ideation" 
                            className="project__block">
                            <div 
                                className="project__sub-block">
                                <Step 
                                    step="Ideation"
                                    color={color}
                                />
                                <h2>Less Hurdles, More Helping</h2>
                                <p>Email functions as a great touchpoint for consumers and merchants to facilitate a product return due to its low-barrier of entry, but it is still limiting as there is no structure to facilitate the interaction.</p>
                                <p>In approaching how to improve this experience, I looked to how merchants currently get around these shortcomings in order to provide their customers with a great return experience, for inspiration and guidance.</p>
                            </div>
                            <div
                                className="project__sub-block">
                                <h2>Current Solutions</h2>
                                <p>
                                    While looking into the consumer-facing return experience I stumbled across some Shopify stores using the app integration
                                        <a
                                            className="project__external-link" 
                                            href="https://loopreturns.com/exchanges"
                                            > Loop
                                        </a>
                                        . Essentially, Loop (below) provides a more user-friendly approach to making a return, with additional
                                        <a 
                                            className="project__external-link" 
                                            href="https://loopreturns.com/merchant-experience/"
                                            > return / exchange automation  
                                        </a> that fits into a merchants’ workflow.
                                </p>
                                <p>
                                    Diving deeper into the Shopify App ecosystem I also found the apps 
                                    <a
                                        className="project__external-link" 
                                        href="https://apps.shopify.com/returns-center-by-aftership?surface_detail=orders-and-shipping&surface_inter_position=1&surface_intra_position=20&surface_type=category"
                                        > AfterShip </a>
                                    (below), 
                                    <a
                                        className="project__external-link" 
                                        href="https://apps.shopify.com/exchange-it?surface_detail=orders-and-shipping-returns-and-exchanges&surface_inter_position=1&surface_intra_position=12&surface_type=category"
                                        > Exchange It</a>
                                    , 
                                    <a
                                        className="project__external-link" 
                                        href="https://apps.shopify.com/returnly?surface_detail=orders-and-shipping-returns-and-exchanges&surface_inter_position=1&surface_intra_position=6&surface_type=category"
                                        > Returnly </a>
                                    and even some users citing the
                                    <a
                                        className="project__external-link" 
                                        href="https://help.shopify.com/en/manual/sell-in-person/pos-classic/transactions/orders/exchange-item?wvideo=u7kazzerc2"
                                        > Shopify POS </a> 
                                    app as a workaround to handle their online exchanges. 
                                </p>
                                <VideoCarousel
                                    firstVideo={videos[1].src}
                                    firstTitle={videos[1].title}
                                    secondVideo={videos[2].src}
                                    secondTitle={videos[2].title}
                                    color={color}
                                />
                            </div>
                            <div
                                className="project__sub-block">
                                <h2>Shop App</h2>
                                <p>The great thing about the solutions explicitly shown above is that they both have a consumer-facing touchpoint that allows merchants to collect the data they need to effectively complete a refund or exchange. However, in both cases users need to first look up the order they want to return before they can begin the process.</p>
                                <p>This had me thinking of the app  
                                    <a className="project__external-link" href="https://shop.app/"> Shop </a>
                                    (below), as a potential place to facilitate a return request, since the arrival of a package often acts as the triggering event for a consumer to consider making a return:
                                </p>
                                <iframe 
                                    title={videos[0].title}
                                    className="project__video"  
                                    src={videos[0].src} 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen>
                                </iframe>
                                <p>Shop is also uniquely positioned as a consumer-facing touchpoint within the Shopify ecosystem that already handles a user's orders and could enable users to skip that initial step of searching for an order email required in other current solutions.</p>
                                <p>Furthermore, Shop doesn’t currently facilitate the return process any more effectively than someone who doesn't have the app. It just provides the return policy and an email address to contact, so there is clear room for improvement:</p>
                                <Selector
                                    title={current.title}
                                    videoOne={current.videoOne}
                                    captionOne={current.captionOne}
                                    labelOne={current.labelOne}
                                    videoTwo={current.videoTwo}
                                    captionTwo={current.captionTwo}
                                    labelTwo={current.labelTwo}
                                    color={color}
                                />
                            </div>
                            <div
                                className="project__sub-block">
                                <h2>Leveraging Tech</h2>
                                <p>There is a clear opportunity to improve this process, however, improving the Shop app would only help current Shop users. To make this worthwhile, there had to be a way to provide the same level of assistance to people outside the app.</p>
                                <p>
                                    Luckily, with
                                    <a className="project__external-link"href="https://www.apple.com/ios/ios-14-preview/"> iOS 14 </a>
                                    Apple is introducing a new feature known as
                                    <a className="project__external-link" href="https://developer.apple.com/app-clips/"> App Clips </a>
                                    which would allow some non-Shop users to access key features of the Shop experience and potentially become users themselves:
                                </p>
                                <iframe 
                                    title={videos[3].title}
                                    className="project__video"  
                                    src={videos[3].src}  
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen>
                                </iframe>
                                <Takeaway
                                    type="FEATURE POSITIONING"
                                    details="Shop can deliver on effortless in-app returns by providing explicit item eligibility and two-way accountability so consumers can feel confident making online purchases without the usual unknowns of the return process."
                                    color={color}
                                />
                            </div>
                        </Element>
                        <Element
                            name="Constraints" 
                            className="project__block">
                            <div className="project__sub-block">
                                <Step 
                                    step="Constraints"
                                    color={color}
                                />
                                <h2>Building on Foundations</h2>
                                <p>Since my focus was improving the UX of a pre-existing app, it was important to ensure my additions honored the “look” and “values” of the Shop brand.</p>
                                <p>This was important as it would allow me to prevent the transition from current to new additions from feeling jarring and would enable me to tap into the mental model of current users of the Shop app.</p>
                            </div>
                            <div
                                className="project__sub-block">
                                <h2>Brand Look</h2>
                                <p>
                                    Before starting my designs, I took stock of any unique fonts (
                                    <a 
                                        className="project__external-link" 
                                        href="https://gt-walsheim.com/"
                                        >GT Walsheim Pro
                                    </a>
                                    ), colors (below), interaction states, etc. the app uses. In the cases where there wasn’t an example of what I needed in the current Shop app, I referred to Shopify’s design system
                                    <a 
                                        className="project__external-link" 
                                        href="https://polaris.shopify.com/"
                                        > Polaris </a>
                                     to infer design decisions that would feel right within a Shopify product:</p>
                                <Palette 
                                    palette={palette}
                                />
                            </div>
                            <div
                                className="project__sub-block">
                                <h2>Ensuring Privacy</h2>
                                <p>
                                    The Shop app emphasizes its commitment to 
                                    <a className="project__external-link" href="https://shop.app/privacy"> user privacy </a>
                                    so opening up the order details to anyone who might happen to scan a QR code on the package, seems like a major oversight.</p>
                                <p>
                                    To tackle this, I looked into the capabilities of App Clips and there is a 
                                    <a className="project__external-link" href="https://developer.apple.com/app-clips/#:~:text=There%20is%20a%20new%20location,where%20it%20says%20it%20is."> Location Verification API </a>
                                    that would allow the app to check to make sure the package is at the users location to enable access. This would need to be utilized in addition to oAuth services to check the users email as a two-factor approach to ensuring the order details are secured.
                                </p>
                                <Takeaway
                                    type="DESIGN GOAL"
                                    details="Lessen the support ticket workload for D2C merchants by leveraging the Shop app to improve the return experience for current and potential Shop users."
                                    color={color}
                                />
                            </div>
                        </Element>
                        <Element
                            name="Design" 
                            className="project__block">
                            <div 
                                className="project__sub-block">
                                <Step 
                                    step="Design"
                                    color={color}
                                />
                                <h2>One-Stop Shop</h2>
                                <p>Taking all of this information into consideration, what would an improved product return process look like within the Shop app?</p>
                                <p>Thanks for asking, because I have animated the rough task flow that both users and guests go through on their journey to return a product they were less than satisfied with below:</p>
                                {features.map(item => {
                                    const {title, videoOne, captionOne, labelOne, videoTwo, captionTwo, labelTwo} = item
                                    return (
                                        <Selector
                                            title={title}
                                            videoOne={videoOne}
                                            captionOne={captionOne}
                                            labelOne={labelOne}
                                            videoTwo={videoTwo}
                                            captionTwo={captionTwo}
                                            labelTwo={labelTwo}
                                            color={color}
                                        />
                                    )
                                })}
                            </div>
                        </Element>
                        <Element
                            name="Reflection" 
                            className="project__block">
                                <Step 
                                    step="Reflection"
                                    color={color}
                                />
                                <h2>Constraints & Communication</h2>
                                <p>This project was a great testament to working remotely, in the cases of conducting remote interviews and usability tests, as well as applyling an unfamiliar design system to my own work to ensure a seamless UX experience.</p>
                                <p>WIth that being said, there were some pitfalls such as my limited internet access making my work a slog at times, and being an indpendent designer for this project came with some design questions on how to create an interation that adheres to a pre-existing product. Despite the difficulties, it was a great learning experience and truly tested my design and product knowledge.</p>
                        </Element>
                        <Element
                            name="Next Steps"
                            className="project__block">
                            <div 
                                className="project__sub-block">
                                <Step 
                                    step="Next Steps"
                                    color={color}
                                />
                                <h2>End-to-End Excellence</h2>
                                <p>While I have made great progress in integrating a return/exchange process within the Shop app, there is still more work that needs to be done. Aside from conducting usability tests and determining what the merchant-facing side of things would look like, my next focus would be on in-app selection and return labels.</p>
                            </div>
                            <div 
                                className="project__sub-block">
                                <h2>In-App Selection</h2>
                                <p>The Shop App is currently able to pull different product listings from a Shopify store (shown below) so it might also be possible to pull data of a specific product listing to enable users to make changes for a same-item in-app exchange.</p>
                                <p>
                                    While this type of feature seems feasible based on what is currently in the app, I didn’t focus on it for my initial designs as I have lingering questions on app file size since  
                                    <a
                                        className="project__external-link" 
                                        href="https://developer.apple.com/documentation/app_clips/developing_a_great_app_clip#3625588:~:text=App%20clips%20must%20be%20small%E2%80%94no%20more,app%20clip%20well%20below%20this%20limit"
                                    > App Clips should not exceed 10MB in size</a>
                                    . Therefore, in order to keep the return/exchange experience open to more people, adding this type of feature needs to be weighed over more conventional form fields if it results in a smaller file size.
                                </p>
                                <Selector
                                    title={next.title}
                                    videoOne={next.videoOne}
                                    captionOne={next.captionOne}
                                    labelOne={next.labelOne}
                                    videoTwo={next.videoTwo}
                                    captionTwo={next.captionTwo}
                                    labelTwo={next.labelTwo}
                                    color={color}
                                />
                            </div>
                            <div 
                                className="project__sub-block">
                                <h2>Return Labels</h2>
                                <p>
                                    For users that don’t usually make online returns, having to print out a new return label can be a significant barrier should they not have a printer at their disposal. To overcome this some merchants provide pre-printed return labels within the original package and other services, such as
                                    <a
                                        className="project__external-link" 
                                        href="https://www.happyreturns.com/"
                                    > Happy Returns </a>
                                    (below), go a step further by providing in-person kiosks that handles the workload of a return themselves, rather than a user.
                                </p>
                                <iframe 
                                    title={videos[4].title}
                                    className="project__video"  
                                    src={videos[4].src} 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen>
                                </iframe>
                                <p>However, I believe there are limitations to the solutions currently available and therefore opportunity in this space for potential multi-use shipping labels through peel-away and/or write-to QR functionality to update shipment details dynamically when scanned. This falls outside of the current scope of what I've worked on but would go a long way in making the return/exchange process as hassle free as possible.</p>
                            </div>
                        </Element>
                        <Redirect 
                            link="/project/homediate"
                            cta="Next Project: Homediate"
                        />
                    </section>
                </div>
            </main>
            <DynamicCards 
                title="Try it Yourself"
                caption="Click to try out an interactive prototype"
                preview={preview}
                color={color}
                link={`https://framer.com/share/Shop--ju55T5OIS0sVE1NZSjdV/t1lB5JvSL?fullscreen=1&highlights=0`}
            />
            </>
        );

    }
};

export default Shop;