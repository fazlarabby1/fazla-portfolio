import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AboutMe from "../pages/AboutMe/AboutMe";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
import ProjectDetails from "../pages/Projects/ProjectDetails/ProjectDetails";
import SendEmail from "../pages/SendEmail/SendEmail";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/aboutMe',
                element: <AboutMe />
            },
            {
                path: '/sendMail',
                element: <SendEmail />
            },
            {
                path: '/projectDetails/:id',
                loader: ({params})=> fetch(`https://fazla-portfolio-server.vercel.app/projects/${params.id}`),
                element: <ProjectDetails />
            }
        ]
    }
])