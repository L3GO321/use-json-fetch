import { useJsonFetch } from "../utils/useJsonFetch"

export const StatusError = () => {
  const [_, loading, error] = useJsonFetch('http://localhost:7070/error');

  return (
    <div style={{ border: '1px solid red', padding: '20px' }}>
      {loading ? <div>Загрузка...</div> :
        <div>Статус: {error}</div>
      }
    </div>
  )
}