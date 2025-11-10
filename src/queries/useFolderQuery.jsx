import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { create, findById, list, remove } from '../services/backend/folderMethods'
import { createFile, listFile, removeFile } from '../services/backend/fileMethod'



export const useFolderQuery = (id) => {
  const queryClient = useQueryClient()
  const findOne = useQuery(
    {
      queryKey: ["folders", id],
      queryFn: async () => {
        const res = await findById(id)
        return res
      },
      enabled: Boolean(id) && id !== "null"
    })
  const query = {
    parentId: id ||"null"
  }
  const findAll = useQuery(
    {
      queryKey: ["folders", { query }],
      queryFn: async () => {
        const res = await list(query)
        return res.result
      }
    })

  const findAllFile = useQuery(
    {
      queryKey: ["files", { query }],
      queryFn: async () => {
        const res = await listFile(query)
        return res.result
      }
    })

  const addFolder = useMutation({
    mutationFn: async (values) => {
      console.log(values)
      return await create(values)

    },
    onSuccess: ( data , values, unk2) => {
      queryClient.invalidateQueries({
        queryKey: ["folders", { query }],
      })
    }
  })

    const addFile = useMutation({
    mutationFn: async (values) => {
      console.log(values)
      return await createFile(values)

    },
    onSuccess: ( data , values, unk2) => {
      queryClient.invalidateQueries({
        queryKey: ["files", { query }],
      })
    }
  })

  const removeFolder = useMutation({
    mutationFn:async (id) => {

      return await remove(id)
    },
    onSuccess: ( data , values, unk2) => {
      queryClient.invalidateQueries({
        queryKey: ["folders", { query }],
      })
    }

  })

   const removeFiles = useMutation({
    mutationFn:async (id) => {

      return await removeFile(id)
    },
    onSuccess: ( data , values, unk2) => {
      queryClient.invalidateQueries({
        queryKey: ["files", { query }],
      })
    }

  })

  return { findOne, findAll, addFolder, findAllFile,removeFiles ,removeFolder,addFile}
}
