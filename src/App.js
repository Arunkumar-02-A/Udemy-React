
import Navbar from './components/navbar';
import Title from './components/title';
import SaleImage from './components/Saleimage';
import Recommended from './components/Recommended';
import Topicsrecommended from './components/topics recommeded';
import Most from './components/most popular';
import Footer from './components/footer';


function App()
 {
  return (
    <>
      <Navbar></Navbar>
      <Title></Title>
      <SaleImage></SaleImage>
      <Recommended></Recommended>
      <Topicsrecommended></Topicsrecommended>
      <Most></Most>
      <Footer></Footer>
    </>
  )
}

export default App