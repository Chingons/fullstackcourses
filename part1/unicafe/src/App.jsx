import { useState } from "react"

const Title = ({title}) => <h1>{title}</h1>
const NewButton = ({name, onclick}) => <button onClick={onclick} >{name}</button>
const StaticsLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>
const Statistics = ({noteGood, noteNeutral, noteBad}) =>
{
  const all = noteGood + noteNeutral + noteBad;
  const average = noteGood||noteBad?((noteGood - noteBad)/(all)):0;
  const positive = noteGood?((noteGood/all)*100):0;
  return(
    <>
    {
      noteGood||noteBad||noteNeutral?(
        <>
        <table>
          <tbody>
          
        <StaticsLine key={'good'} text={'good'} value={noteGood} />
        <StaticsLine key={'neutral'} text={'neutral'} value={noteNeutral} />
        <StaticsLine key={'bad'} text={'bad'} value={noteBad} />
        <StaticsLine key={'all'} text={'all'} value={all} />
        <StaticsLine key={'average'} text={'average'} value={average} />
        <StaticsLine key={'positive'} text={'positive'} value={positive} />
        </tbody>
        </table>
        
      </>
      ):
      (
        <p>No feedback given</p>
      )
    }
    </>
   
  )
};

const App = () => {
  const [noteGood, setNoteGood] = useState(0);
  const [noteNeutral, setNoteNeutral] = useState(0);
  const [noteBad, setNoteBad] = useState(0);
  

  return (
    <div>
      <Title title="give feedback"/>
      <NewButton name={'good'} onclick={()=>setNoteGood(noteGood + 1)} />
      <NewButton name={'neutral'} onclick={()=>setNoteNeutral(noteNeutral + 1)} />
      <NewButton name={'bad'} onclick={()=>setNoteBad(noteBad + 1)} />
      <Title title="statistics"/>
      <Statistics noteGood={noteGood} noteBad={noteBad} noteNeutral={noteNeutral}/>
    </div>
  )
}

export default App
