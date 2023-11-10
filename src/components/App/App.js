// import React, { createContext } from "react"
import React, { createContext, useState } from 'react';
import "./App.scss"
import Home from '../../pages/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import Formulario from '../../pages/formulario';
import Blog from '../../pages/blog';
import PostCreate from '../../pages/post/create';
import PostView from '../../pages/post/view';
// import Box from "../Box/Box";

export const PostsContext = createContext();

export default function App() {

    const posts = [
        {
            id: 1,
            title: "How might we build trust in an untrusting world?",
            description: "Considering the challenge of polarization in digital societies",
            date: "Oct 21, 2023",
            author: "Richard Gingras",
            image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*IraA41cyapCYG2vMH2Tvxw.png",
        },
        {
            id: 2,
            title: "Storytelling In New Yorker Drawings",
            description: "We love them because they are about us",
            date: "Sep 22, 2023",
            author: "Liza Donnelly",
            image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*bYING74NilN3RVy3.jpeg",
        },
        {
            id: 3,
            title: "The Ideal Social Network",
            description: "Let's Build A New Social Platform From Scratch",
            date: "Oct 23, 2023",
            author: "Nir Zicherman",
            image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*t3hdaziHXHF5RqNzUzI_Og.png",
        },
        {
            id: 4,
            title: "How I Got Into And Managed to Walk Away from Burnout",
            description: "My story and practical tips to help you get out of burnout",
            date: "Sep 29, 2023",
            author: "Jackie Colburn",
            image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*7d-wbv9I6k4rKny5cY5Zww.jpeg",

        },
        {
            id: 5,
            title: "What was the hardest thing about quitting my job at Google?",
            description: "Advice for those who are afraid of leaping into the unknown",
            date: "Oct 29, 2023",
            author: "Cassie Kozyrkov",
            image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Xrmq2_N3MPUWyZJUC8XN7w.png",
        }
    ]

    const [blogs, setBlogs] = useState(posts)

    return (
        // <BlogsContext.Provider value={{ blogs, setblogs }}>
        //     <Home />
        // </BlogsContext.Provider>

        // <React.Fragment>
        //     {/* <div className='d-flex flex-column align-items-center justify-content-center'>
        //         {
        //             blogs.map((blog, index) => {
        //                 return (
        //                     <Box
        //                         key={index}
        //                         title={blog.title}
        //                         description={blog.description}
        //                         date={blog.date}
        //                         author={blog.author}
        //                         image={blog.image}
        //                     />
        //                 )
        //             })
        //         }
        //     </div> */}
        //     <Home />
        // </React.Fragment>
        // <PostsContext.Provider value={{ blogs, setBlogs }}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                </Route >

                <Route path="/formulario" element={<MainLayout />}>
                    <Route index element={<Formulario />} />
                </Route >

                <Route path="/blog" element={<MainLayout />}>
                    <Route index element={<Blog />} />
                </Route>

                <Route path="/post" element={<MainLayout />}>
                    <Route path=":id" element={<PostView />} />
                    <Route path='create' element={<PostCreate />} />
                </Route>
            </Routes>
        </BrowserRouter>
        // </PostsContext.Provider>
    )
}