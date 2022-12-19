import { RequestInit } from 'next/dist/server/web/spec-extension/request'
import { toast } from 'react-toastify'

export type Response<T> = {
  status: number;
  data?: T;
};

export const fetchClient = async <T extends unknown>(
  url: string,
  config?: RequestInit
): Promise<Response<T>> => {
  const res = await fetch(`http://localhost:3333/${url}`, {
    ...config,
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      ...config?.headers
    }
  })
  const data = await res.text().then((text) => text ? JSON.parse(text) : {})

  if (res.status < 299 && config?.method) toast('Success')

  if (res.status > 299) toast(`Error: ${res.status}`)

  return { data, status: res.status }
}
