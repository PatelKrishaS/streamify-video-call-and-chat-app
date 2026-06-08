import { useQuery } from '@tanstack/react-query';
import { getAuthuser } from '../lib/api';

const useAuthUser = () => {
  const authUser  = useQuery({
    queryKey:["authUser"], 

    queryFn: getAuthuser,
    retry: false, //auth check
  });

  return {isLoading: authUser.isLoading, authUser: authUser.data?.user}
}

export default useAuthUser