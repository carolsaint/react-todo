import Header from "./components/Header/Header"
import Form from "./components/Form/Form"
import Footer from "./components/Footer/Footer"
import Products from "./components/Products/Products"

const App = () => {

  // const [productsList, setProductList] = useState([])
  // const [page, setPage] = useState('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')


  // const requestPage = async () => {
  //   const response = await fetch(page)
  //   const json = await response.json()

  //   const { products, nextPage } = json

  //   const newProductList = products.map((element) => <Product key={Math.random() * 255} productData={element} />)


  return (
    <div>
      <Header/>
      <Form />
      <Footer />
      {/* <Products /> */}
    </div>
  )
}


export default App