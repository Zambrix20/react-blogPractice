// import React, { createContext } from "react"
import React from 'react';
import "./App.scss"
import Home from '../../pages/home/home';
// import Box from "../Box/Box";

// export const BlogsContext = createContext();

export default function App() {

    // const [blogs, setblogs] = useState([
    //     {
    //         title: "How might we build trust in an untrusting world?",
    //         description: "Considering the challenge of polarization in digital societies",
    //         date: "Oct 21, 2023",
    //         author: "Richard Gingras",
    //         image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*IraA41cyapCYG2vMH2Tvxw.png",
    //     },
    //     {
    //         title: "Storytelling In New Yorker Drawings",
    //         description: "We love them because they are about us",
    //         date: "Sep 22, 2023",
    //         author: "Liza Donnelly",
    //         image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*bYING74NilN3RVy3.jpeg",
    //     },
    //     {
    //         title: "The Ideal Social Network",
    //         description: "Let's Build A New Social Platform From Scratch",
    //         date: "Oct 23, 2023",
    //         author: "Nir Zicherman",
    //         image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*t3hdaziHXHF5RqNzUzI_Og.png",
    //     },
    //     {
    //         title: "How I Got Into And Managed to Walk Away from Burnout",
    //         description: "My story and practical tips to help you get out of burnout",
    //         date: "Sep 29, 2023",
    //         author: "Jackie Colburn",
    //         image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*7d-wbv9I6k4rKny5cY5Zww.jpeg",

    //     },
    //     {
    //         title: "What was the hardest thing about quitting my job at Google?",
    //         description: "Advice for those who are afraid of leaping into the unknown",
    //         date: "Oct 29, 2023",
    //         author: "Cassie Kozyrkov",
    //         image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Xrmq2_N3MPUWyZJUC8XN7w.png",
    //     }
    // ])

    return (
        // <BlogsContext.Provider value={{ blogs, setblogs }}>
        //     <Home />
        // </BlogsContext.Provider>

        <React.Fragment>
            {/* <div className='d-flex flex-column align-items-center justify-content-center'>
                {
                    blogs.map((blog, index) => {
                        return (
                            <Box
                                key={index}
                                title={blog.title}
                                description={blog.description}
                                date={blog.date}
                                author={blog.author}
                                image={blog.image}
                            />
                        )
                    })
                }
            </div> */}
            <Home />
        </React.Fragment>
    )
}