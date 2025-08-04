import { useSelector, useDispatch } from "react-redux";
import { increment } from "./multiLikeSlice";

function PdtCard({id}){
    const dispatch = useDispatch();
    const count = useSelector((state)=> state.storeincrement.likes[id] || 0)

    return(
        <div className="card flex gap-6">
            <h2>Product Name :{id}</h2>
            <p>Likes:{count}</p>
            <button onClick={()=>{ dispatch(increment(id)) }}>Like</button>
        </div>
    )    
}

export default PdtCard;