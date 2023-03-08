async function getData(){
    let res= await fetch('https://api.thingspeak.com/channels/2044503/fields/2.json?api_key=K7643WI2D3N53JZQ&results=2');
    let data=await res.json();
    return data;
}

setInterval(()=>{
    getData().then(data=>{
        console.log(data.feeds[1].entry_id);
        document.getElementById("temperature").textContent=data.feeds[1].field2;
          if(data.feeds[1].field2>30){
            alert1.display;
           }
    })
}, 15000);
