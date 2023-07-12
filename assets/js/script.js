document.addEventListener("DOMContentLoaded", function() {
    fetch("assets/data/stories.json")
        .then(response => response.json())
        .then(data => renderData(data))
        .catch(error => console.error(error));
});

function renderData(data) {
    const container = document.getElementById("container");
    const header = document.createElement("div");
    header.classList.add("header");
    container.appendChild(header);
    const title = document.createElement("h1");
    title.textContent = data.title;
    header.appendChild(title);

    const credits = document.createElement("h2");
    credits.textContent = data.credits;
    header.appendChild(credits);

    const newsContainer = document.createElement("div");
    newsContainer.classList.add("newsContainer");
    container.appendChild(newsContainer);

    data.items.forEach(item => {
        const singleNews = document.createElement("div");
        singleNews.classList.add("news");
        newsContainer.appendChild(singleNews);
        
        const newsTitle = document.createElement("h3");
        newsTitle.classList.add("newsTitle");
        newsTitle.textContent = item.title;
        singleNews.append(newsTitle);

        const newsDate = document.createElement("p");
        newsDate.classList.add("newsDate");
        newsDate.textContent = item.date;
        singleNews.append(newsDate);

        const newsText = document.createElement("p");
        newsText.classList.add("newsText");
        newsText.innerHTML = item.news;
        singleNews.append(newsText);
    });
}