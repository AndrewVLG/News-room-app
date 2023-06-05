import { Avatar, Typography } from '@mui/material'
import { User } from '../../../shared/hooks/use-auth'
import s from './config/profile.module.css'

const Profile = ({ user }: { user: User }) => {
  const birthDay = user.birthDay ? user.birthDay : 'Не указано'
  return (
    <div className={s.profile}>
      <div className={s.avatar}>
        <Avatar sx={{ left: 5, backgroundColor: '#FF1E0C' }}>
          {user.login.at(0)?.toUpperCase()}
        </Avatar>
        <Typography sx={{ color: '#1E90FF' }}>{user.login}</Typography>
      </div>
      <div className={s.userInfo}>
        <Typography sx={{ color: '#1E90FF' }}>Дата рождения:</Typography>
        <Typography sx={{ color: '#FF1E0C' }}>{birthDay}</Typography>
      </div>
    </div>
  )
}
export default Profile
