const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '5e1c6a254cmsh02832bc0d701cddp154bd0jsn1cd0511678cc',
        'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
};

const btn = document.querySelector(".btn");
const summary = document.querySelector(".summary");

btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const input = document.querySelector("#url").value;
    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${encodeURIComponent(input)}&lang=en&engine=2`;

    summary.innerText = "Please wait, summarizing the article...";

    if (!/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/.test(input)) {
        summary.innerText = "Invalid URL! Please provide a valid URL.";
    } else {
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            summary.innerText = data?.summary || "No summary available for this article.";
        } catch (error) {
            summary.innerText = "An error occurred while fetching the summary.";
            console.error(error);
        }
    }
});
