import './Ex1.css'
import data from '../../data/posts.json';

const Table =() => {
    return (
     <>
        <div className="total-table">
            <table className="header-table-title">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th> Tittle</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                 {data.map((i,index) => (
                    <tr key={index}>
                        <td>{i.id}</td>
                        <td>{i.title}</td>
                        <td>{i.body}</td>
                    </tr>

                ))}
                </tbody>
            </table>
        </div>
     </>
    );
};

export default Table;
