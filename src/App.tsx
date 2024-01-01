
import { useState } from 'react'
import Header from './components/Header/Header'
import Section from './components/Section/Section'
import Counter from './components/Counter/Counter'
import List from './components/List/List'

export default function App() {
  const [count, setCount] = useState<number>(0)
  const data: string[] = ['item 1', 'item 2', 'item 3', 'item 4']

  

  return (
    <div>
      <Header title='Header' />
      <Section sectionTitle='Post'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta beatae quae velit iure asperiores nostrum voluptas minima voluptate labore blanditiis.</p>
      </Section>
      <Counter setCount={setCount}>
        Count is {count}
      </Counter>
      <List listItem={data} render={(item) =><h3>{item}</h3>} />
    </div>
  )
}
