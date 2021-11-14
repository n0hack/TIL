import { START_LOADING, FINISH_LOADING } from '../modules/loading';

export default function createRequestThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return (params) => async (dispatch) => {
    // dispatch({ type });
    dispatch(START_LOADING(type));
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
      dispatch(FINISH_LOADING(type));
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      });
      dispatch(FINISH_LOADING(type));
      // 나중에 컴포넌트 단에서 예외 조회 가능
      throw e;
    }
  };
}
