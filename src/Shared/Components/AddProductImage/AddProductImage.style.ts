import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  .image-container {
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 20px;
    border: 1px solid lightgray;
    position: relative;
    margin-bottom:15px;
    .active {   
       border-radius: 6px;
    background: var(--green, #00b517);
    width: 85px;
    padding: 4px 0;
    margin: 10px 0;
    bottom: -27px;
    position: absolute;
    overflow: hidden;
}
    }
    img {
      // object-fit: contain;
      border-radius: 5px;
      width: 100%;
      height: 100%;
    }
    .svg{
      position: absolute;
      top: 5px;
      right: 5px;
      color: #dee2e7;
    }
  }
  .addBtn {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 20px;
    border: 1px dashed lightgray;
    background: #f7fafc;
    position: relative;
    svg {
      position: relative;
    }
  }
`;

export const PriceInput = styled.input.attrs({ type: 'number' })`
  width: 100%;
  position: absolute;
  bottom: 10px;
  padding: 2px;

  outline: none;
  border: none;
  background: #505050;
  opacity: 0.4;
  color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 10px;
  font-weight: 400;


  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;