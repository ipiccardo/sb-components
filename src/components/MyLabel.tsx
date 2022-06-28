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
      fontColor?: string
}

const MyLabel = ( {
    label = 'No Label',
    size = 'normal',
    color = 'primary',
    allCaps = false,
    fontColor = ''
}: Props) => {

const _color = 'text-'

    if (!allCaps) {
        label = 'LABEL'
    } else {
        label = 'label'
    }


  return <span className={`label ${ size } ${_color}${color}`}
  style={{color: fontColor}}>
                { label }
         </span>;
};

export default MyLabel;
