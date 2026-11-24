import leftPaginArrow from"../../../../assets/left-pagin-arrow.svg";
import rightPaginArrow from"../../../../assets/right-pagin-arrow.svg";

function Pagination() {
    return (
        <div className="pagination">
            <div className="button left">
                <img src={leftPaginArrow} alt="Left Pagination Arrow"/>
            </div>
            <div className="pages">
                <div className="page active">1</div>
                <div className="page">2</div>
                <div className="page">3</div>
            </div>
            <div className="button right">
                <img src={rightPaginArrow} alt="Right Pagination Arrow"/>
            </div>
        </div>
    )
}

export default Pagination;
