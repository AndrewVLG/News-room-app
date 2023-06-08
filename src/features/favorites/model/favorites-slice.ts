import * as RTK from '@reduxjs/toolkit'
import { FavoriteArticle } from '../../../widgets/top-headlines/top-headlines'
import LocalStorageAuth from '../../../shared/lib/local-storage-auth/local-storage-auth'

const fakeServer = new LocalStorageAuth()
const initialState: FavoriteArticle[] = []
export const fetchUserFavorites = RTK.createAsyncThunk(
  'favorites/fetchUserFav',
  async (login: string) => {
    const response = await fakeServer.getFavorites(login)
    return response
  },
)
export const addToFavorites = RTK.createAsyncThunk(
  'favorites/add',
  async ({ login, fav }: { login: string; fav: FavoriteArticle }) => {
    fakeServer.addFavorite(login, fav)
    return fav
  },
)
export const deleteFavorite = RTK.createAsyncThunk(
  'favorites/delete',
  async ({ login, fav }: { login: string; fav: FavoriteArticle }) => {
    const response = await fakeServer.deleteFavorite(login, fav)
    console.log(response)
    return response
  },
)
const favoritesSlice = RTK.createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchUserFavorites.fulfilled,
      (state, action: RTK.PayloadAction<FavoriteArticle[] | undefined>) => {
        return action.payload
      },
    )
    builder.addCase(
      deleteFavorite.fulfilled,
      (state, action: RTK.PayloadAction<FavoriteArticle[] | undefined>) => {
        return action.payload
      },
    )
  },
})
export const favoritesReducer = favoritesSlice.reducer
