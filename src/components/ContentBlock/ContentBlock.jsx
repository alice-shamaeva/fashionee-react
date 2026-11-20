import "./ContentBlock.css";
import "../../styles/reset.css";
import "../../styles/commons.css";

function ContentBlock({ title, breadcrumbs }) {
    return (
      <div className="page-banner">
          <div className="page-banner-info">
              <h1>{title}</h1>

              <div className="navigation">
                  {breadcrumbs.map((item, index) => (
                      <span key={item} className={index === breadcrumbs.length - 1 ? "nav-item active" : "nav-item"}>
                          {item}
                      </span>
                  ))}
              </div>
          </div>

          <div className="page-banner-image"></div>
      </div>
    );
}

export default ContentBlock;
