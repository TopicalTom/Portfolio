// Rally Assets
import Rally from "../assets/videos/RallyPromo.mp4";
import Version1 from "../assets/videos/RallyVersion1.mp4";
import Version2 from "../assets/videos/RallyVersion2.mp4";
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

// Shop Assets
import ShopPromo from "../assets/images/ShopPreview.png";
import shopFeatureOverview from "../assets/videos/ShopFeatureOverview.mp4";
import userVessiReturn from "../assets/videos/UserVessiReturn.mp4";
import guestVessiReturn from "../assets/videos/GuestVessiReturn.mp4";
import shopViewProducts from "../assets/videos/ShopViewProducts.mov";
import shopUserOpen from "../assets/videos/ShopUserOpen.mp4";
import shopGuestOpen from "../assets/videos/ShopGuestOpen.mp4";
import shopUserOrder from "../assets/videos/ShopUserOrder.mp4";
import shopGuestOrder from "../assets/videos/ShopGuestOrder.mp4";
import shopBothSelect from "../assets/videos/ShopBothSelect.mp4";
import shopBothDetails from "../assets/videos/ShopBothDetails.mp4";
import shopUserStatus from "../assets/videos/ShopUserStatus.mp4";
import shopGuestStatus from "../assets/videos/ShopGuestStatus.mp4";
import Shopper from "../assets/files/ShopperPersona.webp";
import Merchant from "../assets/files/MerchantPersona.webp";
import shopMap from "../assets/files/ShopMap.webp";
import shopLayers from "../assets/files/ShopLayers.png";
import Shoe from "../assets/images/VessiShoe.png";

// Homediate Assets
import Homediate from "../assets/videos/HomediatePromo.mp4";
import HomediateIcon from "../assets/icons/Homediate.svg";
import HomediatePromo from "../assets/images/SharedSpacePreview.png";
import homediateLayers from "../assets/layers/HomediateLayer.png";

const projectsData = [
    {
        project: "Rally",
        description: "Helping people spontaneously connect with their close friends over social moods.",
        type: "Mobile App",
        link: "rally",
        preview: Rally,
        icon: RallyIcon,
        promo: RallyPromo,
        orientation: "left",
        color: "#FD2D55",
        palette: {
            accent: [
                {color: "#FD2D55"},
                {color: "#F58F47"},
                {color: "#F6C232"},
                {color: "#31C488"},
                {color: "#4D7FFF"},
                {color: "#8637A6"},
                {color: "#F26A9A"},
            ],
            shades: [
                {color: "#FFFFFF"},
                {color: "#F1F2F3"},
                {color: "#EFF3F4"},
                {color: "#D7D8D9"},
                {color: "#565859"},
                {color: "#4C4D4E"},
                {color: "#000000"}
            ]
        },
        stats: [
            {
                metric: "80%",
                qualifier: "Reported significant depressive symptoms"
            },
            {
                metric: "65%",
                qualifier: "Reported increased feelings of loneliness"
            },
            {
                metric: "58%",
                qualifier: "Reported feeling a loss of connectedness"
            },
        ],
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
                id: 0,
                deliverable: SocialArchitect,
                label: "Architect",
                state: "firstSelected",
                function: "handleFirstSelection"
            },
            {
                id: 1,
                deliverable: Wingman,
                label: "Wingman",
                state: "secondSelected",
                function: "handleSecondSelection"
            },
            {
                id: 2,
                deliverable: PassiveParticipant,
                label: "Participant",
                state: "thirdSelected",
                function: "handleThirdSelection"
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
                type: "Notifications"
            },
            {
                video: bumbleModes,
                caption: "Bumble uses swipeable cards to enable users to switch modes and focus in on how to connect with others.",
                type: "Mode Selection"
            },
            {
                video: local,
                caption: "Local (Facebook Events) enables users to see friends who expressed interest in events to help form groups.",
                type: "Group Formation"
            },
            {
                video: shop,
                caption: "Shop (previously Arrive) uses location to show local stores near a user that they should checkout and support.",
                type: "Suggestions"
            },
            {
                video: airbnb,
                caption: "Airbnb uses lists to enable users to save experiences and places they are interested in for use in sharing with friends.",
                type: "Saved Interest"
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
        videos: [
            {
                title: "React Native",
                src: "https://www.youtube.com/embed/6oFuwhIibo4",
                citation: "What is React Native & Why is it so popular"
            },
            {
                title: "Mapbox",
                src: "https://www.youtube.com/embed/sRl6yWzZy8M",
                citation: "Build with Mapbox"
            },
            {
                title: "FourSquare",
                src: "https://www.youtube.com/embed/fZunPW1kglI",
                citation: "Building Place Aware Apps with FourSquare"
            }
        ],
        versions: [
            {
                video: Version1,
                caption: "Overall flow was confusing, too many clicks to get to the core experience and unclear how UI connected back to messages.",
                type: "Version 1"
            },
            {
                video: Version2,
                caption: "Flow still confusing, unclear what rally symbols implied with regards to status and how it linked back to messages.",
                type: "Version 2"
            },
        ],
        prototype: [
            {
                video: rallyPush,
                caption: "Rally uses push notifications to enable users to know when their friends are currently rallying to encourage app use.",
                type: "Notifications"
            },
            {
                video: rallyModes,
                caption: "Rally uses swipeable cards to enable users to broadcast their interests in an actionable way for use in making plans.",
                type: "Mode Selection"
            },
            {
                video: rallyConnect,
                caption: "Rally filters a user's friends by current shared interests to assist users in forming groups for specific moods.",
                type: "Filtering Interest"
            },
        ]
    },
    {
        project: "TouchBase",
        description: "Helping people foster professional connections by making networking more actionable.",
        type: "Mobile App",
        link: "touch-base",
        preview: TouchBase,
        icon: TouchBaseIcon,
        promo: TouchBasePromo,
        orientation: "right",
        color: "#4D7FFF",
        stats: [
            {
                metric: "85%",
                qualifier: "Of positions are filled through networking"
            },
            {
                metric: "49%",
                qualifier: "Don't maintain professional relationships"
            },
            {
                metric: "25%",
                qualifier: "Don't invest any time in networking"
            },
        ],
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
                label: "Prospective",
            },
            {
                deliverable: Wandering,
                label: "Wandering",
            },
            {
                deliverable: Established,
                label: "Established",
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
                title: "Bumble App",
                videoOne: bumbleShare,
                captionOne: "Bumble uses their dating platform to allow users to share their professional details and swipe for new connections.",
                labelOne: "Share",
                videoTwo: bumblePrompt,
                captionTwo: "Bumble utilizes profile prompts to help users quickly transition into a conversation that will be interesting for the recipient.",
                labelTwo: "Prompt"
            },
            {
                title: "Shapr App",
                videoOne: shaprFind,
                captionOne: "Shapr allows users to filter who they connect with by job titles, goals and interests so that their limited matches are worthwhile.",
                labelOne: "Find",
                videoTwo: shaprMeet,
                captionTwo: "Shapr lets users indicate what they would like to be doing when they meet for their in-person networking session.",
                labelTwo: "Meet"
            }
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
        project: "Shop",
        description: "Improving the return/exchange process for online shoppers of an established app.",
        type: "UX Improvement",
        link: "shop",
        color: "#5a31f4",
        orientation: "left",
        preview: shopFeatureOverview,
        promo: ShopPromo,
        palette: {
            primary: [
                {color: "#5A31F4"},
                {color: "#B2A2FA"}
            ],
            status: [
                {color: "#08CF9D"},
                {color: "#00966F"},
                {color: "#00966F"},
                {color: "#EEC200"},
                {color: "#FCF1CD"},
                {color: "#BF4E40"},
                {color: "#FDD1CF"}
            ],
            shades: [
                {color: "#FFFFFF"},
                {color: "#F1F2F3"},
                {color: "#EFF3F4"},
                {color: "#D7D8D9"},
                {color: "#565859"},
                {color: "#4C4D4E"},
                {color: "#000000"}
            ]
        },
        stats: [
            {
                metric: "3x",
                qualifier: "The likelhood of returns for online retailers",
                source: "https://www.nchannel.com/blog/ecommerce-online-return-policy/#more-15366:~:text=According%20to%20the%20NRF%2C%20returns%20are%20three%20times%20more%20prevalent%20for%20online%20retailers."
            },
            {
                metric: "17%",
                qualifier: "Tend to impulse buy knowing they’ll likely return the product",
                source: "https://blog.globalwebindex.com/chart-of-the-week/online-shopping-returns/#top:~:text=17%25%20of%20people%20buy%20different%20colors,knowing%20they%E2%80%99ll%20likely%20return%20the%20product."
            },
            {
                metric: "80%",
                qualifier: "Are deterred by an inconvenient returns policy",
                source: "https://www.nchannel.com/blog/ecommerce-online-return-policy/#more-15366:~:text=An%20inconvenient%20returns%20policy%20deters%2080%25%20of%20shoppers."
            },
            {
                metric: "67%",
                qualifier: "Increase their spending as a repeat customer",
                source: "https://blog.hubspot.com/service/importance-customer-service#cta_button_53_6ecb5be3-74f7-49a2-b845-c947ee4d5804:~:text=This%20is%20because%20repeat%20customers%20are,to%20spend%20less%20on%20operating%20costs."
            },
            {
                metric: "46%",
                qualifier: "Make repeat purchases based on an easy returns policy",
                source: "https://blog.globalwebindex.com/chart-of-the-week/online-shopping-returns/#top:~:text=A%20quick%20and%20easy%20returns%20policy,are%20also%20key%20repeat%20purchase%20drivers."
            },
            {
                metric: "50%",
                qualifier: "Will make repeat purchases due to good customer service",
                source: "https://blog.globalwebindex.com/chart-of-the-week/online-shopping-returns/#top:~:text=A%20quick%20and%20easy%20returns%20policy,are%20also%20key%20repeat%20purchase%20drivers."
            }
        ],
        quotes: {
            consumers: [
                {
                    quote: "I typically purchase items online if I know my size, I bought the product before or if it was something that I couldn’t purchase locally (as their in-person location closed), otherwise I prefer to go to the mall.",
                    takeaway: "Case-based Online Shopping",
                    category: "Actions",
                    order: 0
                },
                {
                    quote: "For a new product I was thinking about getting, I browsed the website a couple times over the span of a week deciding on what size, type and color I wanted and then purchased them.",
                    takeaway: "Taking The Time",
                    category: "Actions",
                    order: 1
                },
                {
                    quote: "(On purchasing from a new place) I didn’t do it the first time as I wanted to think about it. I saw if there’s anything in person I wanted first that I could buy but I decided to try those.",
                    takeaway: "Online Purchases Secondary",
                    category: "Actions",
                    order: 2
                },
                {
                    quote: "I thought that if I’m going to return these then maybe I’ll try a different color as well because I wasn’t sure if I’d like the color that I actually got. It made me think that maybe next time I’d order two products and then ship one back.",
                    takeaway: "Sampling Products",
                    category: "Actions",
                    order: 3
                },
                {
                    quote: "(On not ordering two to try) I thought I would be happy with the pair I got as I’ve never ordered shoes online and didn’t feel like spending money on two shoes knowing I would have to return one.",
                    takeaway: "Second Guessing",
                    category: "Actions",
                    order: 4
                },
                {
                    quote: "I did look up the return policy for this new product as it’s really personalized and if it was an item I’d purchased before I’m probably less likely to return so I wouldn’t look it up.",
                    takeaway: "Return Policy Use",
                    category: "Actions",
                    order: 5
                },
                {
                    quote: "Reviews are valuable to me because I am able to gauge the true pros and cons associated with the product because even though I can see an image of it, there’s typically no description in terms of what the material will feel like and people are the ones who typically comment on these things.",
                    takeaway: "Looking for Validation",
                    category: "Actions",
                    order: 6
                },
                {
                    quote: "(On determining whether to get a refund) I didn’t know if I could return it, but I would rather just take a small loss rather than have to go through the hassle of calling them (support) and trying to get a clear answer on whether I could return it. Whereas the other alternative is taking a $10 loss and then selling it on Facebook.",
                    takeaway: "Take a Loss",
                    category: "Actions",
                    order: 7
                },
                {
                    quote: "I like returning stuff in person a lot more than online as I can just go and say here’s the receipt and item and then they just return it for me on the spot. It puts the onus on me and guarantees an outcome.",
                    takeaway: "In-person Guarantee",
                    category: "Actions",
                    order: 8
                },
                {
                    quote: "There’s a lot of unknowns in the way things can fall through the cracks when going through the process to make an online return. Like the package can get lost or someone might now have written the information down correctly and there are cases when the item couldn’t even be refunded in the first place.",
                    takeaway: "Return Unknowns",
                    category: "Actions",
                    order: 9
                },
                {
                    quote: "I like to get a verbal confirmation and some sort of paper trail for my own sake when making a return as it comes back to accountability. With online returns there’s almost a lack of accountability in terms of a delivery, whereas with in-person returns the accountability is on me and I can advocate for myself.",
                    takeaway: "Return Accountability",
                    category: "Actions",
                    order: 10
                },
                {
                    quote: "I like how some stores have online shopping assistants or chatbots as they are great for asking questions about colors or when something will come back in stock. I value having someone or something readily available to answer questions or clarify things which comes back to the whole personable experience.",
                    takeaway: "Online Help",
                    category: "Actions",
                    order: 11
                },
            ],
            merchants: [
                {
                    quote: "Refunds are pretty straightforward through Shopify, but exchanges seem more difficult. Any advice for how to handle exchanges?",
                    takeaway: "Exchange Issues",
                    date: "12-29-2016",
                    order: 0
                },
                {
                    quote: "How can I exchange an item for another size with an online order? Or what about exchanging for a different item? There is no way within Shopify to do this... A very basic function that every retailer does on a regular basis. Please provide a solution!",
                    takeaway: "Online Order Exchanges",
                    date: "02-07-2017",
                    order: 1
                },
                {
                    quote: "Is it still true that Shopify is unable to handle on online exchange? This seems like an obvious need for an online shopping cart. Please update me if there is a fix, so I don't have to create yet another workaround or purchase another app to fulfill a role that one would think would be inherent in a shopping cart software.",
                    takeaway: "In-Service Solution",
                    date: "05-30-2017",
                    order: 2
                },
                {
                    quote: "This seems like such a (yet another) obvious thing that should be included in a store setup by default. Why it is included in the POS app, and not the online store is beyond me.",
                    takeaway: "Feature Availability",
                    date: "02-05-2018",
                    order: 3
                },
                {
                    quote: "We've resolved this by downloading the POS app and using the refund / exchange section on there. It'll also let you pick the item (and check the stock) and will issue a bill / refund if there is a difference in price and refunds can be done in the same way.",
                    takeaway: "Feature Workaround",
                    date: "03-12-2019",
                    order: 4
                },
                {
                    quote: "There are many, including this one. But none are really free. This one is $10/month - in addition to what I'm already paying shopify..",
                    takeaway: "No Free Solutions",
                    date: "10-15-2019",
                    order: 5
                },
                {
                    quote: "Using the POS app is a great solution (even if you don't have a physical location, this app is free and syncs with your website). Note that from the POS app, website orders do not show up when you scroll through orders. You do have to search for the order by number.",
                    takeaway: "Free Solution",
                    date: "12-05-2019",
                    order: 6
                },
                {
                    quote: "The exchange works fine in the POS app, except in cases where the online customer wishes to exchange for items at higher value, thus leaving a balance. There is no way to email the invoice for the balance as a payment option- only cash/ credit.",
                    takeaway: "Lacking Functionality",
                    date: "12-12-2019",
                    order: 7
                },
                {
                    quote: "You have to create an order in Drafts and then under discount enter the amount you are refunding if they owe you money you have to send an invoice if you owe them money you can just credit them. You have to mark as paid to close it off if they owe you money. You also have to go to the original order and restock the item. Its a bit tricky when there are multiple exchanges.",
                    takeaway: "Manual Work",
                    date: "01-06-2020",
                    order: 8
                },
            ]
        },
        personas: [
            {
                deliverable: Shopper,
                label: "Consumer",
            },
            {
                deliverable: Merchant,
                label: "Merchant",
            },
        ],
        assets: {
            layers: shopLayers,
            map: shopMap,
            shoe: Shoe,
            current: {
                title: "Returns & Exchanges",
                videoOne: userVessiReturn,
                captionOne: "Shop users must find and decipher the return policy before manually sending an email requesting a return.",
                labelOne: "User",
                videoTwo: guestVessiReturn,
                captionTwo: "Guests of the Shopify ecosystem must find their order details and return form on the company website.",
                labelTwo: "Guest"
            },
            next: {
                title: "Item Selection",
                videoOne: shopViewProducts,
                captionOne: "Shop users must find and decipher the return policy before manually sending an email requesting a return.",
                labelOne: "User",
                videoTwo: shopViewProducts,
                captionTwo: "Guests outside of the Shopify ecosystem must find their delivery email or find the company support line.",
                labelTwo: "Guest"
            }
        },
        videos: [
            {
                title: "Shop App Promotional Video",
                src: "https://fast.wistia.net/embed/iframe/er3qsm9vc8?videoFoam=true",
                citation: "Bumble uses push notifications to bring current users back into the app in anticipation of getting matches (FOMO)"
            },
            {
                title: "Loop",
                src: "https://www.youtube.com/embed/547zIEa_izM",
                citation: "Bumble uses push notifications to bring current users back into the app in anticipation of getting matches (FOMO)"
            },
            {
                title: "AfterShip",
                src: "https://www.youtube.com/embed/HzhwGXbvnU4",
                citation: "Bumble uses push notifications to bring current users back into the app in anticipation of getting matches (FOMO)"
            },
            {
                title: "App Clips Promotional Video",
                src: "https://www.youtube.com/embed/IqP_iojZXxQ",
                citation: "Bumble uses push notifications to bring current users back into the app in anticipation of getting matches (FOMO)"
            },
            {
                title: "IKEA Places, AR Promotional Video",
                src: "https://www.youtube.com/embed/SHj3xedWrAs",
                citation: "Bumble uses push notifications to bring current users back into the app in anticipation of getting matches (FOMO)"
            }
        ],
        features: [
            {
                title: "Order Access",
                videoOne: shopUserOpen,
                captionOne: "Users visit the Shop app from their mobile phone and select the order they are interested in returning.",
                labelOne: "User",
                videoTwo: shopGuestOpen,
                captionTwo: "Guests are able to scan a App Clips or QR code on the product packaging to access the Shop experience.",
                labelTwo: "Guest"
            },
            {
                title: "Return Options",
                videoOne: shopUserOrder,
                captionOne: "Both users and guests are able to view product details or proceed to the return policy screen.",
                labelOne: "User",
                videoTwo: shopGuestOrder,
                captionTwo: "Both users and guests are able to view product details or proceed to the return policy screen.",
                labelTwo: "Guest",
            },
            {
                title: "Item Selection",
                videoOne: shopBothSelect,
                captionOne: "Both users and guests can select elligble items to return using the return policy breakdowns.",
                labelOne: "User",
                videoTwo: shopBothSelect,
                captionTwo: "Both users and guests can select elligble items to return using the return policy breakdowns.",
                labelTwo: "Guest",
            },
            {
                title: "Return Request",
                videoOne: shopBothDetails,
                captionOne: "Both users and guests are able to bypass providing some return request info thanks to baked-in details.",
                labelOne: "User",
                videoTwo: shopBothDetails,
                captionTwo: "Both users and guests are able to bypass providing some return request info thanks to baked-in details.",
                labelTwo: "Guest",
            },
            {
                title: "Request Status",
                videoOne: shopUserStatus,
                captionOne: "Users are redirected to the Home Screen where they can view their pending return request after submission.",
                labelOne: "User",
                videoTwo: shopGuestStatus,
                captionTwo: "Guests receive an email notification notifying them that their refund request is pending after submission.",
                labelTwo: "Guest",
            }
        ]
    },
    {
        project: "Homediate",
        description: "Helping people mediate household tasks with individual performance based utility costs.",
        icon: HomediateIcon,
        preview: Homediate,
        promo: HomediatePromo,
        type: "iMessage App",
        link: "homediate",
        orientation: "right",
        color: "#5ECB84",
        assets: {
            layers: homediateLayers
        }
    }
]

export default projectsData;