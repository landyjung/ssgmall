import { createSlice } from "@reduxjs/toolkit";

//변경 규칙 생성
const multiLikeSlice = createSlice({
    name: 'multiLike',
    initialState:{
        likes:{}
    },
    reducers:{
        increment:(state,action)=>{
            const id = action.payload; //action 실행하는 임의 id값 가져오기 
            state.likes[id]=(state.likes[id] || 0)+1;
        }
    }
})

export const { increment } = multiLikeSlice.actions;       //액션 내보내기
export default multiLikeSlice.reducer