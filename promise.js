//แบบPromise
//buy noodles 20 mins -> เทใสชาม
//buy milktea 5 mins -> ดูดชา
//ขนมเบื้องลูกน้ำ 2 mins -> กินขนมเบื้อง


    const orderNoodle = new Promise((teSaiCharm, teTing) =>{
        teTing('บะหมี่น้ำ')
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

    orderNoodle 
    .then(result => console.log(result))
    .catch((rej) =>{
        const orderToHusband = `Put ${rej} into a bin`
        return orderToHusband
    }).then(husbandOrder => console.log(husbandOrder))
    
    buyMilkTea.then(result => console.log(result))
    buyNomBung.then(result => console.log(result))