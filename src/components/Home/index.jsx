import './styles.css'
import { Link, useHistory } from 'react-router-dom'

const Home =({members})=>{
//  console.log(type)
  const history = useHistory();
//  console.log(history)
  return(
  <div className="home">
    <div className="link">{members.map(member => <Link type={member.type} key={member.id}
     to={ member.type = "pj" ? (
      `/company/${member.id}`
     ):(
      `/customer/${member.id}`
     )} >{member.name}</Link>)}</div>
  </div>
  )
}
export default Home;

