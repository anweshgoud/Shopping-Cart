import { Link } from "react-router-dom";
import { Usertype } from "../types/User";
import "./EachUser.scss"
import { useContext } from "react";
import TotalContext1 from "../context/TotalContext";
import { TotalContext } from "../context/createcontext";

interface EachUserProp{
    eachUser:Usertype,
}

const EachUser: React.FC<EachUserProp> = ({ eachUser }) => {
  const {handleStatus}=useContext(TotalContext);
    return (
      <div className="each-user-class">
        <Link to={`/each-user/${eachUser.id}`} onClick={()=>handleStatus()}>
          <ul
            className="dropdown-menu position-static d-grid gap-1 p-2 rounded-3 mx-0 shadow w-220px"
            data-bs-theme="light"
          >
            <li>Name:{eachUser.name}</li>
            <li>Email:{eachUser.mail}</li>
          </ul>
        </Link>
      </div>
    );
  };
  
  export default EachUser;