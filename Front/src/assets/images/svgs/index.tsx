import React from 'react'

export const ErrorMessageIcon = ({ ...props }) => (
    <svg
        {...props}
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
    >
        <circle cx='12' cy='12' r='10' />
        <line x1='12' y1='8' x2='12' y2='12' />
        <line x1='12' y1='16' x2='12.01' y2='16' />
    </svg>
)

export const SuccessMessageIcon = ({ ...props }) => (
    <svg
        {...props}
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
    >
        <circle cx='12' cy='12' r='10' />
        <path d='M7 13l3 3 7-7' />
    </svg>
)

export const SelectArrow = ({ ...props }) => (
    <svg
        {...props}
        width='10'
        height='5'
        viewBox='0 0 10 5'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path d='M5 5L0 0H10L5 5Z' fill='#5D32D5' {...props} />
    </svg>
)

export const RssIcon = ({ ...props }) => (
    <svg
        {...props}
        fill='#000000'
        height='800px'
        width='800px'
        version='1.1'
        id='Layer_1'
        xmlns='http://www.w3.org/2000/svg'
        // xmlns:xlink='http://www.w3.org/1999/xlink'
        viewBox='0 0 504.4 504.4'
        xmlSpace='preserve'
    >
        <g>
            <g>
                <path
                    d='M377.6,0.2H126.4C56.8,0.2,0,57,0,126.6v251.6c0,69.2,56.8,126,126.4,126H378c69.6,0,126.4-56.8,126.4-126.4V126.6
           C504,57,447.2,0.2,377.6,0.2z M136.8,409c-23.2,0-42-18.8-42-41.6c0-23.2,18.8-41.6,42-41.6c23.2,0,42,18.8,42,41.6
           C178.8,390.2,160,409,136.8,409z M242,408.2c0-40-14.8-76-42.4-103.6c-28-28-63.6-42.4-103.6-42.4v-60.4
           c112,0,206.4,94.4,206.4,206.4H242z M348.8,408.2c0-140-112.8-252.8-252.8-252.8V95c172,0,313.2,141.2,313.2,313.2H348.8z'
                />
            </g>
        </g>
    </svg>
)

export const LoginIcon = ({ ...props }) => (
    <svg
        {...props}
        fill='#000000'
        height='800px'
        width='800px'
        version='1.1'
        id='Layer_1'
        xmlns='http://www.w3.org/2000/svg'
        // xmlns:xlink='http://www.w3.org/1999/xlink'
        viewBox='0 0 297 297'
        xmlSpace='preserve'
    >
        <g>
            <g>
                <path
                    d='M255.75,0h-148.5c-5.522,0-10,4.478-10,10v112h-39.5c-14.612,0-26.5,11.888-26.5,26.5S43.138,175,57.75,175h39.5v112
			c0,5.522,4.478,10,10,10h148.5c5.522,0,10-4.478,10-10V10C265.75,4.478,261.272,0,255.75,0z M57.75,155
			c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5h104.5c3.687,0,7.076-2.03,8.816-5.281c1.74-3.252,1.55-7.197-0.496-10.266
			L158.936,109h19.963l26.333,39.5L178.898,188h-19.963l11.635-17.453c2.046-3.068,2.236-7.014,0.496-10.266
			c-1.74-3.251-5.129-5.281-8.816-5.281H57.75z M245.75,277h-128.5V175h26.314l-11.635,17.453
			c-2.046,3.068-2.236,7.014-0.496,10.266c1.74,3.251,5.129,5.281,8.816,5.281h44c3.344,0,6.466-1.671,8.32-4.453l33-49.5
			c2.239-3.358,2.239-7.735,0-11.094l-33-49.5c-1.854-2.782-4.977-4.453-8.32-4.453h-44c-3.688,0-7.076,2.03-8.816,5.281
			c-1.74,3.252-1.55,7.197,0.496,10.266L143.564,122H117.25V20h128.5V277z'
                />
            </g>
        </g>
    </svg>
)

export const LogoutIcon = ({ ...props }) => (
    <svg
        {...props}
        fill='#000000'
        width='28px'
        height='28px'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
    >
        <g id='Logout'>
            <g>
                <path d='M20.968,18.448a2.577,2.577,0,0,1-2.73,2.5c-2.153.012-4.306,0-6.459,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.647A1.546,1.546,0,0,0,19,4.175a3.023,3.023,0,0,0-1.061-.095H11.779a.5.5,0,0,1,0-1c2.224,0,4.465-.085,6.687,0a2.567,2.567,0,0,1,2.5,2.67Z' />
                <path d='M3.176,11.663a.455.455,0,0,0-.138.311c0,.015,0,.028-.006.043s0,.027.006.041a.457.457,0,0,0,.138.312l3.669,3.669a.5.5,0,0,0,.707-.707L4.737,12.516H15.479a.5.5,0,0,0,0-1H4.737L7.552,8.7a.5.5,0,0,0-.707-.707Z' />
            </g>
        </g>
    </svg>
)

export const EditIcon = ({ ...props }) => (
    <svg
        {...props}
        width='28px'
        height='28px'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <g id='Edit / Edit_Pencil_Line_01'>
            <path
                id='Vector'
                d='M4 20.0001H20M4 20.0001V16.0001L12 8.00012M4 20.0001L8 20.0001L16 12.0001M12 8.00012L14.8686 5.13146L14.8704 5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346 17.1288 5.12892L18.8686 6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 19.5369 8.3092C19.4628 8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L16 12.0001M12 8.00012L16 12.0001'
                stroke='#000000'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </g>
    </svg>
)
export const DeleteIcon = ({ ...props }) => (
    <svg
    {...props}
        width='28px'
        height='28px'
        viewBox='0 -0.5 21 21'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
    >
        <title>delete [#1487]</title>
        <desc>Created with Sketch.</desc>
        <defs />
        <g
            id='Page-1'
            stroke='none'
            strokeWidth='1'
            fill='none'
            fillRule='evenodd'
        >
            <g
                id='Dribbble-Light-Preview'
                transform='translate(-179.000000, -360.000000)'
                fill='#000000'
            >
                <g id='icons' transform='translate(56.000000, 160.000000)'>
                    <path
                        d='M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z'
                        id='delete-[#1487]'
                     />
                </g>
            </g>
        </g>
    </svg>
)

export const CloseIcon = ({ ...props }) => (
    <svg {...props} width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M19.3332 2.54675L17.4532 0.666748L9.99984 8.12008L2.5465 0.666748L0.666504 2.54675L8.11984 10.0001L0.666504 17.4534L2.5465 19.3334L9.99984 11.8801L17.4532 19.3334L19.3332 17.4534L11.8798 10.0001L19.3332 2.54675Z'
            fill='#787A7C'
        />
    </svg>
)

export const PlusIcon = ({ ...props }) => (
    <svg {...props} width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M17.5 11.0714H11.0714V17.5H8.92857V11.0714H2.5V8.92857H8.92857V2.5H11.0714V8.92857H17.5V11.0714Z'
            fill='#5D32D5'
        />
    </svg>
)
