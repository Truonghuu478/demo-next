import { createAsyncThunk } from "@reduxjs/toolkit"
import { AxiosResponse } from "axios"
import { fetchRooms, fetchStudents } from "src/services"

export enum DemoActionEnum {
    rooms =`counter/fetchRoomsAction`,
    student =`counter/fetchStudentsAction`
}


export const fetchRoomsAction = createAsyncThunk(
    DemoActionEnum.rooms,
    async () => {
        const response:AxiosResponse<any> = await fetchRooms()
        return response
    }
)

export const fetchStudentsAction = createAsyncThunk(
    DemoActionEnum.student,
    async () => {
        const response: AxiosResponse<any> = await fetchStudents()
        return response
    }
)
