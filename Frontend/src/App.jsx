
import {Route , Routes} from "react-router-dom"
import Home from 'c:/Users/Dell/Desktop/BookStore mearn stack/Frontend/src/Pages/Home';
import CreateBook from 'c:/Users/Dell/Desktop/BookStore mearn stack/Frontend/src/Pages/CreateBook';
import ShowBook from 'c:/Users/Dell/Desktop/BookStore mearn stack/Frontend/src/Pages/ShowBook';
import EditBook from 'c:/Users/Dell/Desktop/BookStore mearn stack/Frontend/src/Pages/EditBook';
import DeleteBook from 'c:/Users/Dell/Desktop/BookStore mearn stack/Frontend/src/Pages/DeleteBook';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  );
};

export default App;