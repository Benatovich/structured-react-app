import { Link, useParams, useHistory } from 'react-router-dom';
import { useBuild } from '../../hooks/builds'
import { useAuth } from '../../hooks/user'
import BuildDetails from '../../components/Builds/BuildDetails'

import styles from './ViewBuild.css'

export default function ViewBuild() {
  const history = useHistory()
  const { id } = useParams()
  const { build, remove } = useBuild(id);
  const { user } = useAuth()

  if(!build) return null

  const isOwner = user.id === build.user_id

  const handleDelete = async () => {
    if(!confirm('Are you sure you want to delete?')) return
    await remove()
    history.replace('/builds')
  };

  return (
    <div className={styles.ViewBuild}>
      <Link to='/builds'>
        Return to build list
      </Link>

      <div className='buttons-container'>
        {isOwner ? 
          <>
          <Link to={`/builds/${id}/edit`}>
            <button>Edit Build</button>
          </Link>
            <button onClick={handleDelete}>Delete Build</button>
          </>
          : (
            <Link to={`/builds/${id}/copy`}>
              <button>Copy Build</button>
            </Link>
          )
        }
      </div>

      <BuildDetails
        build={build}
        isOwner={isOwner}
      />
    </div>
  )
}
