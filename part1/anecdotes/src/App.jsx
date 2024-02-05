import { useState, useEffect } from "react";

const Title = ({ title }) => <h1>{title}</h1>;
const CustomizedButton = ({ name, onclick }) => <button onClick={onclick}>{name}</button>;

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length));
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });
  const [mostVotes, setMostVotes] = useState();
  
  useEffect(() => {
    lookingLargestNumber();
  }, [votes, selected]);
  
  const increaseVotes = () => {
    let gotoVotes = { ...votes };
    gotoVotes[selected] += 1;
    setVotes(gotoVotes);
  };

  const lookingLargestNumber = () => {
    const largestNumber = Object.values(votes).reduce((a, b) => Math.max(a, b));
    let index;
    for (const propiedad in votes) {
      if (votes[propiedad] === largestNumber && votes[propiedad] !== mostVotes) {
      index = Object.keys(votes).indexOf(propiedad);
      setMostVotes(index);
      break;
      }
    }
  };

  
  const noRepeatSelected = () => {
    let ruleWhile = Math.floor(Math.random() * anecdotes.length);
    if (ruleWhile !== selected) {
      return setSelected(ruleWhile);
    } else {
      return noRepeatSelected();
    }
  };

  return (
    <div>
      <Title title="Anecdote of the day" />
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <CustomizedButton name="vote" onclick={increaseVotes} />
      <CustomizedButton name="next anecdote" onclick={noRepeatSelected} />
      <Title title="Anecdote with most votes" />
      <p>{anecdotes[mostVotes]}</p>
      <p>has {votes[mostVotes]} votes</p>
        
    </div>
  );
}

export default App;
