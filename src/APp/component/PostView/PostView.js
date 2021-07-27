import React from "react";
import { Link } from "react-router-dom";
import "./styels.css";
import {useSelector,useDispatch} from 'react-redux'
import { GetDataPost } from './../../reducer/Post/PostReducer';
import { formatDistanceToNow, parseISO } from "date-fns";
import { Delete } from "../../action/Post";
import Icon from './Icon';



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

const Item = (props) => {
  const onDelete=()=>{
    props.onDelete(props.value.id);
  }
  return (
    <div className="item-row">
      <div className="item">
        <Link to={"/detail/"+props.value.id} className="title">{props.value.title}</Link>
        <p onClick={onDelete}>xoa</p>
        <p className="time"><i>{PareTime(props.value.date)}</i></p>
      </div>
      <div>
        <Auth userID={props.value.userID} />
       
      </div>
      <div>
      <Icon post={props.value} />
      </div>
    </div>
  );
};


export default function PostView() {
  const disPatch=useDispatch();
  const Posts = useSelector(GetDataPost);
  // const Users =useSelector(state=>state.Users);

  const onDelete=(id)=>{
    disPatch(Delete(id))
  }
  const posts=Posts.slice().sort((a,b)=>b.date.localeCompare(a.date));
  const showData=posts.map((value,key)=>{
    return <Item onDelete={onDelete} key={key} value={value} />
  })
  return <div className="list">
      <Link to={"/form/ "} className="add">ADD</Link>
      {showData}
  </div>;
}



/* 

abc:{
a:0,
b:0
}
dùng mảng để check cái action get rồi struy cập để xử lý abc[action,get lên a b ...]++;
*/