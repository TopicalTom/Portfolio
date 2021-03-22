import Shopper from "../assets/files/ShopperPersona.png";
import Shoe from "../assets/images/VessiShoe.png";
import Merchant from "../assets/files/ShopperPersona.png";
import shopLayers from "../assets/layers/ShopLayer.png";
import shopUserCurrent from "../assets/videos/ShopUserOpen.mp4";
import shopGuestCurrent from "../assets/videos/ShopUserOpen.mp4";
import shopUserOpen from "../assets/videos/ShopUserOpen.mp4";
import shopGuestOpen from "../assets/videos/ShopUserOpen.mp4";
import shopUserOrder from "../assets/videos/ShopUserOrder.mp4";
import shopGuestOrder from "../assets/videos/ShopUserOrder.mp4";
import shopUserSelect from "../assets/videos/ShopUserSelect.mp4";
import shopGuestSelect from "../assets/videos/ShopUserSelect.mp4";
import shopUserDetails from "../assets/videos/ShopUserDetails.mp4";
import shopGuestDetails from "../assets/videos/ShopUserDetails.mp4";
import shopUserStatus from "../assets/videos/ShopUserStatus.mp4";
import shopGuestStatus from "../assets/videos/ShopUserStatus.mp4";
import shopMap from "../assets/files/shopMap.png";

const shopData = {

        project: "Shop",
        description: "Helping people spontaneously connect with their close friends over social moods.",
        type: "Shopping",
        link: "shop",
        color: "#5a31f4",
        preview: shopUserOpen,
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
        stats: {
            define: [
                {
                    metric: "3x",
                    qualifier: "The likelhood of returns for online retailers"
                },
                {
                    metric: "17%",
                    qualifier: "Tend to impulse buy knowing they’ll likely return the product"
                },
                {
                    metric: "80%",
                    qualifier: "Are deterred by an inconvenient returns policy"
                },
                {
                    metric: "46%",
                    qualifier: "Will make repeat purchases based on an easy returns policy"
                },
                {
                    metric: "50%",
                    qualifier: "Will make repeat purchases due to good customer service"
                },
                {
                    metric: "67%",
                    qualifier: "Increase their spending as a repeat customer"
                }
            ],
            next: [
                {
                    metric: "48%",
                    qualifier: "Detailed / accurate description of sizing"
                },
                {
                    metric: "42%",
                    qualifier: "Photos of the product from different angles"
                },
                {
                    metric: "37%",
                    qualifier: "Videos of the full product for clarity"
                }
            ]
        },
        quotes: [
            {
                quote: "In the last month since COVID I’ve probably gone on two to three online websites and I purchased from two.",
                takeaway: "Increased Frequency",
                category: "Actions",
                order: 0
            },
            {
                quote: "I typically purchase items online if I know my size, I bought the product before or if it was something that I couldn’t purchase locally (as their in-person location closed), otherwise I prefer to go to the mall.",
                takeaway: "Case-based Online Shopping",
                category: "Actions",
                order: 1
            },
            {
                quote: "I don’t usually use apps or other sorts of resources to decide where to buy things, I would generally ask my friends or family if I was buying something new.",
                takeaway: "Trust-based Suggestions",
                category: "Actions",
                order: 2
            },
            {
                quote: "For a new product I was thinking about getting, I browsed the website a couple times over the span of a week deciding on what size, type and color I wanted and then purchased them.",
                takeaway: "Taking The Time",
                category: "Actions",
                order: 3
            },
            {
                quote: "(On purchasing from a new place) I didn’t do it the first time as I wanted to think about it. I saw if there’s anything in person I wanted first that I could buy but I decided to try those.",
                takeaway: "Online Purchases Secondary",
                category: "Actions",
                order: 4
            },
            {
                quote: "(On initial opening) I made sure it was the same item I ordered and tried the product on to make sure I was happy with it.",
                takeaway: "First Steps",
                category: "Actions",
                order: 5
            },
            {
                quote: "I thought that if I’m going to return these then maybe I’ll try a different color as well because I wasn’t sure if I’d like the color that I actually got. It made me think that maybe next time I’d order two products and then ship one back.",
                takeaway: "Sampling Products",
                category: "Actions",
                order: 6
            },
            {
                quote: "(On not ordering two to try) I thought I would be happy with the pair I got as I’ve never ordered shoes online and didn’t feel like spending money on two shoes knowing I would have to return one.",
                takeaway: "Second Guessing",
                category: "Actions",
                order: 7
            },
            {
                quote: "(On return process expectations) It’s been awhile but I guess the process is taking it back to the post office in the same packaging, and then sometimes they give you a return sticker. It then goes back in the mail generally with free return shipping.",
                takeaway: "Return Process Expectations",
                category: "Actions",
                order: 8
            },
            {
                quote: "I did look up the return policy for this new product as it’s really personalized and if it was an item I’d purchased before I’m probably less likely to return so I wouldn’t look it up.",
                takeaway: "Return Policy Use",
                category: "Actions",
                order: 9
            },
            {
                quote: "I think most stores are really good if you're buying clothing because they have really good sizing guides and you can actually measure yourself and I find that very reliable. However, with shoes I find it’s really hard because you can be between sizes which makes it hard sometimes.",
                takeaway: "Online Shopping Help",
                category: "Actions",
                order: 10
            },
        ],
        personas: [
            {
                deliverable: Shopper,
                order: 0,
            },
            {
                deliverable: Merchant,
                order: 1,
            },
        ],
        assets: {
            layers: shopLayers,
            map: shopMap,
            shoe: Shoe,
            current: {
                title: "Return Process",
                userVideo: shopUserCurrent,
                userCaption: "Shop users must find and decipher the return policy before manually sending an email requesting a return.",
                guestVideo: shopGuestCurrent,
                guestCaption: "Guests outside of the Shopify ecosystem must find their delivery email or find the company support line.",
            }
        },
        videos: [
            {
                title: "Shop App Promotional Video",
                src: "https://fast.wistia.net/embed/iframe/er3qsm9vc8?videoFoam=true",
                citation: "Bumble uses push notifications to bring current users back into the app in anticipation of getting matches (FOMO)"
            },
            {
                title: "Shopify Refund Help Video",
                src: "https://www.youtube.com/embed/NeCcWPxcVEk",
                citation: "Bumble uses push notifications to bring current users back into the app in anticipation of getting matches (FOMO)"
            },
            {
                title: "Shopify Refund Help Video 2",
                src: "https://www.youtube.com/embed/q4wfm3pmpNY",
                citation: "Bumble uses push notifications to bring current users back into the app in anticipation of getting matches (FOMO)"
            },
            {
                title: "Shopify Refund Help Video 3",
                src: "https://www.youtube.com/embed/rwDk5cAfFD4",
                citation: "Bumble uses push notifications to bring current users back into the app in anticipation of getting matches (FOMO)"
            },
            {
                title: "App Clips Promotional Video",
                src: "https://www.youtube.com/embed/IqP_iojZXxQ",
                citation: "Bumble uses push notifications to bring current users back into the app in anticipation of getting matches (FOMO)"
            },
            {
                title: "IKEA Places, AR Promotional Video",
                src: "https://www.youtube.com/embed/UudV1VdFtuQ",
                citation: "Bumble uses push notifications to bring current users back into the app in anticipation of getting matches (FOMO)"
            },
        ],
        features: [
            {
                title: "Order Access",
                userVideo: shopUserOpen,
                userCaption: "Users visit the Shop app from their mobile phone and select the order they are interested in returning.",
                guestVideo: shopGuestOpen,
                guestCaption: "Guests are able to scan a App Clips or QR code on the product packaging to access the Shop experience.",
            },
            {
                title: "Return Options",
                userVideo: shopUserOrder,
                userCaption: "Both users and guests are able to view product details or proceed to the return policy screen.",
                guestVideo: shopGuestOrder,
                guestCaption: "Both users and guests are able to view product details or proceed to the return policy screen.",
            },
            {
                title: "Item Selection",
                userVideo: shopUserSelect,
                userCaption: "Both users and guests can select elligble items to return using the return policy breakdowns.",
                guestVideo: shopGuestSelect,
                guestCaption: "Both users and guests can select elligble items to return using the return policy breakdowns.",
            },
            {
                title: "Return Request",
                userVideo: shopUserDetails,
                userCaption: "Both users and guests are able to bypass providing some return request info thanks to baked-in details.",
                guestVideo: shopGuestDetails,
                guestCaption: "Both users and guests are able to bypass providing some return request info thanks to baked-in details.",
            },
            {
                title: "Request Status",
                userVideo: shopUserStatus,
                userCaption: "Users are redirected to the Home Screen where they can view their pending return request after submission.",
                guestVideo: shopGuestStatus,
                guestCaption: "Guests receive an email notification notifying them that their refund request is pending after submission.",
            }
        ]
}

export default shopData;


/*
            {
                userVideo: touchBaseMeet,
                userCaption: "Users are able able to bypass providing some return request details based on their prexisting account.",
                guestVideo: touchBaseMeet,
                guestCaption: "Guests must fill out additonal details for the return request, but can download Shop to save their info.",
            },

*/