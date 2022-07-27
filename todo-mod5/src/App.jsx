import Header from "./components/Header/Header"
import Form from "./components/Form/Form"
import Footer from "./components/Footer/Footer"
import Products from "./components/Products/Products"
import Div from "./components/Div/Div"

const App = () => {

  return (
    <div>
      <Header/>
      <Form />
      <Div text='Sua seleção especial' />
      <Products />
      <Div text='Compartilhe a novidade' />
      <Footer />
      
    </div>
  )
}


export default App