import { useState, useEffect } from "react"
import Titles from "../components/Titles";
import Persons from "../components/Persons";
import PersonForm from "../components/PersonForm";
import Filter from "../components/Filter";
import axios from 'axios';
import phoneServices from './services/phoneServices'
import Notifications from "../components/Notifications";

function App() {
  const [persons, setPersons] = useState([]); 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState([]);
  const [inputFilter, setInputFilter] = useState('');
  const [notification, SetNotification] = useState();
  const [notificacionStyle, setNotificacionStyle] = useState();
 
  useEffect(()=>{
    phoneServices.getAll().then(allData => {
      setPersons(allData);
      setFilter(allData);
    });
  },[]);
 
  const addNewName = (event) =>{
    setNewName(event.target.value);
  }

  const addNewNumber = (event) =>{
    setNewNumber(event.target.value);
  }

  const lookingFilter = (event) =>{
    setInputFilter(event.target.value);
    setFilter(persons.filter(person => person.name.toUpperCase().includes(event.target.value.toUpperCase()) || person.number.includes(event.target.value)));
  }

  const addNewPerson = (event) =>{
    event.preventDefault();
    const newPerson = {name:newName, number:newNumber};
    const noRepeatName = persons.filter((person) => person.name.toUpperCase() === newName.toUpperCase());
    const noRepeatNumber = persons.filter((person) => person.number === newNumber);
    if (noRepeatNumber.length>0){
      alert(`${newNumber} is already added to phonebook`) ;
    }
    else if(noRepeatName.length>0 && noRepeatNumber.length===0){
      const idUpdate = noRepeatName[0].id;
      if (window.confirm(`${noRepeatName[0].name} is already added to phonebook, replace the old number with a new one?`)){
        phoneServices.updatePerson(idUpdate, newPerson).then(response =>{
          const filterUpdate = filter.filter(dataFilter => dataFilter.id !== response.id);
          const personsUpdate = persons.filter(person => person.id !== response.id);
          setFilter(filterUpdate.concat(response));
          setPersons(personsUpdate.concat(response));
          setNewName('');
          setNewNumber('');
        }).catch(error =>{
          setNotificacionStyle('error');
          SetNotification(`information of ${noRepeatName[0].name} has already been removed from server`);
          setTimeout(()=>{
            SetNotification();
            setNotificacionStyle();
          },5000)
        })
      } 
    
    }
    else{
      phoneServices.newPerson(newPerson).then(
        response =>{
          setPersons(persons.concat(response));
          setFilter(filter.concat(response) );
          setNotificacionStyle('checked');
          SetNotification(`Added ${response.name}`);
          setTimeout(()=>{
            SetNotification();
            setNotificacionStyle();
          },5000)
        }
      );
      setNewName('');
      setNewNumber('');
    }
  }
 
  const deletedPerson = (id, namePerson) =>{
   if(window.confirm(`Deleted ${namePerson} ?`)){
    phoneServices.deletePerson(id).then(
      response => {
        setPersons(persons.filter(personDeleted=> personDeleted.id !== response.id));
        setFilter(filter.filter(personDeleted => personDeleted.id !== response.id));
      })
   }
  }

  return (
    <div>
      {notification&& <Notifications styles={notificacionStyle} notification={notification} />} 
      <Titles Title="Phonebook" Category={2} />
      <Filter inputFilter={inputFilter} lookingFilter={lookingFilter} />
      <Titles Title="add new" Category={3} />
      <PersonForm addNewPerson={addNewPerson} newName={newName} addNewName={addNewName} newNumber={newNumber} addNewNumber={addNewNumber} />
      <Titles Title="Numbers" Category={3} />
      {filter.map((person) => <Persons key={person.id} name={person.name} idPerson={person.id} number={person.number} deletedPerson={deletedPerson} />)}
    </div>
  )
}

export default App
