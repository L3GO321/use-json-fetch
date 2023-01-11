import { useJsonFetch } from "../utils/useJsonFetch"

export const StatusOk = () => {
  const [data, loading] = useJsonFetch('http://localhost:7070/data');

  return (
    <div style={{ border: '1px solid green', padding: '20px', marginBottom: '20px' }}>
      {loading ? <div>Загрузка...</div> :
        <div>Статус: {data?.status}</div>
      }
    </div>
  )
}