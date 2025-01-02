import {ISimpsons} from "../../array-interface/ISimpsons.ts";
import {ReactNode} from "react";
import './CharacterComponent.css'
interface ISimpsonsProps {
    item: ISimpsons;
    children: ReactNode;
}

export const CharacterComponent = ({item, children}: ISimpsonsProps) => {
    return (
        <div className={'simpson-wrapper'}>
             <div className={'simpson-title'}>
                 <div className={'simpson-name'}>
                     <h2 className= 'text-6xl italic text-amber-500'>{item.name} {item.surname}</h2>
                     <h3 className='text-4xl py-10 text-amber-700 underline'>{item.age} : years</h3>
                 </div>
                 <div className={'simpson-photo'}>
                     <img src={item.photo} alt={item.name}/>
                 </div>
             </div>
             <div className={'simpson-about'}>
                 {children}
             </div>
        </div>
    );
};

