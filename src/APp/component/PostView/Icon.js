import React from 'react'
import {useDispatch} from 'react-redux'
import { CountIcon } from '../../action/Post';

export default function Icon({post}){
    const reactionEmoji = {
        thumbsUp: '👍',
        hooray: '🎉',
        heart: '❤️',
        rocket: '🚀',
        eyes: '👀'
      }
      const dispatch=useDispatch();
    const htmls=Object.entries(reactionEmoji).map(([name,icon])=>{
        return(
              <button onClick={()=>dispatch(CountIcon({name:name,post:post.id}))}>{icon} {post.reactions[name]}</button>
        )
    })
    return htmls;
}
     
