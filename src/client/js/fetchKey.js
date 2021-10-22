export const formData = async() => {
    console.log("::: Key Getter :::")

    return await fetch('http://localhost:8081/apikey')
    .then(res => res.json())
    .then(data => data.API_KEY)
}

