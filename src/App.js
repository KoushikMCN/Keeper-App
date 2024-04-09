import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Note from './components/Note'
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/note/:id' element={<Note />} />
      <Route path='/note/add' element={<AddNote />} />
      <Route path='/note/edit/:id' element={<EditNote />} />
    </Routes>
  );
}

export default App;
