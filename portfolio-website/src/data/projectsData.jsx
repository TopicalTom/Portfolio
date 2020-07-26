// Rally Assets
import Rally from "../assets/videos/RallyPromo.mp4";
import RallyIcon from "../assets/icons/Rally.svg";
import RallyPromo from "../assets/images/RallyPreview.png";
import SocialArchitect from "../assets/files/SocialArchitectPersona.png";
import Wingman from "../assets/files/WingmanPersona.png";
import PassiveParticipant from "../assets/files/PassiveParticipantPersona.png";
import rallyPrism from "../assets/images/RallyPrism.png";
import rallySketch from "../assets/images/Sketches.png";
import rallyMap from "../assets/images/ExperienceMap.png";
import rallyLayers from "../assets/layers/HangoutLayer.png";
import reactnative from "../assets/icons/reactWatermark.svg";
import mapbox from "../assets/icons/mapboxWatermark.svg";
import foursquare from "../assets/icons/foursquareWatermark.svg";
import bumblePush from "../assets/videos/BumblePush.mp4";
import bumbleModes from "../assets/videos/BumbleModes.mp4";
import local from "../assets/videos/LocalEvents.mp4";
import airbnb from "../assets/videos/AirbnbLists.mp4";
import shop from "../assets/videos/ShopLocal.mp4";
import rallyPush from "../assets/videos/RallyPush.mp4";
import rallyModes from "../assets/videos/RallyModes.mp4";
import rallyConnect from "../assets/videos/RallyConnect.mp4";

// TouchBase Assets
import TouchBase from "../assets/videos/TouchBasePreview.mp4";
import TouchBaseIcon from "../assets/icons/TouchBase.svg";
import TouchBasePromo from "../assets/images/TouchBasePreview.png";
import Prospective from "../assets/files/ProspectivePersona.png";
import Wandering from "../assets/files/WanderingPersona.png";
import Established from "../assets/files/EstablishedPersona.png";
import touchBaseLayers from "../assets/layers/TouchBaseLayer.png";
import touchBaseCards from "../assets/images/BusinessCards.png";
import touchBaseSketch from "../assets/files/TouchBaseSketch.png";
import touchBaseMap from "../assets/files/NetworkingJourneyMap.png";
import bumblePrompt from "../assets/videos/BumblePrompt.mov";
import bumbleShare from "../assets/videos/BumbleShare.mov";
import shaprFind from "../assets/videos/ShaprFind.mov";
import shaprMeet from "../assets/videos/ShaprMeet.mov";
import touchBaseShare from "../assets/videos/TouchBasePreview.mp4";
import touchBaseCTA from "../assets/videos/TouchBaseCTA.mp4";
import touchBaseDetails from "../assets/videos/TouchBaseDetails.mp4";
import touchBaseMeet from "../assets/videos/TouchBaseMeet.mp4";
import touchBaseHome from "../assets/videos/TouchBaseHome.mp4";

// Homediate Assets
import Homediate from "../assets/videos/HomediatePromo.mp4";
import HomediateIcon from "../assets/icons/Homediate.svg";
import HomediatePromo from "../assets/images/SharedSpacePreview.png";

const projectsData = [
    {
        project: "Rally",
        description: "Helping people spontaneously connect with their close friends over social moods.",
        type: "Hangouts",
        link: "rally",
        preview: Rally,
        icon: RallyIcon,
        promo: RallyPromo,
        orientation: "left",
        color: "#FD2D55",
        quotes: [
            {
                quote: "I tend to focus on my friends that are more spontaneous and are more readily able to hangout on a whim when trying to make plans as they are more likely to follow through.",
                takeaway: "Spontaneous",
                category: "Actions",
                order: 0
            },
            {
                quote: "If I am intending to get a large group together, I text a few selective people I am close with to build a foundation to then branch out. Even in no one else can make it, I then have a group to fall back on.",
                takeaway: "Build a Foundation",
                category: "Actions",
                order: 1
            },
            {
                quote: "Getting interest and ensuring people are going to follow through is tough. Some people say they are good but something happens, so we have to move to another date. I would like a way to ensure people will follow through.",
                takeaway: "Plan Insurance",
                category: "Frustration", 
                order: 2
            },
            {
                quote: "With one person I text them the day before to see if it is still ok. If I am with a group, I either send constant reminders or I plan over time by telling them to save the date and then we will go over the finer details as the date gets closer.",
                takeaway: "Reminders",
                category: "Actions",
                order: 3
            },
            {
                quote: "People can be shady such as when they say they are down, but are actually busy, so they don't follow through on doing something.",
                takeaway: "True Intent",
                category: "Frustration",
                order: 4
            },
            {
                quote: "When groups are being made, I try to get people who are in a similar mindset. I shuffle people around depending on if their needs align with my own. In the end, making plans is about compromises.",
                takeaway: "Need Alignment",
                category: "Actions", 
                order: 5
            },
            {
                quote: "I have friends that I reach out to for specific moods. I message the ones that are more likely to be interested in a specific thing and are more likely to be spontaneous.",
                takeaway: "Mood-Based Groups",
                category: "Actions",
                order: 6
            },
            {
                quote: "Made prior plans but had a long week so I felt tired and wanted to push to a day when I felt more sociable and in the mood. The rest of the group also didn't feel like it the day of.",
                takeaway: "Mood Dependent",
                category: "Barriers",
                order: 7
            },
            {
                quote: "I bond over food so I send info about a restaurant and use that as an initiator for the conversation. I typically ask what they think of it and that I would enjoy their company.",
                takeaway: "Interest Initiators",
                category: "Actions",
                order: 8
            },
            {
                quote: "A majority of the time I'm not the iniator of plans because I have a small apartment. I usally try and get a group to do something outside of our homes.",
                takeaway: "Personal Constraints",
                category: "Barriers",
                order: 9
            },
            {
                quote: "I'm generally bad at being a decider when setting up plans which probably stems from me being indecisive. Sometimes people agree directly on an idea but sometimes the group doesn't actively answer.",
                takeaway: "Reaching Consensus",
                category: "Barriers",
                order: 10
            },
            {
                quote: "I'm usually the initiator of plans as I work on the logistics and suggesting ideas. I try to find locations that are also easier to get to for the group (closer) as well as potential transportation methods.",
                takeaway: "Area Knowledge",
                category: "Barriers",
                order: 11
            },
            {
                quote: "I would like a doodle poll like functionality where people can input when they are free and it would determine when would be the best to have a get-together based on when works for the most people.",
                takeaway: "Shared Availability",
                category: "Barriers",
                order: 12
            }
        ],
        personas: [
            {
                deliverable: SocialArchitect,
                order: 0,
            },
            {
                deliverable: Wingman,
                order: 1,
            },
            {
                deliverable: PassiveParticipant,
                order: 2,
            }
        ],
        assets: {
            layers: rallyLayers,
            sketch: rallySketch,
            map: rallyMap,
            prism: rallyPrism
        },
        inspiration: [
            {
                video: bumblePush,
                caption: "Bumble uses push notifications to bring current users back into the app in anticipation of getting matches (FOMO)",
                type: "Trigger"
            },
            {
                video: bumbleModes,
                caption: "Bumble uses swipeable cards to enable users to switch modes and focus in on how to connect with others.",
                type: "Action"
            },
            {
                video: local,
                caption: "Local (Facebook Events) enables users to see friends who expressed interest in events to help form groups.",
                type: "Reward"
            },
            {
                video: shop,
                caption: "Shop (previously Arrive) uses location to show local stores near a user that they should checkout and support.",
                type: "Reward"
            },
            {
                video: airbnb,
                caption: "Airbnb uses lists to enable users to save experiences and places they are interested in for use in sharing with friends.",
                type: "Investment"
            }
        ],
        tech: [
            {
                name: "reactnative",
                link: "https://reactnative.dev/",
                logo: reactnative,
            },
            {
                name: "mapbox",
                link: "https://www.mapbox.com/",
                logo: mapbox,
            },
            {
                name: "foursquare",
                link: "https://foursquare.com/",
                logo: foursquare,
            }
        ],
        prototype: [
            {
                video: rallyPush,
                caption: "Rally uses push notifications to enable users to know when their friends are currently rallying to encourage app use.",
                type: "Trigger"
            },
            {
                video: rallyModes,
                caption: "Rally uses swipeable cards to enable users to broadcast their interests in an actionable way for use in making plans.",
                type: "Action"
            },
            {
                video: rallyConnect,
                caption: "Rally filters a user's friends by current shared interests to assist users in forming groups for specific moods.",
                type: "Reward"
            },
            {
                video: Rally,
                caption: "Rally allows users to selectively broadcast their location within a group chat to help coordinate plan logistics.",
                type: "Reward"
            }
        ]
    },
    {
        project: "TouchBase",
        description: "Helping people foster professional connections by making networking more actionable.",
        type: "Networking",
        link: "touch-base",
        preview: TouchBase,
        icon: TouchBaseIcon,
        promo: TouchBasePromo,
        orientation: "right",
        color: "#4D7FFF",
        quotes: [
            {
                quote: "Networking is the opportunity to speak to somebody who’s in the industry that you’re trying to join or become acquainted with.",
                takeaway: "Networking Objecitve",
                category: "Needs",
                order: 0 
            },
            {
                quote: "I think a lot of people think networking is just about job hunting but I think it’s more about building your personal skill set or your knowledge base in order to enter or proceed through an industry.",
                takeaway: "Varied Objectives",
                category: "Needs",
                order: 1 
            },
            {
                quote: "I’ve met most of my connections through my educational experiences...but then also you start to slowly expand that group as you meet people through people so it becomes sort of an exponential process.",
                takeaway: "Building a Base",
                category: "Needs",
                order: 2 
            },
            {
                quote: "One of the keys to networking would be making sure that you don’t just use and burn some connections…it’s important to actually keep these people in a constant cycle of communication.",
                takeaway: "Constant Reminders",
                category: "Actions",
                order: 3 
            },
            {
                quote: "One of the keys to networking would be making sure that you don’t just use and burn some connections…it’s important to actually keep these people in a constant cycle of communication.",
                takeaway: "Constant Reminders",
                category: "Actions",
                order: 4 
            },
            {
                quote: "It’s about understanding that if you add value to your connection with these people, then they’re much more likely to be receptive to you asking for a favor or asking to sort of support you.",
                takeaway: "Adding Value",
                category: "Actions",
                order: 5 
            },
            {
                quote: "I think it’s really rewarding to be able to help people. If you have a friend who works for a company, you can connect them to make their path to their goals a little easier.",
                takeaway: "Helping Others",
                category: "Actions",
                order: 6 
            },
            {
                quote: "I think it all comes down to real communication with a person to understand what their actual goals are. The only person who really knows what they want to achieve is the person themself.",
                takeaway: "Communicating Goals",
                category: "Needs",
                order: 7 
            },
            {
                quote: "Endeavoring to also create connections that are outside of just what you work on personally will make you more grounded but also broaden your perspective and open up other opportunities later on.",
                takeaway: "Broaden Network",
                category: "Needs",
                order: 8 
            },
            {
                quote: "I think it’s important to bear in mind that these people (prospective networking) are being asked by hundreds of people to share their experience. So if you go into it with the understanding that there’s a good chance this person isn’t going to check in with you, so it is about setting expectations.",
                takeaway: "Managing Expectations",
                category: "Actions",
                order: 9 
            },
            {
                quote: "It takes a lot of effort in order to do real authentic networking, because you aren’t just going to get the director, senior vice president or precedent to sit down and have coffee with you...it’s going to take a few touch points.",
                takeaway: "Persistence",
                category: "Actions",
                order: 10 
            },
            {
                quote: "Demonstrating you’ve spent some time thinking about what it is that they do and working on understanding their career trajectory will show that you’re actually interested in that person and the information they can pass on.",
                takeaway: "Genuine Interest",
                category: "Actions",
                order: 11
            },
            {
                quote: "The first time you network with somebody it is actually quite easy as you sit down and talk about a job...after that you can’t just ask them for another coffee and ask the same questions over again, because you are wasting their time.",
                takeaway: "Maintaining Interest",
                category: "Needs",
                order: 12
            },
            {
                quote: "If you are properly networking, it shouldn’t really matter if you’re employed or looking for work as you should be continuing to talk and expand your network.",
                takeaway: "Value for Everyone",
                category: "Needs",
                order: 13
            },
            {
                quote: "Progress to me, especially for younger people early on in our careers is about finding the next steps towards a more fulfilling job. Once you are at that point, it’s then about looking back and asking yourself how can I help somebody else get where they need to go?",
                takeaway: "Goal Shift",
                category: "Needs",
                order: 14
            },
            {
                quote: "If your personal brand is one that helps other people, you essentially become a connector in your community, and you become someone who people go to. You become a leader in your industry.",
                takeaway: "Becoming a Leader",
                category: "Actions",
                order: 15
            },
            {
                quote: "A lot of professional networking is done by word of mouth or reputation.",
                takeaway: "WOM",
                category: "Actions",
                order: 16
            },
            {
                quote: "If you are asking big questions, and the people are giving you good responses that are adding value and you are learning, then that’s indicative of a solid connection that you’d like to continue with.",
                takeaway: "Valuable Connections",
                category: "Actions",
                order: 17
            },
            {
                quote: "I feel like sometimes when I’m in a networking situation, it can be a really anxious sort of place because you are talking to strangers and you’re trying to learn more about them.",
                takeaway: "Networking Anxiety",
                category: "Fears",
                order: 18
            },
            {
                quote: "The people I connect with are based on personality, like when I’m talking to someone and I feel like our energy lines up and I don’t feel anxious talking to them. The best connections are when they have a personality that matches mine.",
                takeaway: "Personality Connection",
                category: "Actions",
                order: 19
            },
            {
                quote: "If I know I’m going to a networking event I always try to read a little bit about people ahead of time. I think it makes it easier in networking situations if I am able to bring stuff up but also for them that I’m showing interest in what they do.",
                takeaway: "Conducting Research",
                category: "Actions",
                order: 20
            },
            {
                quote: "Reaching out to people makes me nervous because we are very new and there is a fear of not wanting to look too eager or that I’m trying to suck up to them but I think that’s something that’s in our own heads.",
                takeaway: "Projecting Feelings",
                category: "Fears",
                order: 21
            },
            {
                quote: "I want them to like me for my qualifications, my personality, and I don’t want them to think that if I messaged them that I’m trying to get a step up from other people.",
                takeaway: "Shaping Perceptions",
                category: "Fears",
                order: 22
            },
            {
                quote: "When I think of networking events as they are, they are really awkward and they are kind of a scary thought to have...but once I just go in and start talking to someone and build my own confidence it definitely is a little bit easier.",
                takeaway: "Building Confidence",
                category: "Actions",
                order: 23
            },
            {
                quote: "(On talking to people)One thing about networking events is trying to think of questions that they haven’t heard like 100 times already.",
                takeaway: "Keep it Fresh",
                category: "Actions",
                order: 24
            },
            {
                quote: "I think it’s hard to (network) because being someone who’s young and getting started in the working world, there’s a bit of anxiety when talking to higher level executives or even just someone that’s got more authority than you that they are somehow looking down on you or that there’s some judgement.",
                takeaway: "Feeling of Judgement",
                category: "Fears",
                order: 25
            },
            {
                quote: "If it’s recruiting season for a specific type of job I would network a lot more but if its off season then I’ll probably be like, whatever happens, happens.",
                takeaway: "No Urgency",
                category: "Needs",
                order: 26
            },
            {
                quote: "When initiating conversations, I try to make open ended questions that are targeted towards everyone.",
                takeaway: "Approachable Initiators",
                category: "Actions",
                order: 27
            },
            {
                quote: "I think the best way is to just directly ask and if there is anything I can do at the moment. It’s a very mutual thing. If there is anything that they hint at that might link to something that you’ve done or if you’re interested in doing, that’s an open door.",
                takeaway: "Finding an Opening",
                category: "Actions",
                order: 28
            },
            {
                quote: "(On why they don’t just share numbers) I find that a bit more intrusive, I think, and some people may value those boundaries so I think (using business cards) is a very non intrusive way to be like here’s my information, you can kind of make a judgement call whether or not you connect.",
                takeaway: "No Committment",
                category: "Actions",
                order: 29
            },
            {
                quote: "If the meeting you have or connection you make in the moment has to get somewhere...it’s a lot easier to be like here’s my card if you want to connect and talk further. It’s almost like an open invitation so that they’re not required or obligated to follow up.",
                takeaway: "Open Invite",
                category: "Actions",
                order: 30
            },
        ],
        personas: [
            {
                deliverable: Prospective,
                order: 0,
            },
            {
                deliverable: Wandering,
                order: 1,
            },
            {
                deliverable: Established,
                order: 1,
            }
        ],
        assets: {
            layers: touchBaseLayers,
            map: touchBaseMap,
            sketch: touchBaseSketch,
            cards: touchBaseCards
        },
        inspiration: [
            {
                video: bumbleShare,
                caption: "Bumble uses their dating platform to allow users to share their professional details and swipe for new connections.",
                type: "Action"
            },
            {
                video: shaprFind,
                caption: "Shapr allows users to filter who they connect with by job titles, goals and interests so that their limited matches are worthwhile.",
                type: "Trigger"
            },
            {
                video: bumblePrompt,
                caption: "Bumble utilizes profile prompts to help users quickly transition into a conversation that will be interesting for the recipient.",
                type: "Reward"
            },
            {
                video: shaprMeet,
                caption: "Shapr lets users indicate what they would like to be doing when they meet for their in-person networking session.",
                type: "Reward"
            },
        ],
        prototype: [
            {
                video: touchBaseShare,
                caption: "TouchBase encourages spontaneous networking by enables profile sharing through an Apple Wallet Pass.",
                type: "Trigger"
            },
            {
                video: touchBaseCTA,
                caption: "TouchBase displays a users' call to action cards at the start of their profile to serve as conversation initiators.",
                type: "Action"
            },
            {
                video: touchBaseDetails,
                caption: "TouchBase provides a users' background for context when deciding to reach out and plan meetups.",
                type: "Action"
            },
            {
                video: touchBaseMeet,
                caption: "TouchBase allows for streamlined meetup planning by suggesting crowdsourced networking spots.",
                type: "Reward"
            },
            {
                video: touchBaseHome,
                caption: "TouchBase showcases a users' scheduled meetups front and center to remind users to maintain their connections.",
                type: "Investment"
            },
        ]
    },
    {
        project: "Homediate",
        description: "Helping people mediate household tasks with individual performance based utility costs.",
        icon: HomediateIcon,
        preview: Homediate,
        promo: HomediatePromo,
        type: "Housing",
        link: "homediate",
        orientation: "left"
    }
]

export default projectsData;