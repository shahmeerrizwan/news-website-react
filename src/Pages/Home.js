import SideBar from '../Components/Sidebar/SideBar'
import Slider from '../Components/Slider/Slider'
import NewsComponent1 from '../Components/NewsComponents/NewsComponent1'
import Card from '../Components/Cards/Card'
import Card1 from '../Components/Cards/Card1'
import Card2 from '../Components/Cards/Card2'
import BreakLine from '../BreakLine/BreakLine'
import Card3 from '../Components/Cards/Card3'
import VidioCard from '../Components/Cards/VidioCard'
import Card4 from '../Components/Cards/Card4'
import VidioCard1 from '../Components/Cards/VidioCard1'
import News from '../Components/News/News'






export default function Home() {
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <News pageSize={5} />
            <Slider />
            <NewsComponent1 />
            <BreakLine />
            <Card1 />
            <BreakLine />
            <Card2 />
            <BreakLine />
            <br />
            <VidioCard />
            <Card3 />
            <BreakLine />
            <Card />
            <BreakLine />
            <Card4 />
            <BreakLine />
            <VidioCard1 />
            <SideBar />
        </div>
    )
}
