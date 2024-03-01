// import Add from '../Components/Add'
// import News from '../Components/News'
// import SideBar from '../Components/Sidebar/SideBar'
import Slider from '../Components/Slider/Slider'
import NewsComponent1 from '../Components/NewsComponents/NewsComponent1'
import Card from '../Components/Cards/Card'




export default function Home() {
    return (
        <div>

            <Slider />
            {/* <SideBar /> */}
            <NewsComponent1 />
            <Card />
        </div>
    )
}
