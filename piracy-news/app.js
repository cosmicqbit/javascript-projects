//  apiKey = 9283ffe474154cb2a3d3d7a7da453205

// Initialize the parameters
let source = 'ndtv';
let apiKey = '9283ffe474154cb2a3d3d7a7da453205';

// Grab the News container
const newsAccordion = document.getElementById('newsAccordion');

// Create an AJAX GET Request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/everything?q=piracy&sortBy=publishedAt&language=en&apiKey=${apiKey}`, true);
xhr.getResponseHeader('Content-type', 'application/json');

xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(articles[news]);
            let news = `<div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                          <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse${index}" // change this
                            aria-expanded="true"
                            aria-controls="collapse${index}"
                          >
                            <strong>${index + 1}</strong>) ${element.title} 
                          </button> 
                        </h2>
                        <div
                          id="collapse${index}"
                          class="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#newsAccordion"
                        >
                          <div class="accordion-body">
                          <h5><span class="badge bg-warning text-dark"> ${element.source.name}</span></h5>
                            ${element.description}<br><br>
                            <div><strong>Published at: ${element.publishedAt} </strong><a href="${element.url}">Read more</a></div>
                          </div>
                        </div>
                        </div>`;
            newsHtml += news;
        })
        newsAccordion.innerHTML = newsHtml;
        // console.log(articles[news]);
    }
    else {
        console.log("Some error occured");
    }
}

xhr.send();






