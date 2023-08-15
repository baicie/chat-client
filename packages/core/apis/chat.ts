import {request} from '../common';

export async function getAliveService(){
  return request.get('/api/supports')
}