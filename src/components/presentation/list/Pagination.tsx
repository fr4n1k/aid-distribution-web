// src/components/presentation/Pagination.tsx

import { Text } from '@/components/ui';

/**
 * Props para el componente Pagination
 */
interface PaginationProps {
  /** Página actual (base 1) */
  currentPage: number;
  /** Total de items en la lista */
  totalItems: number;
  /** Cantidad de items por página */
  pageSize: number;
  /** Handler para cambio de página */
  onPageChange: (page: number) => void;
}

/**
 * Componente presentacional que renderiza la paginación.
 * Muestra controles para navegar entre páginas y el rango de items mostrados.
 *
 * @example
 * <Pagination
 *   currentPage={1}
 *   totalItems={100}
 *   pageSize={10}
 *   onPageChange={handlePageChange}
 * />
 */
export function Pagination({ currentPage, totalItems, pageSize, onPageChange }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / pageSize);

  // No mostrar paginación si solo hay una página
  if (totalPages <= 1) return null;

  /**
   * Genera el array de números de página a mostrar.
   * Implementa lógica de truncamiento con "..." para muchas páginas.
   */
  const getPages = (): (number | string)[] => {
    // Si hay 7 o menos páginas, mostrar todas
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Para más de 7 páginas, implementar truncamiento
    const pages: (number | string)[] = [1];

    if (currentPage > 3) {
      pages.push('...');
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push('...');
    }

    pages.push(totalPages);
    return pages;
  };

  const pages = getPages();

  // Clases para botones de navegación
  const navButtonClass =
    'relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed';

  // Calcular rango de items mostrados
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-lg shadow mt-6'>
      <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        {/* Información de rango */}
        <Text variant='body' className='text-gray-700'>
          Showing{' '}
          <Text variant='body' as='span' className='font-medium'>
            {startItem}
          </Text>{' '}
          to{' '}
          <Text variant='body' as='span' className='font-medium'>
            {endItem}
          </Text>{' '}
          of{' '}
          <Text variant='body' as='span' className='font-medium'>
            {totalItems}
          </Text>{' '}
          results
        </Text>

        {/* Controles de navegación */}
        <nav
          className='isolate inline-flex -space-x-px rounded-md shadow-sm'
          aria-label='Pagination'
        >
          {/* Botón anterior */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`${navButtonClass} rounded-l-md`}
            aria-label='Previous page'
          >
            ‹
          </button>

          {/* Números de página */}
          {pages.map((page, idx) =>
            typeof page === 'number' ? (
              <button
                key={idx}
                onClick={() => onPageChange(page)}
                aria-current={currentPage === page ? 'page' : undefined}
                className={`px-4 py-2 ${
                  currentPage === page
                    ? 'bg-primary'
                    : 'ring-1 ring-gray-300 hover:bg-gray-50'
                }`}
              >
                <Text
                  variant='body'
                  as='span'
                  className={`font-semibold ${
                    currentPage === page ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {page}
                </Text>
              </button>
            ) : (
              <Text variant='body' as='span' className='px-4 py-2 font-semibold text-gray-700'>
                {page}
              </Text>
            )
          )}

          {/* Botón siguiente */}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`${navButtonClass} rounded-r-md`}
            aria-label='Next page'
          >
            ›
          </button>
        </nav>
      </div>
    </div>
  );
}
