import { useContext } from 'react'
import {Button,Spinner} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import {  Container } from 'react-bootstrap';
import Header from '../../Components/Layout/Header';
import RestService from '../../Service/api.service';
import CardView from './CardView';
import NoDataFound from '../../Components/NoDataFound/NoDataFound'
import './cars.css'
import TableView from './TableVIew';
import AppContext from '../../Store/AppContext';


const Cars = () => {
   const {selectedTime,setSelectedTime} = useContext(AppContext)
  const [crashList, setCrashList] = useState([])
  const [listView, setListView] = useState(false)
  const [isLoading,setIsLoading] = useState(false)
  const [paginationNo, setPaginationNo] = useState(0)


  //get car crashed by page
  const GetCarByPagination = () => {
    try {
      setIsLoading(true)
      RestService.GetCarByPagination(selectedTime, paginationNo, 10).then(res => {
        setCrashList(res.data)
        setIsLoading(false)
      },
        err => {
          setIsLoading(false)
          console.error("Error occur on getCarCrashed()", err)
        })
    } catch (err) {
      setIsLoading(false)
      console.error("Error occur on getCarCrashed()", err)
    }
  }

  //get car crashed data
  const filterByDate = (date) => {
    try {
      setIsLoading(true)
      RestService.GetCarCrashedByDate(date).then(res => {
        setCrashList(res.data)
        setIsLoading(false)
      },
        err => {
          console.error("Error occur on getCarCrashed()", err)
          setIsLoading(false)
        })
    } catch (err) {
      console.error("Error occur on getCarCrashed()", err)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    GetCarByPagination()
  }, [])

  useEffect(() => {
    GetCarByPagination()
  }, [selectedTime,paginationNo])

  return (<>
    <Header />
    <Container className="pt-2">
      <div className="row jce py-3">
        <div className="col-md-3 col-sm-12  aic ">
          <div><input type="date" className="form-control form-control-sm" value={selectedTime} onChange={(e) => {setSelectedTime(e.target.value);setPaginationNo(0)}} /></div>
          <div className="pointer mx-2" onClick={() => setListView(!listView)}>
            <Button variant="light" className="mx-2" >
              <i class="fa fa-th" aria-hidden="true"></i> 
            </Button>
            <Button variant="light"><i class="fa fa-list" aria-hidden="true"></i></Button>
          </div>
        </div>
      </div>
      {crashList.length === 0 ? <NoDataFound title="No data found"/> 
      :<> <div className="car-crash-container">{!listView && <CardView value={crashList}/>} </div>
       {listView && <TableView value={crashList}/> }
       </>}
       {isLoading && <div className="jcc">
       <Button variant="light" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="mx-2">{'Loading Please wait... '}</span>
      </Button>
       </div>}
       {crashList.length > 0 && <div className="py-3">
          <Button disabled={paginationNo === 0} onClick={()=> setPaginationNo(paginationNo - 1 )} className="mx-2">Back</Button>
          <Button onClick={()=> setPaginationNo(paginationNo +1 )}>Next</Button>
          <span className="mx-2">Page No : {paginationNo +1}</span>
       </div>}
    </Container>
  </>)
}
export default Cars