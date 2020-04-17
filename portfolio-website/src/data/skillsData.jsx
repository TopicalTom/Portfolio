import sketch from "../assets/tools/Sketch.svg";
import framer from "../assets/tools/Framer.svg";
import otterAi from "../assets/tools/OtterAi.svg";
import zeplin from "../assets/tools/Zeplin.svg";
import principle from "../assets/tools/Principle.svg";
import photoshop from "../assets/tools/Photoshop.svg";
import illustrator from "../assets/tools/Illustrator.svg";
import afterEffects from "../assets/tools/AfterEffects.svg";
import inVision from "../assets/tools/inVision.svg";
import optimalsort from "../assets/tools/OptimalSort.svg";
import jira from "../assets/tools/Jira.svg";
import slack from "../assets/tools/Slack.svg";
import analytics from "../assets/tools/Analytics.svg";
import searchconsole from "../assets/tools/SearchConsole.svg";
import html from "../assets/tools/HTML.svg";
import css from "../assets/tools/CSS.svg";
import javascript from "../assets/tools/Javascript.svg";
import react from "../assets/tools/React.svg";
import swift from "../assets/tools/Swift.svg";
import arkit from "../assets/tools/ARKit.svg";
import git from "../assets/tools/Git.svg";
import sass from "../assets/tools/Sass.svg";
import node from "../assets/tools/Node.svg";
import oAuth from "../assets/tools/oAuth.svg";
import mySQL from "../assets/tools/mySQL.svg";
import hotjar from "../assets/tools/Hotjar.svg";
import mailchimp from "../assets/tools/Mailchimp.svg";
import mapbox from "../assets/tools/Mapbox.svg";
import foursquare from "../assets/tools/FourSquare.svg";
import postman from "../assets/tools/Postman.svg";
import netlify from "../assets/tools/Netlify.svg";
import zapier from "../assets/tools/Zapier.svg";

const skillsData = [
{ 
    discipline:"Design",
    caption: "My focus on the development side of things has been on the front-end but with my interests more aligned with mobile development specifically for iOS Devices.",
    altCaption: "My focus on the development side of things has been on the front-end but with my interests more aligned with mobile development specifically for iOS Devices.",
    skills: [
        {
            category:"Research",
            tools: [
                {
                    tool:"Otter.ai",
                    description:"Ai-powered speech to text transcription",
                    status:"Current",
                    logo:otterAi
                },
                {
                    tool:"Optimal Sort",
                    description:"Card-based information architecture categorization",
                    status:"Current",
                    logo:optimalsort
                }
            ],
        },
        {
            category:"Visuals",
            tools: [
                {
                    tool:"Sketch",
                    description:"Vector graphics editor for web and mobile wireframes",
                    status:"Current",
                    logo:sketch
                },
                {
                    tool:"Photoshop",
                    description:"Raster graphics editor for photo editing and enhancement",
                    status:"Current",
                    logo:photoshop
                },
                {
                    tool:"Illustrator",
                    description:"Vector graphics editor for print and digital media",
                    status:"Expected",
                    logo:illustrator
                },
                {
                    tool:"After Effects",
                    description:"Motion graphics editor for animation and composition",
                    status:"Expected",
                    logo:afterEffects
                }
            ]
        },
        {
            category:"Prototyping",
            tools: [
                {
                    tool:"inVision",
                    description:"Prototyping Software for simple user flows",
                    status:"Current",
                    logo:inVision
                },
                {
                    tool:"Principle",
                    description:"Prototyping Software for fluid screen animations",
                    status:"Current",
                    logo:principle
                },
                {
                    tool:"Framer X",
                    description:"Prototyping software for complex data-driven interactions",
                    status:"Learning",
                    logo:framer
                }
            ]
        },
        {
            category:"Handoff",
            tools: [
                {
                    tool:"Zeplin",
                    description:"Collaboration tool for design handoff",
                    status:"Current",
                    logo:zeplin
                }
            ]
        }
    ]
},
{
    discipline:"Development",
    caption: "My focus on the development side of things has been on the front-end but with my interests more aligned with mobile development specifically for iOS Devices.",
    altCaption: "My focus on the development side of things has been on the front-end but with my interests more aligned with mobile development specifically for iOS Devices.",
    skills: [
        {
            category:"Front-End (Web)",
            tools: [
                {
                    tool:"HTML5",
                    description:"Markup language for displaying web browser documents",
                    status:"Current",
                    logo:html
                },
                {
                    tool:"CSS3",
                    description:"Style sheet language for presenting web browser documents",
                    status:"Current",
                    logo:css
                },
                {
                    tool:"JavaScript",
                    description:"Scripting language for creating dynamic web browser documents",
                    status:"Current",
                    logo:javascript
                },
                {
                    tool:"SASS",
                    description:"CSS extension for implementing nested naming conventions (BEM)",
                    status:"Current",
                    logo:sass
                },
                {
                    tool:"React.js",
                    description:"JavaScript library for building reusable UI components",
                    status:"Current",
                    logo:react
                }
            ]
        },
        {
            category:"Back-End (Web)",
            tools: [
                {
                    tool:"Node.js",
                    description:"Platform for executing JavaScript code server-side",
                    status:"Current",
                    logo:node
                },
                {
                    tool:"Express.js",
                    description:"Node framework for handling http requests, responses and routes",
                    status:"Current",
                    logo:node
                },
                {
                    tool:"Postman",
                    description:"HTTP client for testing RESTful API functionality",
                    status:"Current",
                    logo:postman
                },
                {
                    tool:"Netlify",
                    description:"Platform for deploying serverless static sites",
                    status:"Learning",
                    logo:netlify
                },
                {
                    tool:"mySQL",
                    description:"Relational database management system",
                    status:"Expected",
                    logo:mySQL
                },
                {
                    tool:"OAuth",
                    description:"Authorization framework for authenticated access to assets",
                    status:"Expected",
                    logo:oAuth
                }
            ] 
        },
        {
            category:"Mobile",
            tools: [
                {
                    tool:"React Native CLI",
                    description:"JavaScript library for building native mobile applications",
                    status:"Learning",
                    logo:react
                },
                {
                    tool:"Swift",
                    description:"Programming language used to develop iOS specific applications",
                    status:"Learning",
                    logo:swift
                }
            ] 
        },
        {
            category:"API/SDK",
            tools: [
                {
                    tool:"Mapbox",
                    description:"Map-based location data platform for mobile and web applications",
                    status:"Learning",
                    logo:mapbox
                },
                {
                    tool:"Four Square",
                    description:"Venue and user content database for mobile and web applications",
                    status:"Expected",
                    logo:foursquare
                },
                {
                    tool:"ARKit 3.5",
                    description:"Augmented reality (AR) development platform for iOS devices",
                    status:"Expected",
                    logo:arkit
                }
            ] 
        },
        {
            category:"Collaboration",
            tools: [
                {
                    tool:"Git",
                    description:"Version control system for tracking changes in code",
                    status:"Current",
                    logo:git
                }
            ] 
        }
    ]
},
{
    discipline:"Product",
    caption: "My focus on the development side of things has been on the front-end but with my interests more aligned with mobile development specifically for iOS Devices.",
    altCaption: "My focus on the development side of things has been on the front-end but with my interests more aligned with mobile development specifically for iOS Devices.",
    skills: [
        {
            category:"Research",
            tools: [
                {
                    tool:"Google Analytics",
                    description:"Web analytics service for measuring website traffic and ROI",
                    status:"Current",
                    logo:analytics
                },
                {
                    tool:"HotJar",
                    description:"Behavior analytics and user feedback service for websites",
                    status:"Expected",
                    logo:hotjar
                }
            ]
        },
        {
            category:"Workflow",
            tools: [
                {
                    tool:"Slack",
                    description:"Instant messaging platform for team collaboration",
                    status:"Current",
                    logo:slack
                },
                {
                    tool:"Zapier",
                    description:"Online automation tool for connecting apps and services",
                    status:"Current",
                    logo:zapier
                },
                {
                    tool:"Jira",
                    description:"Ticket-based issue tracking for agile project management",
                    status:"Current",
                    logo:jira
                }
            ]
        },
        {
            category:"Marketing",
            tools: [
                {
                    tool:"Mailchimp",
                    description:"Email-campaign focused marketing platform for CMS needs",
                    status:"Current",
                    logo:mailchimp
                },
                {
                    tool:"Search Console",
                    description:"Web service for website search engine optimization (SEO)",
                    status:"Current",
                    logo:searchconsole
                }
            ]
        }
    ]
}
]

export default skillsData;