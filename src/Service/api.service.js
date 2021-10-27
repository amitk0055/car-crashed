/* Note : Calling Api Standard
* E.g : getListing Axios call accept params in following seq
* Url : service url
  payload : post data
  param : url parameter
  config : if config object
  config = {
    loader : '#container'  //loader will show for the div having id = 'container'
  }
  if any api fails or empty response comes then related message will be shown

  Ex:
  getListing(payload,config) {
    var params ={
      viewType :'detail'
    };
    return AxiosService.post('/api/listing', payload,params,config);
  },

*
*/
import GLOBELCONSTANT from "../Constant/GlobleConstant.js";
import AxiosService from "./axios.service.js";

const RestService = {
  GetCarCrashed: () => AxiosService.get(GLOBELCONSTANT.CARS.GET_CAR_CRASHED),
  GetCarCrashedByDate: (payload) => AxiosService.get(GLOBELCONSTANT.CARS.GET_BY_DATE + payload),
  GetCarByPagination: (date,offset,limit) => AxiosService.get(GLOBELCONSTANT.CARS.CAR_PAGINATION.replace("{date}",date).replace("{offset}",offset).replace("{limit}",limit)),
}

export default RestService;
