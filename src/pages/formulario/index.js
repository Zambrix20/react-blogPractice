import React, { useContext, useState } from 'react'
import { PostsContext } from '../../components/App/App'

export default function Formulario() {

    const { blogs, setBlogs } = useContext(PostsContext)
    const [valid, setValid] = useState({
        id: false,
        author: false,
        title: false,
        image: false,
        date: false,
        description: false,
    })

    const isValid = (valid.id && valid.author && valid.title && valid.image && valid.date && valid.description)

    const handleId = (e) => {
        e.preventDefault()

        const value = e.target.value.trim()
        if (!/^\d+$/.test(value) || value === '' || Number(value) < 0) {
            alert('Please, enter a valid Id')
            setValid({ ...valid, id: false })
        } else {
            setValid({ ...valid, id: true })
        }
    }

    const handleAuthor = (e) => {
        e.preventDefault()
        const value = e.target.value
        if (value === '') {
            alert('Please, enter an Autor')
            setValid({ ...valid, author: false })
        } else {
            setValid({ ...valid, author: true })
        }
    }

    const handleTitle = (e) => {
        e.preventDefault()

        const value = e.target.value
        if (value === '') {
            alert('Please, enter a Title')
            setValid({ ...valid, title: false })
        } else {
            setValid({ ...valid, title: true })
        }
    }

    const handleImage = (e) => {
        e.preventDefault()

        const value = e.target.value
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

        if (value === '' || !urlRegex.test(value)) {
            alert('Please, enter an URL')
            setValid({ ...valid, image: false })
        } else {
            setValid({ ...valid, image: true })
        }
    }

    const handleDescription = (e) => {
        e.preventDefault()

        const value = e.target.value
        if (value === '') {
            alert('Please, enter a Description')
            setValid({ ...valid, description: false })
        } else {
            setValid({ ...valid, description: true })
        }
    }

    const handleDate = (e) => {
        e.preventDefault()

        const value = e.target.value
        if (value === '') {
            alert('Please, enter a Date')
            setValid({ ...valid, date: false })
        } else {
            setValid({ ...valid, date: true })
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const inputId = Number(document.getElementById("inputId").value)
        const inputAuthor = document.getElementById("inputAuthor").value
        const inputTitle = document.getElementById("inputTitle").value
        const inputImage = document.getElementById("inputImage").value
        const inputDate = document.getElementById("inputDate").value
        const inputTextarea = document.getElementById("inputTextarea").value

        // console.log(inputId, inputAuthor, inputTitle, inputImage, inputDate, inputTextarea);

        const newPost = {

            id: inputId,
            title: inputTitle,
            description: inputTextarea,
            date: inputDate,
            author: inputAuthor,
            image: inputImage,
        }
        console.log(newPost);

        setBlogs(...[...blogs, newPost])
        console.log(blogs);
    }


    return (
        <form className='form container' onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Id</span>
                <input type="text" className="form-control" id="inputId" onBlur={handleId} />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Author</span>
                <input type="text" className="form-control" id='inputAuthor' onBlur={handleAuthor} />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Title</span>
                <input type="text" className="form-control" id='inputTitle' onBlur={handleTitle} />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">Image</span>
                <input type="text" className="form-control" id="inputImage" placeholder='Insert an URL' onBlur={handleImage} />
            </div>


            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Date</span>
                <input type="text" className="form-control" id='inputDate' placeholder='Mmm DD, YYYY' onBlur={handleDate} />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text">Description</span>
                <textarea className="form-control" id='inputTextarea' onBlur={handleDescription}></textarea>
            </div>

            <button type="submit" className="btn btn-success" disabled={!isValid}>Enviar</button>
        </form>
    )

}
