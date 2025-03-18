let url = 'data.json'

document.getElementById("btn").addEventListener('click', async () => {
    try {
        let response = await fetch(url)
        if(!response.ok)throw new Error('Invalid response');
        let data = await response.json();
        console.log("fetch data: ", data)
        document.getElementById('output').innerHTML = `<b>Firstname:</b> ${data[0].firstname}
                                                       <br>
                                                      <b>Lastname:</br> ${data[0].lastname}`
    } catch (error){
        console.error('Fetch error', error)
        document.getElementById('output').innerHTML = 'Error fetching data'
    }
})