import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import { useTranslation } from 'react-i18next';
import PrimaryCard from "../Component/HomeCard/primaryCard";
function Index() {
    const { t } = useTranslation();
    return (
        <>
            <Header/>
            <div className="mx-4">
                <div className="max-w-screen-lg mx-auto min-h-screen">
                    <div className="pt-8">
                        <div className="grid grid-cols-10 gap-8">
                            <PrimaryCard />
                            <div className="h-[85vh] col-span-4 grid grid-rows-2 grid-flow-col gap-4">
                                <div className="bg-accent rounded-[40px]">

                                </div>
                                <div className="bg-neutral rounded-[40px]">

                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="pt-8">*/}
                    {/*    <SwiperCompo />*/}
                    {/*</div>*/}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Index;