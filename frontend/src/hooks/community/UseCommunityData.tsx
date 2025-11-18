/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import API from '../../server/ApiService'

export default function UseCommunityData() {
  const [communities, setCommunities] = useState<communityProp[]>([]);
  
  useEffect(() => {
    const handleFetchCommunity = async() => {
        try {
            const response = await API.get('/community');
            setCommunities(response.data.data);
        } catch (error: any) {
            console.error(error.response.data.message);
        }
    }

    handleFetchCommunity();
  }, []);

  return { communities }
}