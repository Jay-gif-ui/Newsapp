import { useEffect, useState } from "react";
import Newsitem from "./Newsitem"
const Newsboard = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const apiKey = '0eed0ca7add047e7914aac0bdf0f622c'; // Use your API key directly 
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles));
    }, [category]);



    return (
        <div style={{ textAlign: "center", padding: '17px 0;' }}>
            <h2 className="text-center">Info <span className="badge bg-danger">+Network</span></h2>
            {articles.map((news, index) => {
                return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} /> // Pass 'url' as a prop
            })}
        </div>
    );
};

export default Newsboard;


// import { useEffect, useState } from "react";
// import Newsitem from "./Newsitem";

// const Newsboard = () => {
//     const [articles, setArticles] = useState([]);

//     useEffect(() => {

//         let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
//         console.log("API URL:", url); // Log the API URL
//         fetch(url)
//             .then(response => response.json())
//             .then(data => setArticles(data.articles))
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);


//     return (
//         <div>
//             <h2 className="text-center">Info <span className="badge bg-danger">+Network</span></h2>
//             {articles && articles.map((news, index) => (
//                 <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
//             ))}


//         </div>
//     );
// };

// export default Newsboard;
