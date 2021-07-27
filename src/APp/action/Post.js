import { nanoid } from "nanoid";

export const AddPost=(data)=>{
    var id =nanoid();
    // console.log(data);
    var payload={
        id,
        date:new Date().toISOString(),
        title:data.title,
        content:data.content,
        userID:data.userID
    }
    return {
        type:'posts/postAdd2',
        payload:payload
    }
}

export const UpdatePost=(data)=>{
    var payload={
        id:data.id,
        date:new Date().toISOString(),
        title:data.title,
        content:data.content,
        userID:data.userID
    }
    return {
        type:'posts/updatePost',
        payload:payload
    }
}


export const Delete=(id)=>{
    return {
        type:'posts/deletePost',
        payload:id
    }
}


export const CountIcon=(data)=>{
    var payload={
        name:data.name,
        id:data.post
    }
    return {
        type:'posts/countIcon',
        payload:payload
    }
}