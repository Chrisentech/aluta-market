import { useState, useCallback, useEffect } from 'react';

interface VariantProps {
  id: number;
  variant: string;
  price: number;
  quantity: number;
}

type ColorOptions = {
  [key: string]: {
    option: string,
    price: string,
  }
}

interface ColorVariantProps extends Omit<VariantProps, 'variant'> {
  imageUrl: string;
  variant: ColorOptions;
}

const useVariants = () => {
  const [sizeVariants, setSizeVariants] = useState<VariantProps[]>([]);
  const [colorVariants, setColorVariants] = useState<ColorVariantProps[]>([]);
  const [conditionVariants, setConditionVariants] = useState<VariantProps[]>([]);

  const addNewVariant = useCallback(
    (type: string, imageUrl?: string) => {
      const newVariant: VariantProps = { id: Date.now(), variant: '', price: 0, quantity: 1 };
      const newColorVariant: ColorVariantProps = {
        id: Date.now(),
        imageUrl: imageUrl || '',
        variant: {},
        price: 0,
        quantity: 1,
      };

      switch (type) {
        case 'size':
          setSizeVariants((prev) => [...prev, newVariant ]);
          break;
        case 'color':
          setColorVariants((prev) =>  [...prev, newColorVariant ]);
          break;
        case 'condition':
          setConditionVariants((prev) =>  [...prev, newVariant ]);
          break;
        default:
          break;
      }
    },
    []
  );

  const handleVariantChange = useCallback(
    (type: string, index: number, key: string, value: string | number) => {
      const updateVariants = (variants: VariantProps[] | ColorVariantProps[]) => {
        const updatedVariants = [...variants];

        if (type === 'color' && key === 'imageUrl') {
          // Update imageUrl for color variant
          (updatedVariants[index] as ColorVariantProps).imageUrl = value as string;
        } else {
          // Handle other general variant changes
          if (key === 'variant') {
            updatedVariants[index].variant = value as string;
          } else {
            updatedVariants[index].price = value as number;
          }
        }

        return updatedVariants;
      };

      switch (type) {
        case 'size':
          setSizeVariants((prev) => updateVariants(prev) as VariantProps[]);
          break;
        case 'color':
          setColorVariants((prev) => updateVariants(prev) as ColorVariantProps[]);
          break;
        case 'condition':
          setConditionVariants((prev) => updateVariants(prev) as VariantProps[]);
          break;
        default:
          break;
      }
    },
    []
  );

  const handleQuantityChange = useCallback(
    (type: string, index: number, quantity: number) => {
      const updateQuantities = (variants: VariantProps[] | ColorVariantProps[]) => {
        const updatedVariants = [...variants];
        updatedVariants[index].quantity = quantity;
        return updatedVariants;
      };

      switch (type) {
        case 'size':
          setSizeVariants((prev) => updateQuantities(prev) as VariantProps[]);
          break;
        case 'color':
          setColorVariants((prev) => updateQuantities(prev) as ColorVariantProps[]);
          break;
        case 'condition':
          setConditionVariants((prev) => updateQuantities(prev) as VariantProps[]);
          break;
        default:
          break;
      }
    },
    []
  );

  const increaseQuantity = useCallback(
    (type: string, index: number) => {
      handleQuantityChange(type, index, getVariants(type)[index].quantity + 1);
    },
    [handleQuantityChange]
  );

  const decreaseQuantity = useCallback(
    (type: string, index: number) => {
      const currentQuantity = getVariants(type)[index].quantity;
      if (currentQuantity > 1) {
        handleQuantityChange(type, index, currentQuantity - 1);
      }
    },
    [handleQuantityChange]
  );

  const deleteVariant = useCallback(
    (type: string, index: number) => {
      const deleteFromVariants = (variants: VariantProps[] | ColorVariantProps[] ) => {
        const updatedVariants = [...variants];
        updatedVariants.splice(index, 1);
        return updatedVariants;
      };

      switch (type) {
        case 'size':
          setSizeVariants((prev) => deleteFromVariants(prev) as VariantProps[]);
          break;
        case 'color':
          setColorVariants((prev) => deleteFromVariants(prev) as ColorVariantProps[]);
          break;
        case 'condition':
          setConditionVariants((prev) => deleteFromVariants(prev) as VariantProps[]);
          break;
        default:
          break;
      }
    },
    []
  );

  const getVariants = useCallback(
    (type: string) => {
      switch (type) {
        case 'size':
          return sizeVariants;
        case 'color':
          return colorVariants;
        case 'condition':
          return conditionVariants;
        default:
          return [];
      }
    },
    [sizeVariants, colorVariants, conditionVariants]
  );

  // useEffect(() => {
  //   // You can do any cleanup or side effect here if needed
  //   return () => {
  //     // Cleanup logic
  //   };
  // }, [sizeVariants, colorVariants, conditionVariants]);

  return {
    addNewVariant,
    handleVariantChange,
    handleQuantityChange,
    increaseQuantity,
    decreaseQuantity,
    getVariants,
    deleteVariant,
  };
};

export default useVariants;
