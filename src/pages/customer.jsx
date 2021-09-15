import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Customer =({members})=>{
  
  const params = useParams();
  const param = params["id"]
  const member = members.find(item => item.id === param)
 
    return(

<div>
  <h1>Detalhes do cliente</h1>
  <p>
    Nome: { member && member.name }
  </p>
  <Link to="/">
    Voltar
  </Link>
</div>
  )
}
export default Customer;



