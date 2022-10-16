import React from 'react'

const Pagination = ({totalPosts, postsPerPage, setCurrentPage, currentPage}) => {

    let pages = [];

    for (let i = 0; i < Math.ceil(totalPosts/postsPerPage); i++) {
        pages.push(i+1)
        
    }

    

    const handleClickOnPage = page => {
        setCurrentPage(page)
    }

    return (
        <div>
            {
                pages.map((page, index) => (
                    <button key={index} onClick={() => handleClickOnPage(page)} className= {page == currentPage? "pressed" : ""}>{page}</button>
                ))
            }
        </div>
    )
}

export default Pagination