import { useParams } from "react-router-dom"

const Hello:React.FC=()=>{

    const {id}=useParams();

    return (
        <div>
            <p>Id is :{id}</p>
        </div>
    )
}

export default Hello;