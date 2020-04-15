import otterAi from "../assets/tools/OtterAi.svg";
import optimalsort from "../assets/tools/OptimalSort.svg";
import jira from "../assets/tools/Jira.svg";
import slack from "../assets/tools/Slack.svg";
import analytics from "../assets/tools/Analytics.svg";
import searchconsole from "../assets/tools/SearchConsole.svg";
import hotjar from "../assets/tools/Hotjar.svg";
import mailchimp from "../assets/tools/Mailchimp.svg";

const productSkills = [
    {
        type:"Research",
        tools: [
            {
                tool:"Otter.ai",
                description:"Ai-powered speech to text transcription",
                status:"Learned",
                logo:otterAi
            },
            {
                tool:"Optimal Sort",
                description:"Card-based information architecture categorization",
                status:"Learned",
                logo:optimalsort
            },
            {
                tool:"Google Analytics",
                description:"Web analytics service for measuring website traffic and ROI",
                status:"Learned",
                logo:analytics
            },
            {
                tool:"HotJar",
                description:"Behavior analytics and user feedback service for websites",
                status:"Upcoming",
                logo:hotjar
            }
        ]
    },
    {
        type:"Workflow",
        tools: [
            {
                tool:"Slack",
                description:"Instant messaging platform for team collaboration",
                status:"Learned",
                logo:slack
            },
            {
                tool:"Jira",
                description:"Ticket-based issue tracking for agile project management",
                status:"Learned",
                logo:jira
            }
        ]
    },
    {
        type:"Marketing",
        tools: [
            {
                tool:"Mailchimp",
                description:"Email-campaign focused marketing platform for CMS needs",
                status:"Learned",
                logo:mailchimp
            },
            {
                tool:"Google Search Console",
                description:"Web service for website search engine optimization (SEO)",
                status:"Learned",
                logo:searchconsole
            }
        ]
    }
]

export default productSkills;