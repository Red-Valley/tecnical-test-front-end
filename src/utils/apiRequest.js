import axios from "axios";

export const apiRequest = async (dispatch, steps, api) => {
  dispatch(steps.request());
  try {
    const response = await axios.get(api);
    dispatch(steps.success(response));
  } catch (error) {
    dispatch(
      steps.error(
        `Detalle: ${error.message}`
      )
    );
  }
};
