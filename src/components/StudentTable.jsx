export const StudentTable = ({students}) =>{
    return(
        <div>
          <table className="w-full border border-gray-600 rounded-md overflow-hidden">
            <thead>
                <tr className="text-left border-b border-gray-600 bg-gray-800">
                    <th className="p-3">Name</th>
                    <th>Status</th>
                    <th>Grade 1</th>
                    <th>Grade 2</th>
                    <th>Final Grade</th>
                </tr>
            </thead>
            <tbody>
             {students.map(item =>(
                <tr key={item.id} className="text-gray-800 bg-white/90 border-b border-b-gray-600">
                    <td className="flex p-3 items-center">
                        <img className="w-10 h-10 rounded-full mr-3" src={item.avatar} alt={item.name} />
                        <div>
                            <div className="font-bold">{item.name}</div>
                            <div>{item.email}</div>
                        </div>
                    </td>
                    <td>
                        {item.active && <div className="p-1 bg-green-600 text-center rounded-md text-xs inline-block border-green-800 text-white">Active</div>}
                        {!item.active && <div className="p-1 bg-red-600 text-center rounded-md text-xs inline-block border-red-800 text-white">Inactive</div>}
                    </td>
                    <td>{item.grade1}</td>
                    <td>{item.grade2}</td>
                    <td className="font-bold">
                        {item.active && Math.round((item.grade1+item.grade2) / 2)}
                        {!item.active && '--'}
                    </td>
                </tr>
             ))}
            </tbody>
          </table>
        </div>
    )
}