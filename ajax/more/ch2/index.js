const url = "data.json";

document.getElementById('btn').addEventListener('click', async() => {
    try{
    let response = await fetch(url)
    if(!response.ok) throw new Error ("error data");
    let data = await response.json();
    console.log("Fetch data: " , data);

    document.getElementById('output').innerHTML = `<b>Data:</b>
                                                <br>
                                            firstname:${data[0].firstname},
                                            lastname:${data[0].lastname}
                                             `

    }catch(error){
    console.error(error);
     document.getElementById('output').innerHTML = 'Error fetching data'
    }
    
})