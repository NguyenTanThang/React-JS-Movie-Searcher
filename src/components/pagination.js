import React, { Component } from 'react'

class Pagination extends Component {

    render() {
        const {currentPage, totalResults} = this.props;

        const previousButton = currentPage == 1 ? (
            <li className="page-item disabled"><button onClick={this.props.onPreviousPage}  className="page-link">Previous</button></li>
        ) : (
            <li className="page-item"><button onClick={this.props.onPreviousPage}  className="page-link">Previous</button></li>
        )

        const nextButton = currentPage == Math.ceil(totalResults / 10) ? (
            <li className="page-item disabled"><button onClick={this.props.onNextPage} className="page-link">Next</button></li>
        ) : (
            <li className="page-item"><button onClick={this.props.onNextPage} className="page-link">Next</button></li>
        )

        return (
            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination ml-auto mr-auto">
                        <li className="page-item"><button onClick={this.props.onFirstPage} className="page-link">First</button></li>

                        {previousButton}
                        
                        {nextButton}

                        <li className="page-item"><button onClick={this.props.onLastPage}className="page-link">Last</button></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Pagination;
