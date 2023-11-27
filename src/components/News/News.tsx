import { IonAlert, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, addOutline } from 'ionicons/icons';
import React, { useState } from 'react';

const NewsComponent: React.FC = () => {

    const imgsrc_default = 'https://ionicframework.com/docs/img/demos/card-media.png';

    const [posts, setPosts] = useState([
        {
            imgsrc: imgsrc_default, 
            title: 'News Title', 
            publisher: 'Publisher', 
            content: "Here's a small text description for the news content. Nothing more, nothing less."
        },
    ]);

    const addNews = (postData: any) => {
        console.log("News Data: ", postData);
        const updatedPost = [...posts, postData];
        setPosts(updatedPost);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonButtons slot='start'>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle className='ion-text-center'>News Page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
            <IonFab slot='fixed' vertical='top' horizontal='end' edge={true}>
                <IonFabButton color={'light'} id='add-post'>
                    <IonIcon icon={add}></IonIcon>
                </IonFabButton>
            </IonFab>
            <IonAlert
            trigger='add-post'
            header='Please Enter News Info'
            inputs={[
                {
                    name: 'title',
                    placeholder: 'News Title',
                },
                {
                    name: 'publisher',
                    placeholder: 'Publisher',
                    attributes: {
                        maxlength: 12,
                    },
                },
                {
                    name: 'content',
                    placeholder: 'Content Summary',
                    type: 'textarea',
                }
            ]}
            buttons={[
                {
                    text: 'OK',
                    role: 'confirm',
                    handler: (data) => {
                        data.img = imgsrc_default;
                        if(data.img == null){
                            data.img = imgsrc_default;
                        }
                        const dataPost = {
                            imgsrc: data.img,
                            title: data.title,
                            publisher: data.publisher,
                            content: data.content,
                        }
                        addNews(dataPost);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log("Posts canceled");
                    }
                }
            ]}
            ></IonAlert>
                <IonGrid fixed>
                    <IonRow class='ion-justify-content-center'>
                        <IonCol size='12' sizeMd='8' sizeLg='8' sizeXl='8'>
                        {posts.map((item, index) => (
                            <IonCard key={index} button={true} className='ion-margin-top'>
                                <img alt='News Image' src={item.imgsrc}></img>
                                <IonCardHeader>
                                    <IonCardTitle>{item.title}</IonCardTitle>
                                    <IonCardSubtitle>{item.publisher}</IonCardSubtitle>
                                </IonCardHeader>
                                <IonCardContent className='ion-margin-bottom'>
                                    {item.content}
                                </IonCardContent>
                            </IonCard>
                        ))}
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default NewsComponent;
