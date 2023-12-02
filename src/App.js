import logo from './logo.svg';
import './App.css';
import { Block, Button } from 'konsta/react';
import Dropdown from './components/DropDown';

 function MyApp() {
  return (
    <div className='bg-darkBrown'>
      <Block className='flex justify-center mt-[165px] mb-[113px]'>
        <img src={logo} alt="" />
      </Block>

      <Block className='flex justify-center mt-0 mb-[8px]'>
        <Dropdown />
      </Block>

      <Block className='mt-0 mb-4 leading-[20.23px]'>
        <p className='text-white font-labrada'>Lorem ipsum dolor sit amet consectetur. Integer semper adipiscing nam libero vitae id sem augue. Sit sed odio et mauris tortor sit nisl. Sed consectetur eget enim lacinia accumsan posuere. Nulla ipsum mi in. Sed consectetur eget enim lacinia accumsan.</p>
      </Block >
      <Block className="flex flex-col gap-4 font-labrada mt-0">
        <Button className='bg-white text-darkBrown rounded-10px'>Snímky obrazovky</Button>
        <Button className='bg-orange  rounded-10px'>Prihlásiť sa</Button>
        <Button className='bg-lightBrown text-darkBrown rounded-10px'>Registrovať sa</Button>
      </Block>
    </div>
  );
}

export default MyApp