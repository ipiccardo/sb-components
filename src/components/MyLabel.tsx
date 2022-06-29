import './myLabel.css'
import allCaps from '../stories/components/MyLabel.stories';

export interface Props {
    /**
     * Este es el mensaje a mostrar en la etiqueta
     */
    label: string;
    /**
     * Este es el Tamaño de la etiqueta
     */
    size: 'normal'| 'h1' | 'h3';
    /**
     * Este es el Color de la etiqueta
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Este es si queire la letra capitalizada o no
     */
    allCaps?: boolean;
     /**
     * Color personalizado de la fuente
     */
    fontColor?: string;
    /**
    * Color personalizado del fondo
    */
    backgroundColor?: string
}

const MyLabel = ( {
    label,
    size = 'normal',
    color = 'primary',
    allCaps = false,
    fontColor = '',
    backgroundColor = 'transparent'
}: Props) => {

const _color = 'text-'

  return <span className={`label ${ size } ${_color}${color}`}
  style={{color: fontColor, backgroundColor: backgroundColor}}>
                { allCaps ? label.toUpperCase() : label }
         </span>;
};

export default MyLabel;
