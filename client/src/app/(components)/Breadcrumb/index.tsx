

type ItemProps = {
    label: string;
    href?: string;
}

type BreadcrumbProps = {
    items: ItemProps[];
    customStyle?: string;
}

const Breadcrumbs = ({ items, customStyle }: BreadcrumbProps) => {
  return (
    <nav className={`flex mt-5 ${customStyle}`} aria-label="Breadcrumb">
        <ol className="flex items-center space-x-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <a
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              {item && item.label}
            </a>
          </li>
        ))}
        </ol>
    </nav>
  )
}

export default Breadcrumbs