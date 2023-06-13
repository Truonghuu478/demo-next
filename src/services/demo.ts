import { request } from "src/configs";

export const fetchRooms = ():Promise<any> => {
  return  request.get('phong-thue')
}




export const fetchStudents = (): Promise<any> => {
  return request.get('student/get-list')
}

