import React, { Component } from 'react';
import NewsItem from '../News/NewsItem';
import Spinner from '../../Assets/Spinner';

export default class News extends Component {
    constructor() {
        super();

        this.state = {
            articles: [],
            loading: false,
            page: 1 // Initialize page state
        };
    }

    async componentDidMount() {
        await this.fetchArticles();
        this.setState({ loading: false });
    }

    fetchArticles = async (page = 1) => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=51e1761d53d34275a01922325813be85&page=${page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ loading: false });

        this.setState({ articles: parsedData.articles, page });
    }

    handlePrevClick = async () => {
        console.log("prev");
        this.setState({ loading: true });
        const { page } = this.state;
        if (page > 1) {
            await this.fetchArticles(page - 1);
        }
    }

    handleNextClick = async () => {
        console.log("next");
        this.setState({ loading: true });
        const { page } = this.state;
        await this.fetchArticles(page + 1);
    }

    render() {
        const { articles, page } = this.state;

        return (
            <div className='container m-4'>
                <h1 className='text-center'>Top News </h1>
                {this.state.loading && <Spinner />}
                <div className='row'>
                    {!this.state.loading && articles.map((element, index) => (
                        <div className='col-md-4' key={`${element.url}-${index}`}>
                            <NewsItem
                                title={element.title}
                                description={element.description}
                                imageUrl={element.urlToImage}
                                newsUrl={element.url}
                            />
                        </div>
                    ))}
                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={page <= 1} type='button' className='btn btn-sm btn-dark' onClick={this.handlePrevClick}> Previous</button>
                    <button disabled={!articles.length} className='btn btn-sm btn-dark' onClick={this.handleNextClick}>Next</button>
                </div>
            </div>
        );
    }
}
