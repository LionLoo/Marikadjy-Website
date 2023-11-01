const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word"; style="width:800px; margin:2 auto;[B]padding:20px 0;[/B]">
                    <h3><p style="color:#041634;">English:</p></h3> 
                    </div style="width:800px; margin:0 auto;[B]padding:20px 0;[/B]">
                    <p>
                    <h3>    <p style="color:#041634;">${inpWord}</p></h3> 
                    <p>
                    </div style="width:800px; margin:0 auto;[B]padding:20px 0;[/B]">
                    <h3> <p style="color:#4B9634;">Mebengokre:</p></h3> 
                    </div style="width:800px; margin:0 auto;[B]padding:20px 0;[/B]">
                    <p>
                    <h3>    <p style="color:#4B9634;">${inpWord}</p></h3> 
                    <p>
                    </div style="width:800px; margin:0 auto;[B]padding:20px 0;[/B]">
                    <h3><p style="color:#041634;">Portuguese:</p></h3> 
                    </div style="width:800px; margin:0 auto;[B]padding:20px 0;[/B]">
                    <p>
                    <h3>    <p style="color:#041634;">${inpWord}</p></h3> 
                    
                </div>
                
               
                </p>
                <p class="word-example">
                   
                </p>`;
            sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});


  

function playSound() {
    sound.play();
}
