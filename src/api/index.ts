import axios from 'axios';
import {ListType} from "../library/types";

axios.defaults.baseURL = 'http://localhost:8080';

export const getBookList = () => axios.get('/list');

export const getBookInfoById = (id: number) => axios.get(`/book/${id}`);

export const updateBook = (id: number, bookInfo: ListType) => axios.put(`/book/${id}`, bookInfo);

export const deleteBookApi = (id: number) => axios.delete(`/book/delete/${id}`);