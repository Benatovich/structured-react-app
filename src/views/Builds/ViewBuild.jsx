import { Link, useParams, useHistory } from 'react-router-dom';
import { useBuilds } from '../../hooks/builds'
import { useAuth } from '../../hooks/user'
import BuildDetails from '../../components/Builds/BuildDetails'

import styles from './ViewBuild.css'

export default function ViewBuild() {
  const history = useHistory()
  const { id } = useParams()
  const { build, remove } = useBuilds(id);
  const { user } = useAuth()

  if(!build) return null

  const isOwner = user.id === build.userId

  const handleDelete = async () => {
    if(!confirm('Are you sure you want to delete?')) return
    await remove()
    history.replace('/builds')
  };


  return (
    <div>ViewBuild</div>
  )
}
