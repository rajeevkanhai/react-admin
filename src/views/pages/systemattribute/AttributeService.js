import axios from 'axios';

const API_URL = "http://localhost:6010/renosecure/";

class AttributeService {

    getAttribute(){
        return axios.get(API_URL+'attribute');
    }

    getAttributeType(){
        return axios.get(API_URL+'master/'+'1');
    }

    addItemToState(item){
        return axios.post(API_URL+'attribute', item);
    }
    updateState(item){
        return axios.put(API_URL+'attribute', item);
    }
    deleteItemFromState(senddata){
        return fetch(API_URL+'attribute',{
            method: 'delete',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(senddata)
      });
    }
}

export default new AttributeService()