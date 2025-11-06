import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import {  create, findById, list } from '../services/backend/folderMethods'



export const useFolderQuery =(id)=>{
  const queryClient = useQueryClient()
  const findOne = useQuery(
    {
      queryKey: ["folders", id],
      queryFn: async () => {
        const res = await findById(id)
        return res
      },
      enabled:Boolean(id)&& id!=="null"
    })
const query ={
  parentId:id
}
      const findAll = useQuery(
    {
      queryKey: ["folders", {query}],
      queryFn: async () => {
        const res = await list(query)
        return res.result
      }
    })

    const addFolder=useMutation({
      mutationFn :(values)=>{
        console.log(values)
        create(values)

        },
      onSuccess :({data},values,unk2)=>{
        queryClient.invalidateQueries({
          queryKey: ["folders", {query}],
        } )
      }
    })

  return { findOne,findAll,addFolder }
}
