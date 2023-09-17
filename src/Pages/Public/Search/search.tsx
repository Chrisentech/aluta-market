import React from 'react';
import Layout from '../../../Layouts';
import { Container } from './search.styles';
import { FilterMenu } from '../../../Shared/Components';

const Screen: React.FC = () => {
    return (
        <Container>
            <div style={{ margin: "20px"}}>
                <FilterMenu></FilterMenu>
            </div>
        </Container>
    )
}

const SearchPage = () => {
    // const { loading } = useSelector((store: any) => store.products);
    return <Layout layout={"full"} component={Screen} state={false} />;
  };

export default SearchPage