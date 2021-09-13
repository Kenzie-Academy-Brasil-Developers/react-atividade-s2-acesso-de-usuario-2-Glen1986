import React from 'react';
import { Link } from 'react-router-dom'

const Company =({member})=>{
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
