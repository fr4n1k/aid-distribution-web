interface PaginationProps {
  currentPage: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalItems, pageSize, onPageChange }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / pageSize);
  if (totalPages <= 1) return null;

  const getPages = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);

    const pages: (number | string)[] = [1];
    if (currentPage > 3) pages.push('...');

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) pages.push(i);

    if (currentPage < totalPages - 2) pages.push('...');
    pages.push(totalPages);
    return pages;
  };

  const pages = getPages();
  
  const navBtn = "relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-lg shadow mt-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{(currentPage - 1) * pageSize + 1}</span> to{' '}
          <span className="font-medium">{Math.min(currentPage * pageSize, totalItems)}</span> of{' '}
          <span className="font-medium">{totalItems}</span> results
        </p>

        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm">
          <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className={`${navBtn} rounded-l-md`} aria-label="Previous">
            ‹
          </button>

          {pages.map((page, idx) =>
            typeof page === 'number' ? (
              <button
                key={idx}
                onClick={() => onPageChange(page)}
                className={`px-4 py-2 text-sm font-semibold ${currentPage === page ? 'bg-blue-600 text-white' : 'text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50'}`}
              >
                {page}
              </button>
            ) : (
              <span key={idx} className="px-4 py-2 text-sm font-semibold text-gray-700">{page}</span>
            )
          )}

          <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className={`${navBtn} rounded-r-md`} aria-label="Next">
            ›
          </button>
        </nav>
      </div>
    </div>
  );
}
