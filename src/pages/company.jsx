import React from 'react';
import { Link, useParams } from 'react-router-dom'

const Company =({members})=>{
  const params = useParams()
  const member = members.find(item => item.id === params )

//  const name = member.filter(item=> item === params)
  console.log(params )
  console.log( member )
  return(
<div>
  <h1>Detalhes da Empresa</h1>

  <p>
    Nome da empresa: {member}
  </p>

  <Link to="/">
    Voltar
  </Link>
</div>
  )
}
export default Company;
