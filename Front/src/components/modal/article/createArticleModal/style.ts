import { colors } from 'style/colors'
import styled from 'styled-components'

export const DatePickerWrapper = styled.div`
    .react-datepicker-wrapper {
        width: 100%;
        .react-datepicker__input-container {
            > input {
                width: 100%;
                height: 51px;
                border: 1px solid ${colors.grey};
                border-radius: 4px;
                color: ${colors.purple};
                text-align: center;
            }
        }
    }
`
