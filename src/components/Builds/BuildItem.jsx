import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/user'
import styles from './BuildItem.css'

export default function BuildItem({ build }) {
  const { user } = useAuth();
  const { id, name, level, summary,
    weapons, shields, armor, 
    talismans, skills, spells,
    notes, primaryStats, 
    secondaryStats, minStr, 
    minDex, minInt, minFaith, 
    minArc, created, userId } = build;
  const isOwner = user.id === userId;
  const date = new Date(created);
  const action = isOwner ? 'edit' : 'copy';

  return (
    <li className={styles.buildItem}>
      {/* <span >{date.toLocaleDateString()}</span> */}
      
      <Link to={`/builds/${id}`}>
        {name}
      </Link>

      <span>{isOwner ? 'you' : 'someone else'}</span>

      <span>
        <Link to={`/builds/${id}/${action}`}>
          {action}
        </Link>
      </span>
    </li>
  )
}
