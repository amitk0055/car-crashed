import { useEffect, useState } from 'react'
import Header from "../../Components/Layout/Header"
import IMG_CAR from '../../Assets/Images/205.jpg'
import moment from 'moment';

const CarsDetails = ({ location }) => {
    const [carInfo, setCarInfo] = useState()

    // initializing the component
    useEffect(() => {
        setCarInfo(location.state.data)
    }, [])

    return (<>
        <Header />
        <div className="container">
            <div className="row aic">
                <div className="col-lg-6 col-sm-12 img-con">
                    <img src={IMG_CAR} />
                </div>
                {carInfo && <>
                    <div className="col-lg-6 col-sm-12 ">
                        <div className="title text-decoration-underline">Car crashed details</div>
                        <div className="row my-2">
                            <div className="col-lg-4 col-sm-6 bold-font ">Crashed Date</div>
                            <div className="col-lg-8 col-sm-6">{carInfo.crash_date ? moment(carInfo.crash_date).format("MMM Do YYYY") : ''}</div>
                        </div>
                        <div className="row my-2">
                            <div className="col-lg-4 col-sm-6 bold-font">Crashed Time</div>
                            <div className="col-lg-8 col-sm-6">{carInfo?.crash_time ?? '-'}</div>
                        </div>
                        <div className="row my-2">
                            <div className="col-lg-4 col-sm-6 bold-font">Vehicle 1</div>
                            <div className="col-lg-8 col-sm-6">{carInfo?.vehicle_type_code1 ?? '-'}</div>
                        </div>
                        <div className="row my-2">
                            <div className="col-lg-4 col-sm-6 bold-font">Vehicle 2</div>
                            <div className="col-lg-8 col-sm-6">{carInfo?.vehicle_type_code2 ?? '-'}</div>
                        </div>
                        <div className="row my-2">
                            <div className="col-lg-4 col-sm-6 bold-font">On Street Name</div>
                            <div className="col-lg-8 col-sm-6">{carInfo?.on_street_name ?? '-'}</div>
                        </div>
                        <div className="row my-2">
                            <div className="col-lg-4 col-sm-6 bold-font">Zip Code</div>
                            <div className="col-lg-8 col-sm-6">{carInfo?.zip_code ?? '-'}</div>
                        </div>
                        <div className="row  my-2">
                            <div className="col-lg-4 col-sm-6 bold-font"> Person Injured:</div>
                            <div className="col-lg-8 col-sm-6">{carInfo?.number_of_persons_injured ?? '-'}</div>
                        </div>
                        <div className="row my-2">
                            <div className="col-lg-4 col-sm-6 bold-font">Person Killed</div>
                            <div className="col-lg-8 col-sm-6">{carInfo?.number_of_persons_killed ?? '-'}</div>
                        </div>

                    </div>
                </>}
            </div>
        </div>
    </>)
}

export default CarsDetails