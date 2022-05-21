import { Link, useParams, useHistory } from 'react-router-dom';
import { useBuild, useBuilds } from '../../hooks/builds';
import BuildForm from '../../components/Builds/BuildForm';

export default function CopyBuild() {
  const history = useHistory();
  const { id } = useParams();
  const { build } = useBuild(id);
  const { add } = useBuilds();

  if (!build) return null;

  const handleSubmit = async (copied) => {
    await add(copied);
    history.replace('/builds');
  };

  return (
    <div>
      <Link to='/builds'>
        Return to build list
      </Link>

      <BuildForm
        label='new build'
        build={build}
        onSubmit={handleSubmit}
      />
    </div>
  )
}
