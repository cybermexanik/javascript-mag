import BestSellers from "./components/best_sellers/BestSellers";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Collection from "./components/collection/Collection";
import FollowUs from "./components/follow_us/FollowUs";

function App(){
  return(
    <div className='App'>
      <Header />
      <Promo />
      <BestSellers />
      <Collection />
      <FollowUs/>
    </div>
  )
}

export default App;