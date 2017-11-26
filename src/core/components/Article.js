import React, { Component } from 'react';

class Article extends Component {
  render() {
    const { summary, imageUrl, header } = this.props

    return (
        <div className="news-wrapper">
          <h4 className="news-header"><strong>{header}</strong></h4>
          <div className="img-wrapper col-xs-4">
            <img className="news-img" alt="article img" src={imageUrl} />
          </div>
          <div className="content-wrapper col-xs-7">
            <div className="news-content">
              {summary}
            </div>
          </div>
          <div className="divisionLine" />

        </div>
    )
  }
}

export default Article;
