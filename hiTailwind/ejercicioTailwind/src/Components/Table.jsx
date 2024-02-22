import React from 'react';

const Table = () => {
  const data = [
    { name: 'Brais Moure', country: 'Spain', bio: 'Spanish Developer' },
    { name: 'Diego De Granda', country: 'Mexico', bio: 'Director of Software Engineering at Platzi ' },
    { name: 'Lucas Dalto', country: 'Argentina', bio: 'Desarrollador y creador de contenido Online', }
  ];

  return (
    <table className="table-auto w-full">
        <caption class='caption-bottom my-4'>Table 1. List of Developers, country and bio.</caption>
      <thead>
        <tr className="bg-violet-200 px-4 py-2">
          <th className='px-2 py-2'>Name</th>
          <th className='px-2 py-2'>Country</th>
          <th className='px-2 py-2'>Bio</th>
          
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td className="border px-4 py-2">{row.name}</td>
            <td className="border px-4 py-2">{row.country}</td>
            <td className="border px-4 py-2">{row.bio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;