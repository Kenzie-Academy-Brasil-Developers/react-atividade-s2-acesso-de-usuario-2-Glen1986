import React from 'react';
import { Link, useParams } from 'react-router-dom'

const Company =({members})=>{
  const params = useParams()
  const param = params["id"]
  const member = members.find(item => item.id ===  param)

  return(
<div>
  <h1>Detalhes da Empresa</h1>

  <p>
    Nome da empresa: {member && member.name}
  </p>

  <Link to="/">
    Voltar
  </Link>
</div>
  )
}
export default Company;
