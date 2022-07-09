import axios from 'axios';
import { baseURL } from '../model/constants';

export default axios.create({
	baseURL: baseURL,
	headers: {'Content-Type': 'application/json'}
});