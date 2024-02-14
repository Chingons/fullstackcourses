import axios from 'axios';
let url = 'http://localhost:3000/persons';

const getAll = () => {
const allData = axios.get(url);
return allData.then(response => response.data);
} 

const newPerson = newDataPerson =>{
    const newEntry = axios.post(url, newDataPerson);
    return newEntry.then(response => response.data);
} 

const deletePerson = idDeletePerson => {
    const personDelete = axios.delete(`${url}/${idDeletePerson}`);
    return personDelete.then(response => response.data);
}

const updatePerson = (idUpdate, phoneUpdate) =>{
    const personUpdate = axios.put(`${url}/${idUpdate}`, phoneUpdate);
    return personUpdate.then(response => response.data);
}

export default {getAll, newPerson, deletePerson, updatePerson}