async function NewsArticles() {
  const response = await fetch(
    `
    https://newsapi.org/v2/everything?q=tesla&from=2024-04-09&sortBy=publishedAt&apiKey=422275dc8c6c4e4db9aaa6b107110f4c`
  );
  const data = await response.json();
  console.log(data);

  let str = "";

  for (let item of data.articles) {
    str =
      str +
      `<div class="card mx-auto my-3" style="width: 18rem; height: 38rem;">
      <img src="${item.urlToImage}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.description}..</p>
        <a href="#" class="btn btn-primary">Read article</a>
      </div>
    </div>`
  }

  document.getElementById("news").innerHTML = str;

}


NewsArticles();
