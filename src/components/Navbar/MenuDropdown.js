import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from 'react'

const MenuDropdown = ({labelText, dropdownList, setDropdownList}) => {

  const [isDropdownOpen, setDropwdownOpen] = useState(false)
  const dropdownContainer = useRef()

  useEffect(() => {
    if(isDropdownOpen){
      dropdownContainer.current?.children[1].classList.add("collapsed")
      dropdownContainer.current?.children[0].classList.add("bg-gray-200")
      dropdownContainer.current?.children[0].classList.add("text-gray-900")
    }else{
      dropdownContainer.current?.children[1].classList.remove('collapsed')
      dropdownContainer.current?.children[0].classList.remove("bg-gray-200")
      dropdownContainer.current?.children[0].classList.remove("text-gray-900")
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    console.log(dropdownList);
  }, [dropdownList])

  const updateState = ({id}) => {
    const newState = dropdownList.map(obj => {
      if (obj.id === id) {
        return {...obj, current: true};
      }
      return {...obj, current: false};
    });
    setDropdownList(newState);
  };

  const MenuDropdownItem = ({item}) => {
    return (
      <div className={`pl-4 transition-all ${item.current ? "border-l-[4px] border-gray-800" : ""}`} onClick={() => updateState(item)}>
        <Link to={item.href}>{item.name}</Link>
      </div>
    )
  }

  return (
    <div
    id="dropdownContainer"
    ref={dropdownContainer}
    onMouseEnter={() => setDropwdownOpen(true)}
    onMouseLeave={() => setDropwdownOpen(false)}
    className="relative h-[30px]"
    >
      <button id="dropdownLabel" className="capitalize h-[30px] px-3 flex justify-center items-center font-medium rounded-md">{labelText}</button>
      <div id="dropdownCollapsable">
        <div>
          {dropdownList && dropdownList.map(item => <MenuDropdownItem key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  )
}
export default MenuDropdown