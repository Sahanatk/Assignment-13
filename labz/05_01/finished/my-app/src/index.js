import React, { Component } from 'react'
import { render } from 'react-dom'

let bookList = [
    {"title": "Hunger", "author": "Roxane Gay", "pages": 320},
    {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
    {"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
    {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
]

const Book = ({title, author, pages, freeBookmark}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>By: {author}<br />
            Pages: {pages} pages<br />
            Free Bookmark Today? {freeBookmark ? 'Yes!' : 'No'}</p>
        </section>
    )
}

const Hiring = () =>
    <div>
        <p>The Library is hiring. Go to www.library.com/jobs for more.</p>
    </div>

const NotHiring = () =>
    <div>
        <p>The Library is not hiring. Check back again.</p>
    </div>

class Library extends Component {
    state = { 
        open: true,
        freeBookmark: false,
        hiring: true
    }

    componentDidMount() {
        console.log("The component is now mounted.")
    }

    componentDidUpdate() {
        console.log("The component is now updated.")
    }

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
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                <h1>This library is {this.state.open ? 'open' : 'closed'}</h1>
                <button onClick={this.toggleOpenClosed}>Change</button>
                {books.map(
                    (book, i) => 
                        <Book 
                            key={i}
                            title={book.title} 
                            author={book.author} 
                            pages={book.pages}
                            freeBookmark={this.state.freeBookmark} />
                )}
            </div>
        )
    }
}

render(
    <Library books={bookList} />, 
    document.getElementById('root'))