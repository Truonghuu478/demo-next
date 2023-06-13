import { useAppDispatch, useAppSelector } from 'src/hooks'
import { WithLayout } from '../layouts'
import { incrementByAmount } from 'src/store/features/counter/counterSlice';
import { useEffect } from 'react';
import { fetchRoomsAction, fetchStudentsAction } from 'src/store/actions';
import { GetServerSideProps } from 'next';


export default function Home() {
  const counter = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch()

  const handle = (status: number) => {
    dispatch(incrementByAmount(status))
  }

  useEffect(() => {
    dispatch(fetchStudentsAction())
  }, [])

  return (
    <WithLayout>
      <h1 className="text-rose-700">hello next</h1>
      <div className="flex items-center">
        <button onClick={() => handle(-1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">-</button>
        <p className='px-5 text-rose-500'>  {counter.value}</p>
        <button onClick={() => handle(1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>


        {counter.rooms.map(item=>(
          <div className='card'>
              <p>{item.id}</p>
            <img src={item.hinhAnh} />
          </div>
        ))}
      </div>

    </WithLayout>
  )
}


// export const getServerSideProps:GetServerSideProps = async (context)=>{
//   	const { req, res, query } = context;

//     // Gọi API từ server
//     const response = await fetch('URL_API');
//     return {
//         props: {
         
//         }
//       };
// }