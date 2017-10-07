import React from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

import './BookGallery.css'


class BookGallery extends React.Component {
	constructor(props) {
			super(props);

	}
	
	render(){
		let alternateImg = 'https://d2ytqrx2swf6ug.cloudfront.net/assets/no-image-available-bbdbbe501d2b08a157a21431bc7b49df2c6cf6d892cc3083114229876cd7d6f4.jpg'
		
		// for showing the image gallery we use map function
		let dataObj = this.props.items.map((item, index) => {
			let { title, imageLinks, infoLink } = item.volumeInfo;
			return(
				<a key={index} className='book' href={infoLink} target='_blank'>
					<img 
					src={imageLinks !== undefined ? imageLinks.thumbnail : alternateImg} 
					alt='book image'
					className='book-img'
					/>
					<div className="book-text">
						{title}
					</div>	 
				</a>
			)
		});
		return(<div>
						{dataObj}
					</div>
		);
	}


}

export default BookGallery;