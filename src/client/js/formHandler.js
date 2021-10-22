export const handleSubmit = async(e) => {
    e.preventDefault()
    // Check what text was put into the form field
    let url = document.getElementById('name').value

    if(!Client.checkURL(url)){
        Client.showResults('')
        return
    }
    else{
        document.querySelector('.spinner').style.display = ''

        console.log("::: Form Submitted :::")

        let apikey = await Client.formData()

        const option = {
            method: 'POST'
        }

        await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apikey}&lang=en&url=${url}`, option)
          .then(response => response.json())
          .then(data => Client.showResults(data))
          .catch(error => console.log('error', error));
    }
}



