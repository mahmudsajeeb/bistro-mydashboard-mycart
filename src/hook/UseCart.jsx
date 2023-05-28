import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'

const UseCart =()=>{
const {user} = useContext(AuthContext)

const { refetch, isError, data:cart=[], error } = useQuery({
  queryKey: ['cart',user?.email],
  queryFn: async () => {
    const response = await fetch(`http://localhost:1000/carts?email=${user.email}`)
    // if (!response.ok) {
    //   throw new Error('Network response was not ok')
    // }
    return response.json()
  },
})
return[cart,refetch ]
}
export default UseCart