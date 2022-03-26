import Home from "./Views/Pages/Home";
import Company from "./Views/Pages/Company";
import Project from "./Views/Pages/Project";
import Account from "./Views/Pages/Account";
import SingleCompany from "./Views/Pages/Company/SingleCompany"
import ProjectListing from "./Views/Pages/Project/ProjectsListing"
import SingleProject from "./Views/Pages/Project/SingleProject.js"
import SingleEvent from "./Views/Pages/Event/singleEvent"
import EventsListing from "./Views/Pages/Event/EventsListing"

const ROUTES = [
    {
        path: "/",
        element: Home
    },
    {
        path: "/company",
        element: Company
    },
    {
        path: "/project",
        element: Project,
    },
    {
        path: '/account',
        element: Account
    },
    {
        path: "/single-company",
        element: SingleCompany
    }, 
    {
        path: "/project",
        element: ProjectListing,
    },
    {
        path: "/single-project",
        element: SingleProject
    },
    {
        path: "/events-listing",
        element: EventsListing
    },
    {
        path: "/single-event",
        element: SingleEvent
    }
];

export default ROUTES;

