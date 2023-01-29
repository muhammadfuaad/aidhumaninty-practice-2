function Fixed_navigator() {
  return (
    <ul className="flex space-x-12 w-full bg-white px-8 fixed bottom-0 text-[1.2rem] font-medium tracking-[-0.18px] text-headings">
      <li className="py-8 border-y-4 border-white hover:border-b-primary"><a href="#">View</a></li>
      <li className="py-8 border-y-4 border-white hover:border-b-primary"><a href="#">Edit</a></li>
      <li className="py-8 border-y-4 border-white hover:border-b-primary"><a href="#">Media</a></li>
      <li className="py-8 border-y-4 border-white hover:border-b-primary"><a href="#">Donations</a></li>
      <li className="py-8 border-y-4 border-white hover:border-b-primary"><a href="#">Settings</a></li>
    </ul>
  )
}
export default Fixed_navigator;