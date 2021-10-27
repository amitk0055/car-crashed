import  './spinner.css'

const Spinner = ({value})=> {
    return(<>
    { value &&  <div className="fullpage-spinner flx flx-center">
        <div className="loading-spinner-container">
            <div className="spinner-border text-primary" role="status">
                </div><div className="mt-3 text-dark">{"Loading Please Waits..."}</div>
                </div>
            </div>}
        </>)
}
export default Spinner