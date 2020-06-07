// Delegate Facing
import promote from "../assets/files/CUCOHPromote.png";
import inform from "../assets/files/CUCOHInform.png";
import remind from "../assets/files/CUCOHRemind.png";
import convert from "../assets/files/CUCOHConvert.png";
import support from "../assets/files/CUCOHSupport.png";
import connect from "../assets/files/CUCOHConnect.png";
import prepare from "../assets/files/CUCOHPrepare.png";
import engage from "../assets/files/CUCOHEngage.png";
import engage2 from "../assets/files/CUCOHEngage2.png";
import engage3 from "../assets/files/CUCOHNavigate.png";
import reflect from "../assets/files/CUCOHReflect.png";

// Exec Facing
import post from "../assets/files/CUCOHPost.png";
import communicate from "../assets/files/CUCOHCommunication.png";
import mailing from "../assets/files/CUCOHMailing.png";
import ticketing from "../assets/files/CUCOHTicketing.png";
import allocate from "../assets/files/CUCOHAllocation.png";
import update from "../assets/files/CUCOHUpdate.png";
import understand from "../assets/files/CUCOHFeedback.png";

const serviceData = {
    frontend: [
        {
            preview: promote,
            type: "website",
            caption: "While scrolling aimlessly through her McGill University year group on Facebook, Rachel stumbles upon a shared post about CUCOH regarding the announcement of their theme and clicks the link.",
            touchpoint: "Facebook Groups",
            success: "Post Viewed",
            kpi: "Link Clicks"
        },
        {
            preview: inform,
            type: "website",
            caption: "Rachel explores the CUCOH website to learn if the conference is right for her. Not wanting to miss out on this opportunity, Rachel signs up for the mailing list as registration doesn't appear to be open yet.",
            touchpoint: "CUCOH Website",
            success: "Mailing List Sign-up",
            kpi: "Opt-In Rate"
        },
        {
            preview: remind,
            type: "website",
            caption: "Late September arrives and Rachel receives an email letting her know CUCOH registration is in motion! Having completely forgotten about the conference, she reads the conference update and looks into tickets.",
            touchpoint: "Personal Email",
            success: "Clicks Registration Link",
            kpi: "Open & Click Rate"
        },
        {
            preview: convert,
            type: "website",
            caption: "As she fills out her form, Rachel appreciates being able to make her selections within the context of the schedule as it gives her confidence in what she is paying for and in setting her expectations.",
            touchpoint: "CUCOH Website (Embedded Form)",
            success: "Payment Processed",
            kpi: "Conversion Rate"
        },
        {
            preview: support,
            type: "website",
            caption: "Moments after clicking submit, Rachel receives an email notification. She is presented with a warm welcome from the CUCOH team and next steps to take which puts her mind at ease for planning her trip.",
            touchpoint: "Personal Email",
            success: "Clicks Schedule Link",
            kpi: "Open & Click Rate"
        },
        {
            preview: connect,
            type: "website",
            caption: "Folowing the steps of her confirmation email, Rachel gets redirected to the CUCOH Delegate Facebook page and connects with her fellow peers that are also attending the conference.",
            touchpoint: "Facebook Group",
            success: "Request to Join Group",
            kpi: "% Delegates Joined"
        },
        {
            preview: prepare,
            type: "website",
            caption: "Soon after her confirmation email, Rachel receives another email with a link to her personal schedule with all the selections she made during her online registration and a way to contact the CUCOH team.",
            touchpoint: "CUCOH Website (Unique Link)",
            success: "Schedule Matches Selections",
            kpi: "Support Tickets"
        },
        {
            preview: engage,
            type: "other",
            caption: "The day of the conference Rachel is greeted by the executive team and is handed her delegate swag. She is instructed to scan the back of her Delegate Tag to access the conference details and her schedule.",
            touchpoint: "Delegate Tag",
            success: "Tag Scanned",
            kpi: "Unique QR Scans"
        },
        {
            preview: engage2,
            type: "other",
            caption: "After scanning the QR code on the back of her Delegate Tag, Rachel is directed to a new landing page for the CUCOH Website with links to conference information and a live twitter feed for updates.",
            touchpoint: "CUCOH Website (App Lander)",
            success: "Hub Saved to Home Screen",
            kpi: "Unique Page Views"
        },
        {
            preview: engage3,
            type: "other",
            caption: "After scanning the QR code on the back of her Delegate Tag, Rachel is directed to a new landing page for the CUCOH Website with links to conference information and a live twitter feed for updates.",
            touchpoint: "CUCOH Website (Schedule)",
            success: "Schedule Matches Selections",
            kpi: "Unique Page Views"
        },
        {
            preview: reflect,
            type: "other",
            caption: "At the conclusion of CUCOH, Rachel is informed by the executive team that the feedback form is now live by scanning the QR code on their ID Tag. While on the bus back home, she fills out the form.",
            touchpoint: "Google Form",
            success: "Form Completed",
            kpi: "Net Promoter Score"
        }
    ],
    backend: [
        {
            preview: post,
            type: "website",
            caption: "Conference announcements are shared to our main page to inform previous delegates of our new conference before being shared around to University Facebook Groups across Canada.",
            touchpoint: "Facebook Page",
            success: "Facebook Group Reach",
            kpi: "Post Shares"
        },
        {
            preview: communicate,
            type: "website",
            caption: "Contact form submissions on our website link to our Slack channel with Zapier to be answered by team members. Website FAQs are in turn updated based on questions received.",
            touchpoint: "Slack",
            success: "Questions Answered",
            kpi: "Opt-In Rate"
        },
        {
            preview: mailing,
            type: "website",
            caption: "Mailing List Form submissions are collected in-house by Squarespace for use in email campaigns without team members having to go to, and learn, another service.",
            touchpoint: "Email Campaigns (Squarespace) ",
            success: "Clicks Registration Link",
            kpi: "Open & Click Rate"
        },
        {
            preview: ticketing,
            type: "website",
            caption: "The TicketSpice platform allows team members to oversee tickets sold, edit ticket details or offer refunds to create a positive customer service with quick turnaround times.",
            touchpoint: "TicketSpice & Stripe",
            success: "Breaking Even",
            kpi: "% Tickets Sold"
        },
        {
            preview: allocate,
            type: "website",
            caption: "Delegate details are imported to a custom google sheet for a more digestible overview of experience capacities. Should delegates not show up, other delegates can be slotted into the open slots to optimize their experience.",
            touchpoint: "Google Sheets",
            success: "Vacant Spots filled",
            kpi: "Open & Click Rate"
        },
        {
            preview: update,
            type: "website",
            caption: "As the conference progresses, updates are made on our CUCOH account to keep delegates in the loop which links back to the landing page of the CUCOH Hub that delegates scanned with the QR code.",
            touchpoint: "Twitter",
            success: "Reduction in Questions Asked",
            kpi: "Page Views"
        },
        {
            preview: understand,
            type: "website",
            caption: "At the conclusion of CUCOH, Rachel is informed by the executive team that the feedback form is now live by scanning the QR code on their ID Tag. While on the bus back home, she fills out the form.",
            touchpoint: "Google Form (Results)",
            success: "Form Completed",
            kpi: "Net Promoter Score"
        }
    ]      
}      

export default serviceData;