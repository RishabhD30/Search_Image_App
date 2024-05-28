const accessKey = "8nS5vpGoXDOVuEWtIYE080eHq1-Pf4j0SGhi2T9Xi18";

const formE1 = document.querySelector("form");
const input = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData="";
let page = 1;

async function searchImage(){
    inputData = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if(page === 1){
        searchResults.innerHTML=""
    }

    results.map((res)=>{
        const imageWrap = document.createElement("div")
        imageWrap.classList.add("search-result")
        const img = document.createElement("img");
        img.src = res.urls.small;
        img.alt = res.alt_description;
        const img_A = document.createElement("a");
        img_A.href = res.links.html;
        img_A.target = "_blank";
    
        imageWrap.appendChild(img);
        imageWrap.appendChild(img_A);        
        searchResults.appendChild(imageWrap)
    
    })
    page++;
    
    if(page>1){
        showMore.style.display = "block"
    }
}

formE1.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImage();
})


showMore.addEventListener("click",()=>{
    searchImage();
});