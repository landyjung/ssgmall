import CollectionWrap from "../Components/CollectionWrap";
import MainBanner from "../Components/MainBanner";
import BestItem from "../Components/BestItem";
import SpecialItem from "../Components/SpecialItem";
import InterView from "../Components/InterView"
import MainBottom from "../Components/MainBottom";
import Footer from "../Components/Footer";

function Home(){
  return(
    <main className="home">
      <MainBanner />
      <CollectionWrap />
      <BestItem />
      <SpecialItem />
      <InterView />
      <MainBottom />
      <Footer />
    </main>
  )
}

export default Home;