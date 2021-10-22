export const showResults = (data) => {
    if(data === '') {
        alert("Enter a valid website address");
        document.querySelector('#name').value = 'Invalid Url';
        document.getElementById("agreement").innerHTML = ``;
        document.getElementById("subjectivity").innerHTML = ``;
        document.getElementById("confidence").innerHTML = ``;
        document.getElementById("irony").innerHTML = ``;
        document.getElementById("score_tag").innerHTML = ``;
    }
    else{
        document.querySelector('.spinner').style.display = 'none';
        document.getElementById("agreement").innerHTML = `Agreement: ${data.agreement}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${data.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;
        document.getElementById("score_tag").innerHTML = `Score Tag: ${data.score_tag}`;
    }
}


