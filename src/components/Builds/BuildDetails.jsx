import React from 'react'

export default function BuildDetails({ build, isOwner }) {
  const { name, summary, created } = build;
  const date = new Date(created).toLocaleDateString();

  return (
    <div>
      <h2>{name}</h2>
      <p>{summary}</p>
    </div>
  )
}
