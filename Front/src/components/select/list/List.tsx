import React, { FC } from 'react'
import { ISelectProps } from '../interfaces'
import { SectionWrapper, StyledLi, StyledList } from './style'

const simpleRender = (options: ISelectProps['options'], onChange: ISelectProps['onChange']) =>
    options.map(({ label, value }) => (
        <StyledLi hover id={`id_for_test_value_${value}`} key={value} onMouseDown={() => onChange({ label, value })}>
            {label}
        </StyledLi>
    ))

const sectionRender = ({ options, onChange, section }: ISelectProps) =>
    section?.map(({ title, filterFunc, active }) => (
        <SectionWrapper key={title}>
            <div className='title'>{title}</div>
            {options.filter(filterFunc).map(({ label, value }) => (
                <StyledLi
                    id={`id_for_test_value_${value}`}
                    hover={active}
                    key={value}
                    onMouseDown={active ? () => onChange({ label, value }) : undefined}
                >
                    {label}
                </StyledLi>
            ))}
        </SectionWrapper>
    ))

export const List: FC<ISelectProps> = ({ options, onChange, section }) => (
    <StyledList>{section ? sectionRender({ options, onChange, section }) : simpleRender(options, onChange)}</StyledList>
)
