import { Card } from '../'
import { IProductGridProps } from '../../../Interfaces';
import { Container } from './ProductGrid.styles';


const ProductGrid: React.FC<IProductGridProps> = ({
    column,
    row,
    cardWidth,
    cardHeight,
    image,
    alt,
    background,
    children,
}) => {
    return (
        <Container column={column} row={row} background={background}>
            {Array((column as number) * (row as number))
            .fill('*')
            .map((_, index) => (
                <Card 
                    key={index} 
                    width={cardWidth} 
                    height={cardHeight} 
                    className="card"
                >
                    <div className='image'>
                        <img src={image} alt={alt} />
                    </div>
                    <div className='detail'>
                        {children}
                    </div>
                </Card>
            ))}
        </Container>
    )
}

ProductGrid.defaultProps = {
    column: 6,
    row: 1,
    cardWidth: "unset",
    cardHeight: 270,
    background: 'white',
    alt: 'product image'
}

export default ProductGrid;