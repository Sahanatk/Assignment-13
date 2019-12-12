import React, { Component } from 'react'

export const Book = ({title="No Title Provided", author="No Author", pages=0, freeBookmark}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>By: {author}<br />
            Pages: {pages} pages<br />
            Free Bookmark Today? {freeBookmark ? 'Yes!' : 'No'}</p>
        </section>
    )
}