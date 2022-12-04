import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { searchByAPI } from '../services/searchByAPI';

export class App extends Component {
  state = {
    status: 'idle', // status: 'idle', // idle pending rejected resolved
    entrie: '',
    page: 1,
    imageList: [],
  };

  handleSearchbarSubmit = entrie => {
    this.setState({ entrie, page: 1, imageList: [] });
  };

  componentDidUpdate(_, prevState) {
    const { entrie, imageList, page } = this.state;

    if (prevState.entrie !== entrie || prevState.page !== page) {
      this.setState({ status: 'pending' });

      searchByAPI(entrie, page)
        .then(response => {
          if (response.hits.length === 0) {
            throw new Error('Ніц нема');
          }

          this.setState({
            imageList: [...imageList, ...response.hits],
            status: 'resolved',
          });
        })
        .catch(error => {
          alert(error.message);
          this.setState({ status: 'rejected' });
        });
    }
  }

  loadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { status, imageList } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        <ImageGallery
          status={status}
          imageList={imageList}
          loadMore={this.loadMoreBtn}
        />
      </div>
    );
  }
}
