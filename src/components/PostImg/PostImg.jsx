import axios from "axios";
import { useState,useEffect } from "react";
import '../PostImg/PostImg.scss'

const PostImg = () =>{
    const [img, setImg] =useState([]);
    const [page,setPage] = useState(1);


    useEffect(() =>{
        const featchData =async () => {
            
            const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=8`);
            page > 1
              ? setImg([...img, ...response.data]): setImg([...response.data]);
        };
        featchData();
    },[page]);

    const loadMore = () =>{
        setPage(page+1);
    };

    return (
        <div className="container-img">
            <div className="img">
                {img.map((item)=>(
                    <div className="img-list" key={img.id}>
                        <img src={item.download_url} alt="" />
                    </div>
                ))}
            </div>
            <div className="button">
                <button onClick={loadMore}>More</button>
            </div>
        </div>
    )

}

export default PostImg;