import React, { useContext } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { BlogsContext } from "../App/App";

export default function Box(props) {
    // const { blogs } = useContext(BlogsContext);
    const { title, description, image, date, author } = props

    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text"><small className="text-body-secondary fw-bolder">{author}</small></p>
                        <h5 className="card-title .text-black fw-bolder">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">
                            <small className="text-body-secondary">{date}</small>
                        </p>
                    </div>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img src={image} className="img-fluid" alt="..." />
                </div>
            </div>
        </div>
    );
}

