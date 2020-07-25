import SocialArchitect from "../assets/files/SocialArchitectPersona.png";
import Wingman from "../assets/files/WingmanPersona.png";
import PassiveParticipant from "../assets/files/PassiveParticipantPersona.png";
import Searcher from "../assets/files/SearcherPersona.png";
import Follower from "../assets/files/FollowerPersona.png";
import Hesitant from "../assets/files/HesitantPersona.png";
import Advocate from "../assets/files/AdvocatePersona.png";
import Prospective from "../assets/files/ProspectivePersona.png";
import Wandering from "../assets/files/WanderingPersona.png";
import Established from "../assets/files/EstablishedPersona.png";

const personaData = {
    rally: [
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
    touchbase: [
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
    cucoh: [
        {
            deliverable: Searcher,
            order: 0,
        },
        {
            deliverable: Follower,
            order: 1,
        }
    ],
    cucoh2: [
        {
            deliverable: Hesitant,
            order: 0,
        },
        {
            deliverable: Advocate,
            order: 1,
        },
    ]
}

export default personaData;