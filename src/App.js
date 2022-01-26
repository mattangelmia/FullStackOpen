import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './Total'


const App = () => {
 const courseName = 'Half Stack application development'
const totalNumber = 31
  return (
    <div>
      <Header courseName={courseName}/> 
      <Content/>
      <Total totalNumber={totalNumber}/>
    </div>
  )
}

export default App