import { BrowserRouter, Route, Routes } from 'react-router'
import AddProduct from './components/pages/AddProduct'
import ProductList from './components/pages/ProductList'
import EditProduct from './components/pages/Editproduct'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
