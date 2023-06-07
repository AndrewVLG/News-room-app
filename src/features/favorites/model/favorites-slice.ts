import * as RTK from '@reduxjs/toolkit'
import { FavoriteArticle } from '../../../widgets/top-headlines/top-headlines'
import LocalStorageAuth from '../../../shared/lib/local-storage-auth/local-storage-auth'

const fakeServer = new LocalStorageAuth()
const initialState: FavoriteArticle[] = []
export const getUserFavorites = RTK.createAsyncThunk(
  'favorites/getUserFav',
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

const favoritesSlice = RTK.createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getUserFavorites.fulfilled,
      (state, action: RTK.PayloadAction<FavoriteArticle[] | undefined>) => {
        return [...state, ...(action.payload || [])]
      },
    )
  },
})
export const favoritesReducer = favoritesSlice.reducer
