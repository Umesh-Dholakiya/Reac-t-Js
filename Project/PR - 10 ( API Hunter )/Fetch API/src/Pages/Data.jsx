import React, { useEffect, useState } from 'react';
import './Data.css'; 

const Data = () => {
    const [post, setPost] = useState([]);

    const fetchUser = () => {
        fetch(`https://dummyjson.com/quotes`)
            .then(response => response.json())
            .then(Allpost => {
                setPost(Allpost.quotes);
            })
    }

    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <div className="data-container">
            <h1 className="py-3" style={{margin:"30px 0", fontSize:'40px',color:'#333'}}>Quotes API Using Fetch Mathod</h1>

            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-wrap justify-content-center">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Quote</th>
                                    <th scope="col">Author</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    post && post.map((post) => (
                                        <tr key={post.id}> 
                                            <th scope="row">{post.id}</th>
                                            <td>{post.quote}</td>
                                            <td>{post.author}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
