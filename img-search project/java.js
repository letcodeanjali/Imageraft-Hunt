const accesskey = "oPGT-ZOtmJUI9Y_LEQKevuSwXedu8KQfsB6jLSirwWM";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("search-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const results = data.results;

      results.forEach((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
      });
      
      
    } else {
      console.error("Error fetching data from the API");
      
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}


searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchResult.innerHTML = ""; // Clear previous search results
  page = 1;
  searchImages();
});
