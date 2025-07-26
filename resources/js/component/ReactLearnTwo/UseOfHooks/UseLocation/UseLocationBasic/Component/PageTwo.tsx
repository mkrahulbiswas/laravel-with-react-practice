import { Link, useLocation, useNavigate } from "react-router"

export default function PageTwo() {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);
    return (
        <>
            <div>Page Two</div>
            <button className="btn btn-primary btn-sm me-2" onClick={() => navigate(-1)}>Go back</button>
            <button className="btn btn-primary btn-sm me-2" onClick={() => navigate(+1)}>Go previous</button>
            <Link to={'/page-three'} state={{ name: 'So Cool' }}>Page Three</Link>
        </>
    )
}
