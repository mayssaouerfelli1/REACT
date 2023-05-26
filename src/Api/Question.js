import axios from "axios";

export async function getAllErrors() {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/errors`);
    console.log('response:', response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getErrorWithId(id) {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/errors/${id}`);
    console.log('response:', response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
