import { useContext } from "react";
import { TotalContext } from "../context/createcontext";
import EachUser from "../eachUser/EachUser";

const UsersList:React.FC=()=>{

    const {userArray}=useContext(TotalContext);

    return (
        <div className="product-list-class">
            {userArray.length===0 && <p>Your list is empty </p>}
          {userArray.map((eachUser) => {
            return <EachUser eachUser={eachUser}></EachUser>;
          })}
        </div>
      );
}

export default UsersList;