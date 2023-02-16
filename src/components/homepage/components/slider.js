const heroImage = new URL("../../../assets/images/water-hand-pumps.png",import.meta.url)
function Slider() {
  return (
    <div className="flex flex-col">
      <button className="w-full py-6 uppercase text-[1.4rem] font-semibold text-white bg-transparent outline outline-white rounded-xl">Water for all</button>

      <p className="text-white text-[3rem] font-bold tracking-[-0.75px]">Build a water well</p>
      <p className="text-white text-[1.6rem] font-bold tracking-[-0.75px]">Whatever the use of freshwater (agriculture, industry, domestic use), huge saving of water and improving of water management is possible. Almost everywhere, water is wasted, and as long as people are not facing water scarcity, they believe access to water is an obvious and natural thing. With urbanization and changes in lifestyle, water consumption is bound to increase. However, changes in food habits, for example, may reduce the problem, knowing that growing 1kg of potatoes requires only 100 litres of water, whereas 1 kg of beef requires 13 000 litres.</p>
    </div>
  );
}
export default Slider;