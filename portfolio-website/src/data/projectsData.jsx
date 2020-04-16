import Rally from "../assets/videos/RallyPromo.mp4";
import RallyIcon from "../assets/icons/Rally.svg";
import TouchBase from "../assets/videos/TouchBasePromo.mp4";
import TouchBaseIcon from "../assets/icons/TouchBase.svg";
import Homediate from "../assets/videos/HomediatePromo.mp4";
import HomediateIcon from "../assets/icons/Homediate.svg";

const projectsData = [
    {
        project: "Rally",
        description: "Helping friends spontaneously connect with their social circle over current interests.",
        icon: RallyIcon,
        preview: Rally,
        link: "rally",
        orientation: "left",
        code: ""
    },
    {
        project: "TouchBase",
        description: "Helping working professionals transition into a new career by making networking more manageable.",
        icon: TouchBaseIcon,
        preview: TouchBase,
        link: "touch-base",
        orientation: "right",
        code: "none"
    },
    {
        project: "Homediate",
        description: "Helping housemates mediate household tasks and utility costs within a shared space.",
        icon: HomediateIcon,
        preview: Homediate,
        link: "shared-space",
        orientation: "left",
        code: "none"
    }
]

export default projectsData;