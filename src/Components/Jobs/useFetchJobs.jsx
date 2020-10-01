import axios from "axios";
import { useReducer, useEffect } from "react";

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
};
const BASE_URL = "https://jobs.github.com/positions.json";
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { laoding: true, jobs: [] };
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, jobs: action.payload.jobs };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: [],
      };
    default:
      return state;
  }
}

function useFetchJobs(params, page) {
  
  const [state, dispatch] = useReducer(reducer, {
    jobs: [],
    loading: true,
  });
  useEffect(() => {
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios.get(BASE_URL);
  }, [params, page]);
  return {
    jobs: [],
    loading: false,
    error: false,
  };
}

export default useFetchJobs;
