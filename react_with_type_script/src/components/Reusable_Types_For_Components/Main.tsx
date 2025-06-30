
import User_info from './User_info'
import Admin_info from './Admin_info';

const Main = () => {
  return (
    <div>
    <h1>User Info</h1>
    <User_info username="alex" email="asdas@gmail.com" age={30}></User_info>
    <h1>Admin Info</h1>
    <Admin_info 
    username="alex" email="asdas@gmail.com" age={30} admin="yes"
     ></Admin_info>
    </div>
  )
}

export default Main