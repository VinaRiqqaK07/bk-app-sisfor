import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonText } from '@ionic/react';
import React from 'react';
import { Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import Intro1Jpg from '../../assets/Intro/intro1.jpg';
import Intro2Svg from '../../assets/Intro/Intro2.svg';
import './Intro.css';

interface ContainerProps {
    onFinish: () => void;
}

const SwiperButtonNext = ({children}: any) => {
    const swiper = useSwiper();
    return <IonButton onClick={() => swiper.slideNext()}>{children}</IonButton>;
};

const Intro: React.FC<ContainerProps> = ({onFinish}) => {
    return (
    <Swiper>
        <SwiperSlide>
            <img src= {Intro1Jpg} alt= "Intro 1" />
            <IonText>
                <h3>Temukan Solusi untuk Setiap Tantangan Akademik Anda Bersama Aplikasi Bimbingan & Konseling!</h3>
            </IonText>
            <SwiperButtonNext>Next</SwiperButtonNext>
        </SwiperSlide>
    
    
        <SwiperSlide>
            <img src= {Intro2Svg} alt= "Intro 2" />
            <IonText>
                <h3>Silakan login untuk mengakses fitur dan layanan yang disediakan</h3>
            </IonText>
            <IonButton onClick={() => onFinish()}>Let's Get Started</IonButton>
        </SwiperSlide>
    </Swiper>
    );

};

export default Intro;

