import {simpsons} from "../../array-simpsons/arraySimpsons.ts";
import {CharacterComponent} from "../character-component/CharacterComponent.tsx";
import style from './FamilyComponent.module.css'

export const FamilyComponent = () => {
    return (
        <div className={style.wrapper}>
            {
                simpsons.map((value, index) => (<CharacterComponent item={value} key={index}>
                    {value.info}
                </CharacterComponent>))
            }
        </div>
    );
};

