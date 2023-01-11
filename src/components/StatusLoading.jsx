import { useJsonFetch } from "../utils/useJsonFetch"

export const StatusLoading = () => {
  const [data, loading] = useJsonFetch('http://localhost:7070/loading');

  return (
    <div style={{ border: '1px solid yellow', padding: '20px', marginBottom: '20px' }}>
      {loading ? <div>Загрузка...</div> :
        <div>Статус: {data?.status}</div>
      }
    </div>
  )
}