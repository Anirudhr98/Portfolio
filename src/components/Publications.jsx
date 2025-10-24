import React from 'react'

const pubs = [
  {title:'Detection Of Depressive And Suicidal Tendency Using Twitter Posts (Springer)', url:'https://link.springer.com/chapter/10.1007/978-981-33-4367-2_73'},
  {title:'Performance Evaluation of Different Machine Learning Algorithms using Twitter Data (IEEE)', url:'https://ieeexplore.ieee.org/document/9155747'}
]

export default function Publications(){
  return (
    <div className="card panel rounded-2xl p-8">
      <h2 className="text-2xl neon-text font-extrabold">Publications</h2>
      <ul className="mt-4 space-y-3 underline">
        {pubs.map((p,i)=>(
          <li key={i} className=""><a className="" href={p.url} target="_blank" rel="noreferrer">{p.title}</a></li>
        ))}
      </ul>
    </div>
  )
}
