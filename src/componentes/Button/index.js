import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    background: #076B92;
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 30px;
 
    &.hover,
    &.focus {
        opacity: .5;
    }
`;

export default Button;