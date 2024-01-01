import React from 'react'
import Header from './components/Header/Header'
import Section from './components/Section/Section'

export default function App() {
  return (
    <div>
      <Header title='Header' />
      <Section sectionTitle='Post'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta beatae quae velit iure asperiores nostrum voluptas minima voluptate labore blanditiis.</p>
      </Section>
    </div>
  )
}
