import BestSellers from "./components/best_sellers/BestSellers";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Collection from "./components/collection/Collection";

function App(){
  return(
    <div className='App'>
      <Header />
      <Promo />
      <BestSellers />
      <Collection />
    </div>
  )
}

export default App;