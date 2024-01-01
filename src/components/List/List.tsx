import { ReactNode } from "react"

type ListProps<T>={
    listItem: T[],
    render:(item:T)=> ReactNode
}

const List = <T,>({listItem,render}:ListProps<T>) => {
  return (
    <ul>
        {listItem.map((item,index)=>(
            <li key={index}>
                {render(item)}
            </li>
        ))}
    </ul>
  )
}

export default List