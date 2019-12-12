import React, { Component } from 'react'
import { render } from 'react-dom'

let bookList = [
    {"title": "Hunger", "author": "Roxane Gay", "pages": 320},
    {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
    {"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
    {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
]

const Book = ({title, author, pages}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>By: {author}<br />Pages: {pages} pages</p>
        </section>
    )
}

class Library extends Component {
    state = { open: true }

    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    render() {
        //console.log(this.state)
        const { books } = this.props
        return (
            <div>
                <h1>This library is {this.state.open ? 'open' : 'closed'}</h1>
                <button onClick={this.toggleOpenClosed}>Change</button>
                {books.map(
                    (book, i) => 
                        <Book 
                            key={i}
                            title={book.title} 
                            author={book.author} 
                            pages={book.pages} />
                )}
            </div>
        )
    }
}

render(
    <Library books={bookList} />, 
    document.getElementById('root'))