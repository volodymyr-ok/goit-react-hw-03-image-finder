import React, { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';

export class ImageGallery extends Component {
  render() {
    const { status, imageList, loadMore } = this.props;

    if (status === 'resolved' || status === 'pending') {
      return (
        <ul className="ImageGallery">
          {imageList.length > 0 &&
            imageList.map(image => {
              const { id, webformatURL, largeImageURL, user } = image;

              return (
                <ImageGalleryItem
                  key={id}
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                  alt={user}
                />
              );
            })}

          {status === 'pending' ? <Loader /> : <Button loadMore={loadMore} />}
        </ul>
      );
    }
  }
}
