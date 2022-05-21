import { Link, useParams, useHistory } from 'react-router-dom';
import { useBuild } from '../../hooks/builds';
import { useAuth } from '../../hooks/user';
import BuildForm from '../../components/Builds/BuildForm';

export default function EditBuild() {
  const history = useHistory();
  const { id } = useParams();
  const { build, update } = useBuild(id);
  const { user } = useAuth();

  if(!build) return null;

  const isOwner = user.id === build.userId;
  const detailUrl = `/builds/${build.id}`;

  // if(!isOwner) {
  //   history.replace(detailUrl);
  //   return null;
  // }

  const handleSubmit = async (edited) => {
    await update(edited);
    history.push('/builds');
  };
  
  return (
    <div>
      <div>
        <Link to='/builds'>
          Return to build list
        </Link>
        {' / '}
        <Link to={detailUrl}>
          {build.name}
        </Link>
      </div>

      <BuildForm
        label='Edit Build'
        build={build}
        onSubmit={handleSubmit}
      />
    </div>
  )
}
