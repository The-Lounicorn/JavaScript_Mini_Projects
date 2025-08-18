var xhr = new XMLHttpRequest();
var url = './news_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
  var articles = xhr.response.articles;
  var newsDiv = document.getElementById('news');

  articles.forEach(function(article) {
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('news-article');

    var headline = document.createElement('h2');
    headline.textContent = article.headline;

    var summary = document.createElement('p');
    summary.textContent = article.summary;

    var source = document.createElement('p');
    source.innerHTML = `<strong>Source:</strong> ${article.source}`;

    var date = document.createElement('p');
    date.innerHTML = `<strong>Date:</strong> ${article.date}`;

    articleDiv.appendChild(headline);
    articleDiv.appendChild(summary);
    articleDiv.appendChild(source);
    articleDiv.appendChild(date);

    newsDiv.appendChild(articleDiv);
  });
};

xhr.send();