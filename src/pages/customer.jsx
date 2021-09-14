import React from 'react';
import { 
  useParams, 
  Link, 
  useHistory 
} from 'react-router-dom';
/***
  *const param = useParams();
  const member = members.find(item =>param)
  console.log(history)
  const history = useHistory()
  * ****/
const Customer =({members})=>{
  

    return(

<div>
  <h1>Detalhes do cliente</h1>

  <p>
    Nome: customer{}

  </p>

  <Link to="/">
    Voltar
  </Link>
</div>


  )
}
export default Customer;



