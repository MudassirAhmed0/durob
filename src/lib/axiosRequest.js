import axios from "axios";

const axiosRequest = async (config) => {
  try {
    const data = await axios.request(config);
    return data;
  } catch (error) {
    return error;
  }
};

export default axiosRequest;
