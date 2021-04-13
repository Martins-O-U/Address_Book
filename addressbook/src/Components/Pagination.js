import React from "react";


const Pagination = ({ postPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div id="pagination-div">
          <hr></hr>
            <ul id='pagination-ul'>
            <p id="pagination-page-num">Page Numbers</p>
                {pageNumbers.map(number => (
                    <li key={number} className="page-item"><span onClick={() => paginate(number)} className="page-link">{number}</span></li>

                ))}
            </ul>
        </div>
    )
}

export default Pagination;