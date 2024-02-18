const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          if (number === 1 && currentPage === 1) {
            return (
              <li key={number} className="page-item disabled">
                <a href="!#" className="page-link">
                  1
                </a>
              </li>
            )
          }

          if (
            number === pageNumbers.length &&
            currentPage === pageNumbers.length
          ) {
            return (
              <li key={number} className="page-item disabled">
                <a href="!#" className="page-link">
                  {pageNumbers.length}
                </a>
              </li>
            )
          }

          return (
            <li
              key={number}
              className={`page-item ${currentPage === number ? "active" : ""}`}
              aria-current="page"
            >
              <a
                onClick={() => paginate(number)}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Pagination
