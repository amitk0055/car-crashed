import { Card, Container } from 'react-bootstrap';
import moment from 'moment';
import { navigate } from '@reach/router';

const CardView = ({value}) =>{
    return (<>
  {value.map((res,i)=>
      <Card key={i} className="pointer" onClick={()=>navigate('/card-details',{state:{ data:res }})}>
        <Card.Body>
          <Card.Text className="d-flex justify-content-between mb-0">
            <div> Date: {res.crash_date ? moment(res.crash_date).format("MMM Do YYYY") : '-'}</div> 
              <div> Time: {res.crash_time}</div>
          </Card.Text>
          <Card.Title>{res.on_street_name}</Card.Title>

          <Card.Text className="mb-2 text-muted">
            <div><i class="fa fa-car" aria-hidden="true"></i> Vehicle 1: {res.vehicle_type_code1}</div>
            {res.vehicle_type_code2 && <div><i class="fa fa-car" aria-hidden="true"></i> Vehicle 2: {res.vehicle_type_code2}</div>}
          </Card.Text>
        </Card.Body>
      </Card>
      )}  
    </>)
}

export default CardView