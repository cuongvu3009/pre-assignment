import React from 'react';
import {Link} from 'react-router-dom'

function Card({data}) {
    return (
        <>
            {data.map((person)=>(
                <div className="card" key={person.id}>
                    <img className="img" />
                    <h1>{person.name}</h1>
                    <p>@{person.username}</p>                   
                    <p className="link">http://{person.email}</p>           
                    <Link to={`/${person.id}`}>
                        <button className="btn">More details</button>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default Card

