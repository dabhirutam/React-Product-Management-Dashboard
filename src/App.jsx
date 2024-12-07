import { BrowserRouter, Route, Routes } from 'react-router'
import AddProduct from './components/pages/AddProduct'
import ProductList from './components/pages/ProductList'
import EditProduct from './components/pages/Editproduct'
import DeleteConformModal from './components/components/DeleteConformModal'
import SingleProduct from './components/pages/SingleProduct'

function App() {

  return (
    <>
      < DeleteConformModal />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/single/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
