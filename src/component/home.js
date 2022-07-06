import Features from './features'
import Slide1 from './slide1'
import Slide2 from './slide2'
import Products from './products'
import ItemsHome from './itemsHome'
export const Home = () =>{

    return(
        <div>
            
            <Slide2/>
            <ItemsHome/>
            
            <Slide1/>
            <Features/>
        </div>
    )
}