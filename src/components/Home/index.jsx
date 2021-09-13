import './styles.css'
import { Link } from 'react-router-dom'
import { members } from '../Members/index.jsx'
const Home =()=>{
  return(
  <div className="home">
    <h1>Home</h1>
    <div className="link">{members.map(item => <Link>{item.name}</Link>)}</div>
  </div>
  )
}
export default Home;

