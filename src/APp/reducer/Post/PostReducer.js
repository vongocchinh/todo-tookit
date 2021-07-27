import {createSlice} from '@reduxjs/toolkit';



var initialState=[
    {
        id:'1',
        title:"Khoa hoc reactjs",
        content:'Khoa hoc lap js nam hoc 2021 reactjs',
        date:"2021-07-26T15:41:13.984Z",
        userID:'1',
        reactions:{
            thumbsUp: 0,
            hooray: 0,
            heart: 0,
            rocket: 0,
            eyes: 0
        }
    },
    {
        id:'2',
        title:"Khoa hoc nodejs",
        content:'Khoa hoc lap js nam hoc 2021 nodejs',
        date:"2021-07-26T15:21:13.984Z",
        userID:'2',
        reactions:{
            thumbsUp: 0,
            hooray: 0,
            heart: 0,
            rocket: 0,
            eyes: 0
        }
    }
]

const postSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdd(state,action){
            console.log(action);
            state.push(action.payload);
        },
        postAdd2:{
            reducer(state,action){
                // console.log();
                state.push(action.payload);
            },
            prepare(title,content){
                console.log(title);
            }
        },
        deletePost(state,action){
            var index=state.findIndex(post=>post.id===action.payload);
            if(index!==-1){
                state.splice(index,1);
            }
        },
        updatePost(state,action){
            var index=state.findIndex(post=>post.id===action.payload.id);
            state[index]=action.payload;
        },
        countIcon(state,action){
            var index=state.find(post=>post.id===action.payload.id);
            if(index ){
                index.reactions[action.payload.name]++;
            }
        }
    }
})

export const {postAdd,postAdd2,deletePost,updatePost} =postSlice.actions;
export default postSlice.reducer;

export const GetDataPost = state => state.Post;