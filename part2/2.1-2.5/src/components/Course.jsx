import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total';

function Course({course}) {
    const totalStack = course[0].parts.reduce((sum, part) => sum += part.exercises,0);
    const totalNode = course[1].parts.reduce((sum, part) => sum += part.exercises,0);
    return (
    <div>
        <Header title={course[0].name}  />
        {course[0].parts.map(part => <Content key={part.id} name={part.name} exercises={part.exercises} /> )}
        <Total total={totalStack}/>
        <Header title={course[1].name}  />
        {course[1].parts.map(part => <Content key={part.id} name={part.name} exercises={part.exercises} /> )}
        <Total total={totalNode}/>
    </div>
  )
}

export default Course