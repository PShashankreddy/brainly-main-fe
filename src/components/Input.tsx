export function Input({onChange,placeholder}:{placeholder:string,onChange:()=>void})
{
  return <div className="">
    <input
  placeholder={placeholder}
  type="text"
  className="px-4 py-2 m-2 rounded-lg border border-gray-200 
             focus:outline-none focus:ring-2 focus:ring-purple-400"
  onChange={onChange}
/>

  </div>

}