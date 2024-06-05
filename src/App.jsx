import './App.css'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundPolicy from './components/RefundPolicy';
import TermsAndConditions from './components/TermsAndConditions'
import Shop from './components/Shop';
import PremiumOversize from './components/Home/Category/PremiumOversize';
import PremiumCotton from './components/Home/Category/PremiumCotton';
import Product from './components/Product';
import Search from './components/Search';
import PageNotFound from './components/PageNotFound';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy></PrivacyPolicy>}></Route>
          <Route path="/refund-policy" element={<RefundPolicy></RefundPolicy>}></Route>
          <Route path="/terms-and-conditions" element={<TermsAndConditions></TermsAndConditions>}></Route>
          <Route path="/categories" element={<Shop></Shop>}></Route>
          <Route path="/categories/premium-oversize" element={<PremiumOversize></PremiumOversize>}></Route>
          <Route path="/categories/premium-cotton" element={<PremiumCotton></PremiumCotton>}></Route>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/search" element={<Search></Search>}></Route>
          <Route path="*" element={<PageNotFound name={"Page Not Found"}></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
