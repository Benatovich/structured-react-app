import BuildItem from './BuildItem';
import styles from './BuildList.css';

export default function BuildList({ builds }) {
  
  if(!builds) return null;

  return (
    <ul className={styles.buildList}>
      <li className={styles.header}>
        <span>Date</span>
        <span>Title</span>
        <span>Owner</span>
        {/* <span>Name</span>
        <span>Level</span>
        <span>Primary Stats</span> */}
        {/* <span>Secondary Stats</span> */}
        <span></span>
      </li>

      {builds.map(build => {
        return (
          <BuildItem 
            key={build.id} 
            build={build}
          />
        );
      })}
    </ul>
  );
}
