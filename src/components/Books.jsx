import React from 'react';
import BookList1 from './BookList1';

class Books extends React.Component{
    constructor(props){
        super(props);
        this.state = {books: [
            {id:0, name:"Wings of Fire", price:500, image:"https://m.media-amazon.com/images/I/71KKZlVjbwL._AC_UY327_FMwebp_QL65_.jpg", text:"Every common man who by his sheer grit and hard work achieves success should share his story with the rest for they may find inspiration and strength to go on, in his story. The 'Wings of Fire' is one such autobiography by visionary scientist Dr. APJ Abdul Kalam, who from very humble beginnings rose to be the President of India. The book is full of insights, personal moments and life experiences of Dr. Kalam. It gives us an understanding on his journey of success.", info:"Every common man who by his sheer grit and hard work achieves success should share his story with the rest for they may find inspiration and strength to go on, in his story.", alt:" "},
            {id:1, name:"Around the World", price:800, image:"https://m.media-amazon.com/images/I/71UFuEfwFHL._AC_UY327_FMwebp_QL65_.jpg", text:"This series for Classes 6 – 8 is based on the latest curriculum of the Council for the Indian School Certificate Examinations. The books are child-friendly. A large number of maps, photographs and diagrams have been included that will help learners absorb the concepts easily.", info:"This series for Classes 6 – 8 is based on the latest curriculum of the Council for the Indian School Certificate Examinations.", alt:" "},
            {id:2, name:"Peacefull Mind", price:600, image:"https://m.media-amazon.com/images/I/51QZq1mQgHL._AC_UY327_FMwebp_QL65_.jpg", text:"Being the spouse of a cop isn't easy and it's not for the faint heart. In one sense, it's like any other marriage -- you dont just marry your spouse, you marry everything that comes along with him or her, such as family and friends. When you marry an LEO, youre getting all that and then some, including their family in blue and a lifestyle that is markedly different from a traditional 9-5.", info:"Being the spouse of a cop isn't easy and it's not for the faint heart.", alt:" "}],
            oneClicked: true}
    }
    
    deleteHandler = bookId => { 
        const books = this.state.books.filter(book => book.id !== bookId);  
        this.setState({books: books});  
    }; 

    render(){    
    return(
        <div className="p-5">
            <h3 className="p-2 text-center border">THE BEST SELLED BOOKS LIST - 2021</h3>
            {this.state.books.map(book=> (<BookList1 key={book.id} 
                                                     name={book.name} 
                                                     price={book.price} 
                                                     src={book.image} 
                                                     content={book.text} 
                                                     id={book.id} 
                                                     info={book.info}
                                                     onDelete={this.deleteHandler}  /> ))}
        </div>    
    );
    }
}

export default Books;