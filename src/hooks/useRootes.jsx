import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function useRootes() {
    const navigate = useNavigate()
    const [search, setSearch] = useSearchParams();
    const params = useParams()


  return {
    navigate:navigate,
    params:params,
    searchParams:[search, setSearch]
  }
}
