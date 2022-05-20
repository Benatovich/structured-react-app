import { Link, useHistory } from 'react-router-dom';
import { useBuilds } from '../../hooks/builds';
import BuildForm from '../../components/Builds/BuildForm';

export default function AddBuild() {
    const { add } = useBuilds();
    const history = useHistory();

    const handleSubmit = async build => {
        await add(build);
        history.replace('/builds');
    };

    return (
        <div>
            <Link to='/builds'>
                Return to build list
            </Link>

            <h1>Add your build:</h1>

            <BuildForm
                label='new build'
                onSubmit={handleSubmit}
            />
        </div>
    );
}