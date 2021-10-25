import {
  ALLDATA,
  SINGLEDATA
} from './actionsType'

import axios from "axios";

const endPoint = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
});

export function readAllData(page,filter) {
    return async (dispatch) => {
      try {
        const response = await endPoint.get(`/?page=${page}&name=${filter}`);

        dispatch(getAllData(response));
        
      } catch (error) {
        console.log(error);
      }
    };
  }

const getAllData = (data) => {
	return {
		type: ALLDATA,
		payload: data,
	}
}

export function readSingleData(id) {
  return async (dispatch) => {
    try {
      const response = await endPoint.get(`/${id}`);
      dispatch(getSingleData(response));
      
    } catch (error) {
      console.log(error);
    }
  };
}

const getSingleData = (data) => {
return {
  type: SINGLEDATA,
  payload: data,
}
}