const accesskey="oPGT-ZOtmJUI9Y_LEQKevuSwXedu8KQfsB6jLSirwWM";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("search-more-btn");

let keyword = "";
let page = 1; // Corrected the variable name

async function searchImages() { // Corrected the function name
  keyword = searchBox.value; // Corrected getting the value from the input field
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}
  &client_id= ${accesskey}`;

  const response = await fetch(url);
  const data = await response.json();
  const results=data.results;
  results.map((result)=>{
    const image=document.createElement("img");
    image.src=result.urls.small;
    const imageLink=document.createElement("a");
    imageLink.href=result.links.html;
    imageLink.target="_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  })
}
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});


