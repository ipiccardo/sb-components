import MyLabel from "../../components/MyLabel";
import {ComponentMeta, ComponentStory} from '@storybook/react'


export default {
    title: 'UI/Etiquetas/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select', options: ['normal', 'h1', 'h3']},
        color: { control: 'select', options: ['primary', 'secondary', 'tertiary']},
        fontColor: { control: 'color' },
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel>= (args) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args = {
    label: 'Label',
    size: 'normal',
    allCaps: false // true: capitalizar toda la palabra
}
export const AllCaps = Template.bind({});
AllCaps.args = {
    label: 'Label',
    size: 'h1',
    allCaps: true
}
export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Label',
    size: 'h3',
    color: 'secondary' // primary | secondary | tertiary
}
export const Tertiary = Template.bind({})
Tertiary.args = {
    label: 'Label',
    size: 'h3',
    color: 'tertiary'
}
export const CustomFontColor = Template.bind({})
CustomFontColor.args = {
    label: 'Label',
    size: 'h1',
    fontColor: 'red'
}

export const CustomBackgroundColor = Template.bind({})
CustomBackgroundColor.args = {
    label: 'Label',
    size: 'h1',
    backgroundColor: 'black',
    fontColor: 'white'
}