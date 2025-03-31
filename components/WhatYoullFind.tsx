import { View, Text, FlatList } from "react-native";
import Carousel from "./Carousel";
import { memo, useState } from "react";
import BookOpen from "@/assets/svg/book-open.svg"
import UserGraduate from "@/assets/svg/user-graduate.svg"
import HouseChimneyUser from "@/assets/svg/house-chimney-user.svg"
import responsiveSize from "@/constants/responsiveSize";

const WhatToFind = [
    {
        id:0,
        title: "Cultural, Literary\nHistorical Insights",
        detail: "Learn about the traditions and values of the new country.",
        Icon: BookOpen,
    },
    {
        id:1,
        title: "Education, School\nAdaptation",
        detail: "Understand the education system and how to navigate it.",
        Icon: UserGraduate,
    },
    {
        id:2,
        title: `Social Life, Community Integration`,
        detail: "Discover ways to engage with society and feel at home.",
        Icon: HouseChimneyUser,
    },
];


const WhatYoullFind = () => {
    const [activeItem, setActiveItem] = useState(0);

    
    return (
        <View 
            className='bg-primary w-[100vw] h-[100vh] flex-col justify-center z-30'
            style={{
                paddingTop:responsiveSize(38.1944445),
                paddingBottom:responsiveSize(38.1944445),
                borderTopLeftRadius: responsiveSize(43),
                borderTopRightRadius: responsiveSize(43),
            }}>
            <Text className='font-poppins font-bold text-center text-secondary' style={{fontSize: responsiveSize(26.736)}} >
                What You'll Find in The App
            </Text>
            <View className="container flex relative w-[90vw] h-[59vw] left-[5vw] top-[10vw]">
                {WhatToFind.map((item, index) => (
                    <Carousel 
                        key={item.id} 
                        data={item} 
                        id={index} 
                        active={activeItem} 
                        setActive={setActiveItem} 
                    />
                ))}
            </View>
        </View>
    );
};

export default memo(WhatYoullFind);