import React from 'react'
import styles from './BuildDetails.css'

export default function BuildDetails({ build, isOwner }) {
  const { id, name, level, summary,
    weapons, shields, armor, 
    talismans, skills, spells,
    notes, primaryStats, 
    secondaryStats, minStr, 
    minDex, minInt, minFaith, 
    minArc, created, userId } = build;
    const date = new Date(created).toLocaleDateString();

  return (
    <div className={styles.BuildDetails}>
      <h2>{name} {level ? `(Level: ${level})` : null}</h2>
      <p>Description: {summary}</p>
      <hr/>
      <ul>
        {/* map through arrays instead of listing manually */}
        {/* <li>Weapons: {weapons[0]}, {weapons[1]}</li> */}
        <li>Weapons: {weapons}</li>
        <hr/>
        {/* <li>Shields: {shields}</li>
        <hr/>
        <li>armor: {armor}</li>
        <hr/>
        <li>talismans: {talismans}</li>
        <hr/>
        <li>skills: {skills}</li>
        <hr/>
        <li>spells: {spells}</li>
        <hr/> */}
        {/* <li>Primary Stats: {primaryStats}</li>
        <hr/>
        <li>secondary Stats: {secondaryStats}</li>
        <hr/> */}
      </ul>
    </div>
  )
}
