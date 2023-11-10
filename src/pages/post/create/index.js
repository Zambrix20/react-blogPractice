import React, { useState } from 'react'
import './styles.scss'

export default function PostCreate() {

    const [valid, setValid] = useState({
        title: false,
        author: false,
        content: false

    })

    const selectedAuthorId = "123456789012345678901582";

    // const [authorId, setAuthorId] = useState(null); // State to store the selected author's ObjectId

    const isValid = (valid.title && valid.author && valid.content);

    const handleTitle = (e) => {
        e.preventDefault()

        const value = e.target.value
        if (value.length < 5) {
            alert("El titulo debe tener al menos 5 caracteres.");
            setValid({
                ...valid,
                title: false
            });
        } else {
            setValid({
                ...valid,
                title: true
            });
        }
    }

    const handleAuthor = (e) => {
        e.preventDefault();

        const value = e.target.value;

        // Assuming the selected author has an associated ObjectId
        const selectedAuthorId = value;
        if (value === "") {
            alert("Debes seleccionar un autor.");
            setValid({
                ...valid,
                author: false
            });
        } else {
            setValid({
                ...valid,
                author: true
            });

            // Store the selected author's ObjectId for later use
            // setAuthorId(selectedAuthorId);
        }
    }

    const handleContent = (e) => {
        e.preventDefault();

        const value = e.target.value;
        if (value.length < 20) {
            alert("El contenido debe tener al menos 20 caracteres.");
            setValid({
                ...valid,
                content: false
            });
        } else {
            setValid({
                ...valid,
                content: true
            });
        }
    }

    const validateForm = async (e) => {
        e.preventDefault()

        const title = document.getElementById('title').value
        const content = document.getElementById('content').value
        const author = document.getElementById('author').value

        if (title.length < 5) {
            alert("El titulo debe tener al menos 5 caracteres.");
        }

        if (author === "") {
            alert("Debes ingresar un autor.");
        }

        if (content.length < 20) {
            alert("El contenido debe tener al menos 20 caracteres.");
        }

        if (title.length >= 5 && author !== null && content.length >= 20) {
            // alert("Post creado correctamente.");

            // Send data to the backend using fetch
            const data = {
                title,
                author: selectedAuthorId,
                content
            }
            console.log(data);

            try {
                const response = await fetch('http://localhost:5001/post', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    console.log(await response.json());
                    alert('Post creado correctamente.');
                } else {
                    console.error('Error creating post:', response.statusText);
                    alert('Error al crear el post. Por favor, inténtalo de nuevo.');
                }
            } catch (error) {
                console.error('Error creating post:', error);
                alert('Error al crear el post. Por favor, inténtalo de nuevo.');
            }
        }
    }


    return (
        <div className='container'>
            <h1> Post</h1>
            <div className='formContain'>
                <form onSubmit={validateForm}>
                    <div className='formGroup'>
                        <label>Titulo</label>
                        <input type='text' placeholder='Titulo del blog' id={'title'} onBlur={handleTitle} />
                    </div>
                    <div className='formGroup'>
                        <label>Autor</label>
                        <input id={'author'} onBlur={handleAuthor} placeholder='Nombre del Autor'>
                            {/* <option value='1'>Autor 1</option>
                            <option value='2'>Autor 2</option>
                            <option value='3'>Autor 3</option> */}
                        </input>
                    </div>
                    <div className='formGroup'>
                        <label>Contenido</label>
                        <textarea placeholder='Contenido del blog' id={'content'} onBlur={handleContent} />
                    </div>

                    <div className='formGroup'>
                        <button type="submit" disabled={!isValid}>Enviar</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
