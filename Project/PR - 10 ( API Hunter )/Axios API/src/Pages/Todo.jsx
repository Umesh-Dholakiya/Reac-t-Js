import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Todo.css';

const Todo = () => {
    const [todos, setTodos] = useState([]);

    const getRecord = async () => {
        try {
            let { data } = await axios.get(`https://dummyjson.com/products`);
            setTodos(data.products);
        }
        catch (err) {
            console.log(err);
            return false;
        }
    };

    useEffect(() => {
        getRecord();
    }, []);

    return (
        <div>
            <h2 align="center" style={{margin:"30px 0", fontSize:'40px',color:'#333'}}>Product API Using Axios Method</h2>
            <div className="card-container">
                {todos.map((val) => {
                    const { id, title, description, category, price, rating } = val;
                    return (
                        <div key={id} className="card">
                            <h3 className="card-title">{title}</h3>
                            <p className="card-description">{description}</p>
                            <p className="card-category">Category: {category}</p>
                            <div className="card-price-rating">
                                <span className="card-price">${price}</span>
                                <span className="card-rating">Rating: {rating}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Todo;
