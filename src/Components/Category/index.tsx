import './styles.scss';

type CategoryProps = {
    image: string,
    name: string,
}

export function Category({
    image,
    name,
}: CategoryProps) {
    return (
        <div className="col-2 text-center category-content">
            <div className="category mx-auto" style={{ backgroundImage: `url('${image}')` }} />
            <p className="m-0 fw-700 text-category">{name}</p>
        </div>
    )
}