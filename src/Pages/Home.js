// import Add from '../Components/Add'
// import News from '../Components/News'
// import SideBar from '../Components/Sidebar/SideBar'
import Slider from '../Components/Slider/Slider'
import NewsComponent1 from '../Components/NewsComponents/NewsComponent1'
// import Card from '../Components/Cards/Card'
import Card1 from '../Components/Cards/Card1'
import Card2 from '../Components/Cards/Card2'
import BreakLine from '../BreakLine/BreakLine'
import Card3 from '../Components/Cards/Card3'






export default function Home() {
    return (
        <div>

            <Slider />
            <NewsComponent1 />
            <BreakLine />
            {/* <Card /> */}
            <Card1 />
            <BreakLine />

            <Card2 />
            <BreakLine />
            <Card3 />
            <BreakLine />
            {/* <SideBar /> */}


        </div>
    )
}
