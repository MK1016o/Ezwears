import Header from './Home/Header'
import CarouselTransition from './Home/CarouselTransition'
import Categories from './Home/Categories'
import OverSizedTees from './Home/OverSizedTees'
import RegularFitTees from './Home/RegularFitTees'
import Footer from './Home/Footer'

const Home = () => {
  return (
    <>
      <Header></Header>
      <CarouselTransition></CarouselTransition>
      <Categories></Categories>
      <OverSizedTees></OverSizedTees>
      <RegularFitTees></RegularFitTees>
      <Footer></Footer>
    </>
  )
}

export default Home
