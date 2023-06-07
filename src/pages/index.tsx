import { useAppSelector } from 'src/hooks'
import { WithLayout } from '../layouts'
import  { CounterState } from 'src/store/features/counter/counterSlice'

export default function Home() {
  const counter = useAppSelector(state=>state.counter)
  console.log('counter',counter);
  
  return (
    <WithLayout>
      <h1 className="text-rose-700">hello next</h1>
      <button>-</button>
         23
      <button>+</button>

    </WithLayout>
  )
}



