import Rally from "../assets/videos/RallyPromo.mp4";
import RallyIcon from "../assets/icons/Rally.svg";
import RallyPromo from "../assets/images/RallyPreview.png";
import TouchBase from "../assets/videos/TouchBasePreview.mp4";
import TouchBaseIcon from "../assets/icons/TouchBase.svg";
import TouchBasePromo from "../assets/images/TouchBasePreview.png";
import Homediate from "../assets/videos/HomediatePromo.mp4";
import HomediateIcon from "../assets/icons/Homediate.svg";
import HomediatePromo from "../assets/images/SharedSpacePreview.png";

const projectsData = [
    {
        project: "Rally",
        description: "Helping people spontaneously connect with their close friends over social moods.",
        icon: RallyIcon,
        preview: Rally,
        promo: RallyPromo,
        type: "Hangouts",
        link: "rally",
        orientation: "left",
        code: ""
    },
    {
        project: "TouchBase",
        description: "Helping people foster professional connections by making networking more actionable.",
        icon: TouchBaseIcon,
        preview: TouchBase,
        promo: TouchBasePromo,
        type: "Networking",
        link: "touch-base",
        orientation: "right",
        code: "none"
    },
    {
        project: "Homediate",
        description: "Helping people mediate household tasks with individual performance based utility costs.",
        icon: HomediateIcon,
        preview: Homediate,
        promo: HomediatePromo,
        type: "Housing",
        link: "homediate",
        orientation: "left",
        code: "none"
    }
]

export default projectsData;