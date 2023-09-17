import styled from 'styled-components';

// Styled components
export const DropdownContainer = styled.div`
    
`;

export const OptionsContainer = styled.div<{ isOpen: boolean }>`
  display: ${(props: { isOpen: boolean }) => (props.isOpen ? 'block' : 'none')};
  width: 100%;
`;



export const Container = styled.div`
  width: 80%;
  margin: 20px auto;
  text-align: center;
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const InputField = styled.input`
  width: 100px;
  padding: 5px;
  text-align: center;
`;
