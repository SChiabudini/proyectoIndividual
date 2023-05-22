const Pagination = ({ currentPage, countriesPerPage, countries, pagination }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(countries / countriesPerPage); i++) {
      pageNumbers.push(i);
    }
  
    const handleClickPrevious = () => {
      pagination(currentPage - 1);
    };
  
    const handleClickNext = () => {
      pagination(currentPage + 1);
    };
  
    const handleClickPage = (pageNumber) => {
      pagination(pageNumber);
    };
  
    const renderPageNumbers = () => {
      let startPage;
      let endPage;
  
      if (pageNumbers.length <= 5) {
        // Mostrar todos los números de página si hay 5 o menos
        startPage = 1;
        endPage = pageNumbers.length;
      } else {
        // Calcular los números de página para mostrar si hay más de 5
        if (currentPage <= 3) {
          startPage = 1;
          endPage = 5;
        } else if (currentPage + 2 >= pageNumbers.length) {
          startPage = pageNumbers.length - 4;
          endPage = pageNumbers.length;
        } else {
          startPage = currentPage - 2;
          endPage = currentPage + 2;
        }
      }
  
      return pageNumbers.slice(startPage - 1, endPage).map((number) => (
        <button
          key={number}
          onClick={() => handleClickPage(number)}
          className={number === currentPage ? 'active' : ''}
        >
          {number}
        </button>
      ));
    };
  
    return (
      <div>
        <button onClick={handleClickPrevious}>{'<'}</button>
        {renderPageNumbers()}
        <button onClick={handleClickNext}>{'>'}</button>
      </div>
    );
  };
  
  export default Pagination;