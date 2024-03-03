import React, { Component } from 'react'
import NewsItem from '../News/NewsItem'

export default class News extends Component {
    constructor() {
        super();

        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=51e1761d53d34275a01922325813be85"
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
    }


    render() {
        const { articles } = this.state;

        return (
            <div className='container m-4'>
                <div className='row'>
                    {articles && articles.map((element) => (
                        <div className='col-md-4' key={element.url}>
                            <NewsItem
                                title={element.title}
                                description={element.description}
                                imageUrl={element.urlToImage}
                                newsUrl={element.url}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}