import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/store/store';
import { fetchRoomsAction,fetchStudentsAction } from 'src/store/actions';

export interface CounterState {
    value: number,
    rooms: Array<any>,
    students :Array<any>
}

const initialState: CounterState = {
    value: 0,
    rooms:[],
    students:[]
}


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action:PayloadAction<number>)=>{
            state.value += action.payload

        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRoomsAction.fulfilled, (state: CounterState, {payload}: PayloadAction<any>)=>{
            state.rooms = [...payload.content]
        })
            .addCase(fetchStudentsAction.fulfilled, (state: CounterState, { payload }: PayloadAction<any>) => {
            state.students = [...payload.data]

        })
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const selectCount = (state:RootState)=>state.counter

export default counterSlice.reducer