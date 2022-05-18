import { Link } from 'react-router-dom';
import { useBuilds } from '../../hooks/builds';
import BuildList from '../../components/Builds/BuildList';
import styles from './ViewBuilds.css';

export default function ViewBuilds() {
  const { builds } = useBuilds();
  
  return (
    <div className={styles.viewBuilds}>
      <h1>ELDEN THINGS</h1>

      <Link to="/builds/add">
        <button>Add a New Build</button>
      </Link>
      
      <BuildList builds={builds}/>
    </div>  
  );
}
