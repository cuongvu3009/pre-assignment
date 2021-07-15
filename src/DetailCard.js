import React, {useEffect, useState} from "react";
import Loading from "./Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://jsonplaceholder.typicode.com/users/";

 const  DetailCard = () => {
  const { id } = useParams();
  const [card, setCard] = useState()
  
  const getUser = async () => {
      const response = await fetch(`${url}${id}`)
      const data = await response.json()
      setCard(data)      
  }
  useEffect(() => {
      getUser()
  },[])

  if (!card) {
      return <h2>No information to display</h2>
  } else {
      const {id, name, username, email, phone, company, website, address} = card;
      return (
          <section key={id} className="full">
              <div className="container">
              <ul>
                  <li>name: {name}</li>
                  <li>username: {username}</li>
                  <li>email: {email}</li>
                  <li>phone: {phone}</li>
                  <li>website: {website}</li>
                  <li>company:{company.name}</li>
                  <li>address:
                    <li>street: {address.street}</li>
                  </li>
                  
            </ul>
              </div>
              
         </section>
      )
  }
  
}

export default DetailCard;