import React from "react";
import './article.css';
import  JojoCards  from "../cards/cards";
import {
    jojo_part_1,
    jojo_part_2,
    jojo_part_3,
    jojo_part_4,
    jojo_part_5,
    jojo_part_6,
    jojo_part_7,
    jojo_part_8
} from '../../assets/images/index_images'
const Article = () =>{
    return(<>
        <article>
            <div className="jojo-cartas">
                <JojoCards 
                    JojoPart='Phantom Blood'
                    Portada={jojo_part_1}
                    Jojo='Jonathan Joestar'
                    Habilidad='el hamon'
                    Villano='Dio Brando'
                />
                <JojoCards 
                    JojoPart='Battle Tendency'
                    Portada={jojo_part_2}
                    Jojo='Joseph Joestar'
                    Habilidad='el hamon'
                    Villano='Kars el hombre del pilar'
                />
                <JojoCards 
                    JojoPart='Stardust Cruzaders'
                    Portada={jojo_part_3}
                    Jojo='Kujo Jotaro'
                    Habilidad='su stand Star Platinum'
                    Villano='DIO'
                />
                <JojoCards 
                    JojoPart='Diamond is unbreakable'
                    Portada={jojo_part_4}
                    Jojo='Higasikata Josuke'
                    Habilidad='su stand Crazy Diamond'
                    Villano='Yoshikage Kira'
                />
                <JojoCards 
                    JojoPart='Golden Wind'
                    Portada={jojo_part_5}
                    Jojo='Giorno Giovana'
                    Habilidad='su stand Gold Experience'
                    Villano='Diavolo'
                />
                <JojoCards 
                    JojoPart='Stone Ocean'
                    Portada={jojo_part_6}
                    Jojo='Kujo Jolyne'
                    Habilidad='su stand Stone Free'
                    Villano='Enrico Pucci'
                />
                <JojoCards 
                    JojoPart='Steel Ball Run'
                    Portada={jojo_part_7}
                    Jojo='Jhony Joestar'
                    Habilidad='el spin y su stand Tusk'
                    Villano='Funny Valentine'
                />
                <JojoCards 
                    JojoPart='Jojolion'
                    Portada={jojo_part_8}
                    Jojo='Gappy'
                    Habilidad='su stand soft and wet'
                    Villano='?'
                />
            </div>
        </article>
    </>);
};

export default Article;