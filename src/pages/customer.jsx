import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Customer =({members})=>{
  /** 
  const member = members.find(item =>item.id)
  const history = useHistory()
  console.log(history)
      **/
  const param = useParams();
   return(

<div>
  <h1>Detalhes do cliente</h1>

  <p>
    Nome: customer{param.id}

  </p>

  <Link to="/">
    Voltar
  </Link>
</div>


  )
}
export default Customer;



