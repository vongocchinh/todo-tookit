import React from 'react'
import {useSelector} from 'react-redux'
import { GetDataPost } from './../../reducer/Post/PostReducer';
import { parseISO } from 'date-fns';
import { formatDistanceToNow } from 'date-fns';
import { Link, Redirect } from 'react-router-dom';

const PareTime=(time)=>{
    let timeAgo='';
    if(time ){
      const date=parseISO(time);
      const timePeriod=formatDistanceToNow(date);
      timeAgo=timePeriod+" trước";
    }
    return timeAgo;
  }
  const Auth=({userID})=>{
    const Users =useSelector(state=>state.Users);
    const user=Users.find(user=>user.userID===userID);
    return <span className="title">By {user.name}</span>
  }
export default function Detail(props) {
    const id=props.match.params.id;
    const Posts=useSelector(GetDataPost);
    if(!id){
        return <Redirect to="/" />
    }
    
    const dataDetail=id&&Posts.find(post=>post.id===id);
    return (
        <div className="detail-layout">
                <div className="Detail">
                    <div className="top-detail">
                        <p className="title">{dataDetail.title}</p>
                        <p className="time">{PareTime(dataDetail.date)}</p>
                    </div>
                    <p className="content">{dataDetail.content}</p>
                    <Auth userID={dataDetail.userID} />
                    <Link to={"/form/"+dataDetail.id} >Edit</Link>
                </div>

        </div>
    )
}
