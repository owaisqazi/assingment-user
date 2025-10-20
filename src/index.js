import React, { Component, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// =======================================================================================
// EAGERLY LOADED COMPONENTS
// Yeh components page ke initial load ke liye critical hain.
// Inka code main bundle (main.chunk.js) ka part banega.
// =======================================================================================

// HomeV6 ko eager load karein kyunki yeh default route hai (Landing Page)
import HomeV6 from './components/home-v6';

// ErrorPage ko bhi eager load karein kyunki 404 page turant dikhna chahiye
import ErrorPage from './components/404';

// Bootstrap bundle ko bhi eager load rehne dein, ye UI ke liye critical hai
// Agar ye bahut bada hai, to isko CSS mein optimize karna ya sirf zaruri parts import karna sochein
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

// jQuery ko global banana agar aapke components is par depend karte hain
// Agar possible ho, toh jQuery dependencies ko reduce karein ya remove karein
import $ from 'jquery';
window.$ = $;
window.jQuery = $;

// =======================================================================================
// LAZY LOADED COMPONENTS
// Baki sab components ko lazy import rehne dein.
// Inka code tabhi download hoga jab inki zaroorat padegi (yani jab inke routes par user navigate karega).
// =======================================================================================

const HomeV2 = lazy(() => import('./components/home-v2'));
const HomeV3 = lazy(() => import('./components/home-v3'));
const HomeV4 = lazy(() => import('./components/home-v4'));
const HomeV5 = lazy(() => import('./components/home-v5'));
const HomeV7 = lazy(() => import('./components/home-v7'));
const HomeV8 = lazy(() => import('./components/home-v8'));
const HomeV9 = lazy(() => import('./components/home-v9'));
const HomeV10 = lazy(() => import('./components/home-v11')); // Dhyan dein, ye home-v11 se import ho raha hai

const About = lazy(() => import('./components/about'));
const Service = lazy(() => import('./components/service'));
const ServiceDetails = lazy(() => import('./components/service-details'));
const Portfolio = lazy(() => import('./components/portfolio'));
const PortfolioV2 = lazy(() => import('./components/portfolio-v2'));
const PortfolioDetails = lazy(() => import('./components/portfolio-details'));
const Team = lazy(() => import('./components/team'));
const TeamDetails = lazy(() => import('./components/team-details'));
const Faq = lazy(() => import('./components/faq'));
const ComingSoon = lazy(() => import('./components/coming-soon'));
const Location = lazy(() => import('./components/location'));

const Shop = lazy(() => import('./components/shop'));
const ShopGrid = lazy(() => import('./components/shop-grid'));
const ProdductDetails = lazy(() => import('./components/product-details'));
const ShopLeftSidebar = lazy(() => import('./components/shop-left-sidebar'));
const ShopRightSidebar = lazy(() => import('./components/shop-right-sidebar'));

const BlogGrid = lazy(() => import('./components/blog-grid'));
const BlogLeftSidebar = lazy(() => import('./components/blog-left-sidebar'));
const BlogRightSidebar = lazy(() => import('./components/blog-right-sidebar'));
const Blog = lazy(() => import('./components/blog'));

const BlogDetails = lazy(() => import('./components/blog-details'));
const Contact = lazy(() => import('./components/contact'));
const Cart = lazy(() => import('./components/cart'));
const Checkout = lazy(() => import('./components/checkout'));
const MyAccount = lazy(() => import('./components/my-account'));
const Login = lazy(() => import('./components/login'));
const Register = lazy(() => import('./components/register'));
const AddListing = lazy(() => import('./components/add-listing'));
const Wishlist = lazy(() => import('./components/wishlist'));
const OrderTracking = lazy(() => import('./components/order-tracking'));
const History = lazy(() => import('./components/history'));
const ProjectReport = lazy(() => import('./components/ProjectReport'));
const Philosophy = lazy(() => import('./components/Philosophy'));
const Physics = lazy(() => import('./components/Physics'));
const Programming = lazy(() => import('./components/Programming'));
const Psychology = lazy(() => import('./components/Psychology'));
const Sociology = lazy(() => import('./components/Sociology'));
const Statistics = lazy(() => import('./components/Statistics'));
const Nursing = lazy(() => import('./components/Nursing'));
const Management = lazy(() => import('./components/Management'));
const Linguistics = lazy(() => import('./components/Linguistics'));
const Computer_Science = lazy(() => import('./components/Computer_Science'));
const Business = lazy(() => import('./components/Business'));
const Accounting = lazy(() => import('./components/Accounting'));
const IT_Assignments = lazy(() => import('./components/IT_Assignments'));
const Engineering = lazy(() => import('./components/Engineering'));
const English_As = lazy(() => import('./components/English_As'));
const Biology_Science = lazy(() => import('./components/Biology_Science'));
const Marketing = lazy(() => import('./components/Marketing'));
const Math = lazy(() => import('./components/Math'));
const Finance = lazy(() => import('./components/Finance'));
const Economic = lazy(() => import('./components/Economic'));
const History_As = lazy(() => import('./components/History_As'));
const Geography = lazy(() => import('./components/Geography'));
const Law = lazy(() => import('./components/Law'));
const Chemistry = lazy(() => import('./components/Chemistry'));
const Dissertation_Support = lazy(() => import('./components/Dissertation_Support'));
const Academic_Editing = lazy(() => import('./components/Academic_Editing'));


class Root extends Component {
    render() {
        return (
            <>
                <Router>
                    <div>
                        {/* Suspense fallback div ko aap aur style kar sakte hain */}
                        <Suspense fallback={
                            <div className="loader-container109">
                                <div className="spinner109"></div>
                            </div>
                        }>
                            <Switch>

                                {/* HomeV6 ab eager loaded hai */}
                                <Route exact path="/" component={HomeV6} />
                                <Route path="/home-v2" component={HomeV2} />
                                <Route path="/home-v3" component={HomeV3} />
                                <Route path="/home-v4" component={HomeV4} />
                                <Route path="/home-v5" component={HomeV5} />
                                <Route path="/home-v7" component={HomeV7} />
                                <Route path="/home-v8" component={HomeV8} />
                                <Route path="/home-v9" component={HomeV9} />
                                <Route path="/home-v10" component={HomeV10} />

                                <Route path="/Assignment-help" component={About} />
                                <Route path="/Dissertation-Help" component={Service} />
                                <Route path="/service-details" component={ServiceDetails} />
                                <Route path="/Essay-Help" component={Portfolio} />
                                <Route path="/Live-session" component={PortfolioV2} />
                                <Route path="/Presentation-Writing" component={PortfolioDetails} />
                                <Route path="/Speech-Help" component={Team} />
                                <Route path="/Video-solution" component={TeamDetails} />
                                <Route path="/faq" component={Faq} />
                                <Route path="/project-Report" component={ProjectReport} />
                                <Route path="/coming-soon" component={ComingSoon} />
                                {/* ErrorPage ab eager loaded hai */}
                                <Route path="/404" component={ErrorPage} />
                                <Route path="/Lab-Report" component={Location} />
                                <Route path="/shop" component={Shop} />
                                <Route path="/shop-grid" component={ShopGrid} />
                                <Route path="/shop-left-sidebar" component={ShopLeftSidebar} />
                                <Route path="/shop-right-sidebar" component={ShopRightSidebar} />

                                <Route path="/product-details" component={ProdductDetails} />
                                {/* blog */}
                                <Route path="/blog-grid" component={BlogGrid} />
                                <Route path="/blog-left-sidebar" component={BlogLeftSidebar} />
                                <Route path="/blog-right-sidebar" component={BlogRightSidebar} />
                                <Route path="/blog" component={Blog} />

                                <Route path="/blog-details/:name" component={BlogDetails} />
                                <Route path="/contact" component={Contact} />
                                <Route path="/cart" component={Cart} />
                                <Route path="/checkout" component={Checkout} />
                                <Route path="/my-account" component={MyAccount} />
                                <Route path="/login" component={Login} />
                                <Route path="/register" component={Register} />
                                <Route path="/add-listing" component={AddListing} />
                                <Route path="/wishlist" component={Wishlist} />
                                <Route path="/order-tracking" component={OrderTracking} />
                                <Route path="/history" component={History} />
                                <Route path="/philosophy-assignments-help" component={Philosophy} />
                                <Route path="/physics-assignments-help" component={Physics} />
                                <Route path="/programming-assignments-help" component={Programming} />
                                <Route path="/psychology-assignments-help" component={Psychology} />
                                <Route path="/sociology-assignments-help" component={Sociology} />
                                <Route path="/statistics-assignments-help" component={Statistics} />
                                <Route path="/nursing-assignments-help" component={Nursing} />
                                <Route path="/management-assignments-help" component={Management} />
                                <Route path="/linguistics-assignments-help" component={Linguistics} />
                                <Route path="/computer-science-assignments-help" component={Computer_Science} />
                                <Route path="/business-assignments-help" component={Business} />
                                <Route path="/accounting-assignments-help" component={Accounting} />
                                <Route path="/IT-assignments-help" component={IT_Assignments} />
                                <Route path="/engineering-assignments-help" component={Engineering} />
                                <Route path="/english-assignments-help" component={English_As} />
                                <Route path="/biology-science-assignments-help" component={Biology_Science} />
                                <Route path="/marketing-assignments-help" component={Marketing} />
                                <Route path="/math-assignments-help" component={Math} />
                                <Route path="/finance-assignments-help" component={Finance} />
                                <Route path="/economic-assignments-help" component={Economic} />
                                <Route path="/history-assignments-help" component={History_As} />
                                <Route path="/geography-assignments-help" component={Geography} />
                                <Route path="/law-assignments-help" component={Law} />
                                <Route path="/chemistry-assignments-help" component={Chemistry} />
                                <Route path="/dissertation-support-assignments-help" component={Dissertation_Support} />
                                <Route path="/academic-editing-services-assignments-help" component={Academic_Editing} />

                                {/* Catch-all route for 404 - ab eager loaded hai */}
                                <Route path="*" component={ErrorPage} />

                            </Switch>
                        </Suspense>
                    </div>
                </Router>
            </>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('quarter'));