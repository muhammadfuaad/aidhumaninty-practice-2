function Toggle({state}) {
  return (
    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer"></input>
      <div className="w-12 h-8 bg-gray-200 rounded-full peer peer-checked:after:translate-x-4 peer-checked:after:border-white
        after:content-[''] after:absolute after:left-[3px] after:top-1 after:bg-white after:rounded-full after:h-6 after:w-6
        after:transition-all after:duration-500 peer-checked:bg-[#444445]">
      </div>
      <span className="ml-3 text-[1.4rem] font-medium tracking-[0px] text-headings">{state}</span>
    </label>
  );
}
export default Toggle;