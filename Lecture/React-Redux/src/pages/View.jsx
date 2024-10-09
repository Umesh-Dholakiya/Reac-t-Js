import { Link } from "react-router-dom";

const View = () => {

    return (
        <div align="center">
            <h2>View Record</h2>
            <table border={1}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Phone</th>
                </tr>
            </table>
            <Link to={`/add`}>Add</Link>
        </div>
    )
}
export default View;