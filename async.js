//Async and await
//buy noodles 20 mins -> เทใสชาม
//buy milktea 5 mins -> ดูดชา
//ขนมเบื้องลูกน้ำ 2 mins -> กินขนมเบื้อง
const myOrders = async() => {

const orderNoodle = new Promise((teSaiCharm, teTing) =>{
    setTimeout(() =>{
        teSaiCharm('เล็กน้ำ')
    }, 10000)
})

const buyMilkTea = new Promise((drink, teTing) =>{
    setTimeout(() =>{
        drink('ชานม')
    },5000);
})

const buyNomBung  = new Promise((eat, teTing) =>{
    setTimeout(() =>{
        eat('ขนมเบื้อง')
    },2000);
})
    const result = await buyNomBung;
    console.log('nomBung', buyNomBung);
};

myOrders();

//testgithub
