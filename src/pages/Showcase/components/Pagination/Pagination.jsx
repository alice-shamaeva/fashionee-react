import leftPaginArrow from"../../../../assets/left-pagin-arrow.svg";
import rightPaginArrow from"../../../../assets/right-pagin-arrow.svg";

function Pagination({ setPage, pagesCount, currentPage }) {
    const pagesArr = [];
    for (let i = 0; i < pagesCount; i++) {
        pagesArr.push(i + 1);
    }

    const handleNextPage = () => {
        if (currentPage < pagesCount) {
            setPage(currentPage + 1);
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setPage(currentPage - 1);
        }
    }

    return (
        <div className="pagination">
            <div className={currentPage === 1 ? "button left disabled" : "button left"} onClick={handlePrevPage}>
                <img src={leftPaginArrow} alt="Left Pagination Arrow"/>
            </div>
            <div className="pages">
                {pagesArr.map((page) => {
                    return (
                        <div className={page === currentPage ? "page active" : "page"} onClick={() => setPage(page)} key={page}>{page}</div>
                    )
                })}
            </div>
            <div className={currentPage < pagesCount ? "button right disabled" : "button right"} onClick={handleNextPage}>
                <img src={rightPaginArrow} alt="Right Pagination Arrow"/>
            </div>
        </div>
    )
}

export default Pagination;
