import React from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

import './AppBook.css'
import BookGallery from './BookGallery';


class AppBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
					query : '',
					items : []
				}
		}
		
		getText(event) {
			this.setState({query : event.target.value})
		}

		search() {
			const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
			fetch(`${baseUrl}${this.state.query}`, {method : 'GET'} )
			.then(response => response.json())
			.then(json => {
				let { items } = json;    //filling json.items to items obj  (destructuring object)
				this.setState({items})    //setting the state 'items' to the newly created obj 
			});													//  in above line
			console.log('Searching', this.state.query);
		}

    render(){
			return(<div className="StyleBook">
						<h2>Book Explorer! </h2>
						<FormGroup>
							<InputGroup>
								<FormControl
									type='text'
									placeholder='Search for a book'
									onChange={this.getText.bind(this)}
									onKeyPress={event=>{
										if(event.key ==='Enter') {
											this.search();
										}
									}}
								/>
								<InputGroup.Addon onClick={this.search.bind(this)}>
									<Glyphicon glyph='search'></Glyphicon>
								</InputGroup.Addon>
							</InputGroup>
						</FormGroup>	
						
						<BookGallery items={this.state.items} />

						</div>
			);
    }
}

export default AppBook;