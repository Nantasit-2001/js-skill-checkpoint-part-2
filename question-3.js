// เริ่มเขียนโค้ดตรงนี้
async function getUsers (){
    try{
    const JsonplaceholderJoson = await fetch ("https://jsonplaceholder.typicode.com/users");
    const Jsonplaceholder = await JsonplaceholderJoson.json()
    // console.log(Jsonplaceholder);
    let nameMore17Char=Jsonplaceholder.filter(obj=>obj.name.length>16).map(obj=>obj.name);
    console.log(nameMore17Char)
    }catch(error){
        console.log(error)
    }
}

getUsers()
