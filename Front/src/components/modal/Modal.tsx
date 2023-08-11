import { CloseIcon } from 'assets/images/svgs'
import React, {
    FC,
    ReactElement,
    useCallback,
    useRef,
    useState,
    useLayoutEffect,
} from 'react'
import { useWindowSize } from 'usehooks-ts'
import { CustomModalBody, CustomModalWrapper, Label } from './style'

export type viewType = 'justText' | 'long' | 'selfWidth' | ''

export const CustomModal: FC<{
    label?: string | React.ReactNode
    open: boolean
    dropCallback?: any
    children: ReactElement | null
    loading?: boolean
}> = ({ label, open, children, dropCallback, loading }) => {
    const { height: windowHeight } = useWindowSize()
    const modalRef = useRef<HTMLDivElement>(null)
    const [modalHeight, setModalHeight] = useState(
        modalRef.current?.clientHeight ?? 0,
    )

    useLayoutEffect(() => {
        const modal = modalRef.current
        setModalHeight(modal?.clientHeight ?? 0)
        modal?.addEventListener('resize', () => {
            setModalHeight(modal?.clientHeight ?? 0)
        })

        return () => {
            modal?.removeEventListener('resize', () => {
                return false
            })
        }
    }, [modalRef.current?.clientHeight, open, loading])

    const isModalOverflow = useCallback(() => {
        if (modalHeight >= 80) return windowHeight - 50 < modalHeight
        return true
    }, [windowHeight, modalHeight])

    return (
        <CustomModalWrapper
            alignModal={isModalOverflow()}
            onMouseDown={() => dropCallback?.()}
            className={open ? 'open' : ''}
        >
            <CustomModalBody
                ref={modalRef}
                onMouseDown={e => e.stopPropagation()}
                className={`${open ? 'open' : ''}`}
            >
                {label && (
                    <Label>
                        <div>{label}</div>{' '}
                        <CloseIcon
                            className='cross'
                            onClick={() => dropCallback?.()}
                        />
                    </Label>
                )}
                {children}
            </CustomModalBody>
        </CustomModalWrapper>
    )
}

CustomModal.defaultProps = {
    dropCallback: undefined,
    label: '',
    loading: false,
}
