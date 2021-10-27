import { navigate } from '@reach/router';
import moment from 'moment';
import Table from 'react-bootstrap/Table'

const TableView = ({ value }) => {
    return (<>
        <Table responsive className="full-w">
            <thead>
                <tr>
                    <th>ON STREET NAME</th>
                    <th>CRASH DATE</th>
                    <th>CRASH TIME</th>
                    <th>Vehicle 1</th>
                    <th>Vehicle 2</th>
                </tr>
            </thead>
            <tbody>
                {value.map((res,i) => <tr className="pointer" onClick={()=> navigate('/card-details',{state:{ data: res }})} key={i}>
                    <td>{res.on_street_name}</td>
                    <td>{moment(res.crash_date).format("MMM Do YYYY")}</td>
                    <td>{res.crash_time}</td>
                    <td>{res.vehicle_type_code1}</td>
                    <td>{res?.vehicle_type_code2 ?? 'NA'}</td>
                </tr>
                )}

            </tbody>
        </Table>
    </>)
}

export default TableView