import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  constructor() {
    super();
    // State
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: null,
      pageSize: 6,
    };
  }
  // Method to fetch News from API
  fetchNews = (page) => {
    fetch(
      `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=946d693b54d94bf6bf7bc3b3749cab33&page=${page}&pageSize=${this.state.pageSize}`
    )
      .then((response) => {
        this.setState({loading:true})
       return response.json();
      })
      .then((responseJson) =>
          setTimeout(() => {
            this.setState({
              articles: responseJson.articles,
              totalResults: responseJson.totalResults,
              loading:false
            })
          } , 1000)
      )
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.fetchNews(this.state.page);
  }

  // Function to go back to previous page
  handlePrevClick = async (e) => {
    e.preventDefault();
    this.fetchNews(this.state.page - 1);
    this.setState({ page: this.state.page - 1 });
  };

  // Function to go to next page
  handleNextClick = async (e) => {
    e.preventDefault();
    this.fetchNews(this.state.page + 1);
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    return (
      <>
        <div className="container my-4">
          <h2 className="text-center">Top Headlines</h2>
          {this.state.loading===true?<Spinner/>:<>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
          </>}
        </div>
        <div className="container">
          <nav aria-label="Page navigation example">
            <ul class="pagination pagination-lg">
              <li class="page-item">
                <a
                  class={`page-link ${this.state.page === 1 ? "disabled" : ""}`}
                  href="/"
                  rel="noreferrer"
                  onClick={this.handlePrevClick}
                >
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a
                  class={`page-link ${
                    this.state.page + 1 >
                    Math.ceil(this.state.totalResults / this.state.pageSize)
                      ? "disabled"
                      : ""
                  }`}
                  href="/"
                  rel="noreferrer"
                  onClick={this.handleNextClick}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}
