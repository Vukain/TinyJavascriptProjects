import React from 'react';
import Article from '../components/Article'

const articles = [
    {
        id: 1,
        author: "Jan Nowak",
        title: "Czym jest teoria strun",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, hic ipsam molestiae natus iure numquam praesentium illo enim repellat esse tempore nostrum pariatur quisquam, officia ratione, aliquid mollitia! Sit, quos!"
    },
    {
        id: 2,
        author: "Jan Nowak",
        title: "Czym jest teoria strun",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, hic ipsam molestiae natus iure numquam praesentium illo enim repellat esse tempore nostrum pariatur quisquam, officia ratione, aliquid mollitia! Sit, quos!"
    },
    {
        id: 3,
        author: "Jan Nowak",
        title: "Czym jest teoria strun",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, hic ipsam molestiae natus iure numquam praesentium illo enim repellat esse tempore nostrum pariatur quisquam, officia ratione, aliquid mollitia! Sit, quos!"
    },
    {
        id: 4,
        author: "Jan Nowak",
        title: "Czym jest teoria strun",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, hic ipsam molestiae natus iure numquam praesentium illo enim repellat esse tempore nostrum pariatur quisquam, officia ratione, aliquid mollitia! Sit, quos!"
    },
    {
        id: 5,
        author: "Jan Nowak",
        title: "Czym jest teoria strun",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, hic ipsam molestiae natus iure numquam praesentium illo enim repellat esse tempore nostrum pariatur quisquam, officia ratione, aliquid mollitia! Sit, quos!"
    },

]

const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))
    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;