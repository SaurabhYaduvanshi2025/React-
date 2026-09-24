
function ProfileCard(props) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 m-3 shadow-md bg-white w-64">
      <h2 className="text-xl font-bold text-gray-800">{props.name}</h2>
      <p className="text-blue-600 font-medium">{props.role}</p>
      <p className="text-sm text-gray-500 mt-1">Experience: {props.experience}</p>
      
      <button className="mt-3 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600">
        View Profile
      </button>
    </div>
  );
}

export default ProfileCard;