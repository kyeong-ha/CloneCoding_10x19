const images = {
    image_1: [
        'src/img/Chimero_1-768x768.jpg',
        'src/img/Gallagher_1-768x768.jpg',
        'src/img/Hinn_1-768x768.jpg',
        'src/img/Nororonha_1-768x768.jpg',
        'src/img/barry-1-768x768.jpg',
    ],
    image_2: [
        'src/img/ERM_2-768x768.jpg',
        'src/img/HolyokeHirsch_2-768x768.jpg',
        'src/img/Muccioli_2-768x768.jpg',
        'src/img/Perez_02-768x768.jpg',
        'src/img/Utesch_2-768x768.jpg',
    ],
    image_3: [
        'src/img/3-768x768.jpg',
        'src/img/Chandler_3-768x768.jpg',
        'src/img/Nororonha_3-768x768.jpg',
        'src/img/TY_3-1-768x768.jpg',
        'src/img/Voorheis_3-768x768.jpg',
    ],
    image_4: [
        'src/img/AHood_4-768x768.jpg',
        'src/img/derosa_4-768x768.jpg',
        'src/img/Luor_4-768x768.jpg',
        'src/img/Matti_04-768x768.jpg',
        'src/img/Pervorse_4-768x768.jpg',
    ],
    image_5: [
        'src/img/barry-5-768x768.jpg',
        'src/img/Bazan_5-768x768.jpg',
        'src/img/Dickens_5-768x768.jpg',
        'src/img/Hong_5-768x768.jpg',
        'src/img/Ealey_5-1-768x768.jpg',
    ],
    image_6: [
        'src/img/ERM_6-768x768.jpg',
        'src/img/Hinn_6-768x768.jpg',
        'src/img/Hursh-06-768x768.jpg',
        'src/img/Luor_6-768x768.jpg',
        'src/img/Lyons_6-768x768.jpg',
    ],
    image_7: [
        'src/img/07-Electric-capablanca-768x768.jpg',
        'src/img/barry-7-768x768 (1).jpg',
        'src/img/Perez_07-768x768.jpg',
        'src/img/Pervorse_7-768x768.jpg',
        'src/img/Utesch_7-768x768.jpg',
    ],
    image_8: [
        'src/img/HURLEY_8-768x768.jpg',
        'src/img/Hursh-08-768x768.jpg',
        'src/img/Pecson_8-2-768x768.jpg',
        'src/img/Haasch_8-768x768.jpg',
    ],
    image_9: [
        'src/img/Chimero_9-768x768.jpg',
        'src/img/ERM_9-768x768.jpg',
        'src/img/JHood_9-768x768.jpg',
        'src/img/Dickens_9-768x768.jpg',
        'src/img/Engler_9-768x768.jpg',
    ],
    image_10: [
        'src/img/Gallagher_10-768x768.jpg',
        'src/img/HolyokeHirsch_10-768x768.jpg',
        'src/img/Hursh-10-768x768.jpg',
        'src/img/Luor_10-768x768.jpg',
        'src/img/Utesch_10-768x768.jpg',
    ],
};


const flexButton1 = document.querySelector(`.flex-button-1`);
const flexButton2 = document.querySelector(`.flex-button-2`);
const flexButton3 = document.querySelector(`.flex-button-3`);
const flexButton4 = document.querySelector(`.flex-button-4`);
const flexButton5 = document.querySelector(`.flex-button-5`);
const flexButton6 = document.querySelector(`.flex-button-6`);
const flexButton7 = document.querySelector(`.flex-button-7`);
const flexButton8 = document.querySelector(`.flex-button-8`);
const flexButton9 = document.querySelector(`.flex-button-9`);
const flexButton10 = document.querySelector(`.flex-button-10`);

let timer;

flexButton1.addEventListener("mouseover", (event)=>{
    const albumImg = document.querySelector('.album-image');
    let j = 0;
    

    timer = setInterval(()=>{
        if(j===5){j=0;}
        albumImg.src = images.image_1[j];
        j++;
    },300);
});
    
flexButton1.addEventListener("mouseout", (element)=>{
    clearInterval(timer);
});


flexButton2.addEventListener("mouseover", (event)=>{
    const albumImg = document.querySelector('.album-image');
    let j = 0;

    timer = setInterval(()=>{
        if(j===5){j=0;}
        albumImg.src = images.image_2[j];
        j++;
    },300);
});
    
flexButton2.addEventListener("mouseout", (element)=>{
    clearInterval(timer);
});

flexButton3.addEventListener("mouseover", (event)=>{
    const albumImg = document.querySelector('.album-image');
    let j = 0;

    timer = setInterval(()=>{
        if(j===5){j=0;}
        albumImg.src = images.image_3[j];
        j++;
    },300);
});
    
flexButton3.addEventListener("mouseout", (element)=>{
    clearInterval(timer);
});
flexButton4.addEventListener("mouseover", (event)=>{
    const albumImg = document.querySelector('.album-image');
    let j = 0;

    timer = setInterval(()=>{
        if(j===5){j=0;}
        albumImg.src = images.image_4[j];
        j++;
    },300);
});
    
flexButton4.addEventListener("mouseout", (element)=>{
    clearInterval(timer);
});
flexButton5.addEventListener("mouseover", (event)=>{
    const albumImg = document.querySelector('.album-image');
    let j = 0;

    timer = setInterval(()=>{
        if(j===5){j=0;}
        albumImg.src = images.image_5[j];
        j++;
    },300);
});
    
flexButton5.addEventListener("mouseout", (element)=>{
    clearInterval(timer);
});

flexButton6.addEventListener("mouseover", (event)=>{
    const albumImg = document.querySelector('.album-image');
    let j = 0;

    timer = setInterval(()=>{
        if(j===5){j=0;}
        albumImg.src = images.image_6[j];
        j++;
    },300);
});
    
flexButton6.addEventListener("mouseout", (element)=>{
    clearInterval(timer);
});
flexButton7.addEventListener("mouseover", (event)=>{
    const albumImg = document.querySelector('.album-image');
    let j = 0;

    timer = setInterval(()=>{
        if(j===5){j=0;}
        albumImg.src = images.image_7[j];
        j++;
    },300);
});
    
flexButton7.addEventListener("mouseout", (element)=>{
    clearInterval(timer);
});
flexButton8.addEventListener("mouseover", (event)=>{
    const albumImg = document.querySelector('.album-image');
    let j = 0;

    timer = setInterval(()=>{
        if(j===4){j=0;}
        albumImg.src = images.image_8[j];
        j++;
    },300);
});
    
flexButton8.addEventListener("mouseout", (element)=>{
    clearInterval(timer);
});
flexButton9.addEventListener("mouseover", (event)=>{
    const albumImg = document.querySelector('.album-image');
    let j = 0;

    timer = setInterval(()=>{
        if(j===5){j=0;}
        albumImg.src = images.image_9[j];
        j++;
    },300);
});
    
flexButton9.addEventListener("mouseout", (element)=>{
    clearInterval(timer);
});
flexButton10.addEventListener("mouseover", (event)=>{
    const albumImg = document.querySelector('.album-image');
    let j = 0;

    timer = setInterval(()=>{
        if(j===5){j=0;}
        albumImg.src = images.image_10[j];
        j++;
    },300);
});
    
flexButton10.addEventListener("mouseout", (element)=>{
    clearInterval(timer);
});
