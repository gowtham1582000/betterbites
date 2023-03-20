const weather= async() =>{
    let url= `http://api.weatherapi.com/v1/current.json?key=07cfa881e4c4485d80e93602231803&q=chennai&aqi=no`
    const res= await fetch(url);
    console.log(res);
    

}