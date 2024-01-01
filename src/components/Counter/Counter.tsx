import { ReactNode } from 'react'

type CounterProps = {
    children: ReactNode,
    setCount: React.Dispatch<React.SetStateAction<number>>
}

const Counter = ({ children, setCount }:CounterProps) => {
    return (
        <div>
            <h1>{children}</h1>
            <button onClick={() => setCount((previousValue) => previousValue + 1)}>+</button>
            <button onClick={() => setCount((previousValue) => previousValue - 1)}>-</button>
        </div>
    )
}

export default Counter