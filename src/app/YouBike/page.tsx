import { useEffect } from 'react';
import MenuBar, { MenuFrom } from '../../../components/MenuBar/MenuBar'
const YouBikeMenu: MenuFrom[] = [
    {
        MenuUrl: 'About',
        titleText: '使用說明'
    },
    {
        MenuUrl: 'Price',
        titleText: '收費方式'
    },
    {
        MenuUrl: 'StopInfo',
        titleText: '站點資訊'
    },
    {
        MenuUrl: 'News',
        titleText: '最新消息'
    },
    {
        MenuUrl: 'Event',
        titleText: '活動專區'
    },
]
// ['使用說明', '收費方式', '站點資訊', '最新消息', '活動專區']
const YouBike: React.FC = () => {

    return (
        <>
            <div className="flex min-h-screen flex-col items-center justify-between md:p-24 bg-white ">
                <div>
                    <p className="text-[#6F7C24] text-lg hover:text-black ">歡迎來到改北事U Bike主頁</p>
                </div>
            </div></>


    );
};

export default YouBike;