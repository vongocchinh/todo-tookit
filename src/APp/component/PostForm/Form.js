/* eslint-disable react-hooks/exhaustive-deps */
// import { nanoid } from 'nanoid';
import React, { useRef } from 'react'
import { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
// import { postAdd } from '../../reducer/Post/PostReducer';
import { AddPost, UpdatePost } from './../../action/Post';
import { GetDataPost } from './../../reducer/Post/PostReducer';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import Select from 'react-select'

export default function Form(props) {
    const [inputs, setInput] = useState({
        title:'',
        content:'',
        user:''
    })
    const dispatch=useDispatch();
    const history=useHistory();
    const Users=useSelector(state=>state.Users);
    const ref=useRef(null);
    var id =props.match.params.id;
    const postAll =useSelector(GetDataPost);
    const post=id&&postAll.find(post=>post.id===id);

    useEffect(() => {
        if(id!==' '){
            setInput({
                title:post.title,
                content:post.content,
                user:post.userID
            })
        }
    }, [post]);

    const userSelects=Users.map((value,key)=>{
            return (
                        <option key={key} value={value.userID} >{value.name}</option>
                    )
        });

    const onSubmit=(e)=>{
        e.preventDefault();
        if(id===' '){
            dispatch(AddPost({title:inputs.title,content:inputs.content,userID:inputs.user}))
            history.push('/')
        }else{
            dispatch(UpdatePost({id:post.id,title:inputs.title,content:inputs.content,date:post.date,userID:inputs.user}))
            history.push('/detail/'+id)
        }
        setInput({
            title:'',
            content:''
        });
        e.target.reset();
    }
    const onChange=(e)=>{
        var data={...inputs,[e.target.name]:e.target.value};
        setInput(data)
    }
    // console.log(inputs.user);
    return (
        <div className="from" >
            <form onSubmit={onSubmit} >
                <input value={inputs.title} name="title" ref={ref} onChange={onChange} placeholder="title" />
                <input value={inputs.content} name="content" ref={ref} onChange={onChange} placeholder="content" />
                <select value={inputs.user} name="user" onChange={onChange} >
                    <option value=""></option>
                    {/* <userSelects  /> */}
                    {userSelects}
                </select>
                <input value="Save" type="submit" />
            </form>
        </div>
    )
}
