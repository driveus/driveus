import axios from 'axios';

export default function axiosRequest(target, payload) {
  return axios.post('/api/' + target, {
    data: payload
  });
}
