import React, {  useState } from 'react';
import Layout from '../../../Layouts';
import { Container, FilterTag, Filters, MainView, Page, SelectIcon, Selector, Sidebar, Wrapper } from './search.styles';
import { Breadcrumb, FilterMenu, View } from '../../../Shared/Components';
import { BiSolidGridAlt } from 'react-icons/bi';
import { PiListFill } from 'react-icons/pi';
import { HiXMark } from 'react-icons/hi2';
// import useProducts from '../../../Features/products/productActions';

const Screen: React.FC = () => {
    const [mode, setMode] = useState<string>('grid')
    const [filters, setFilters] = useState<{[key: string]: string[]}>({})
    // const { products } = useProducts();

    const handleOptionChange = (key: string, value: string) => {
        if (filters[key]) {
            if (filters[key].includes(value)) {
                setFilters((prevState) => {
                    const updatedValues = prevState[key].filter((option) => option !== value)
                    return {
                        ...prevState,
                        [key]: updatedValues,
                    };
                });
            } else {
                setFilters((prevState) => ({
                    ...prevState,
                    [key]: [...prevState[key], value],
                }));
            }
        } else {
            setFilters({
                [key]: [value],
            });
        }
    }
    
    const hasFilter = Object.values(filters).some((value) => (value.length > 0))

    const clearFilters = () => setFilters({})

    const handleGrid = () => {
        setMode('grid')
    }
    const handleList = () => {
        setMode('list')
    }

    const breadcrumbs = [
        // should get links and labels dynamically 
        { label: 'Home', link: '/' },
        { label: 'Mobile Accessory' },
      ];

    // useEffect(() => {
    //   console.log(products)
    // }, [products])
        
    return (
        <Page>
            <Container>
                <Breadcrumb items={breadcrumbs}/>
                <Wrapper>
                    <Sidebar>
                        <FilterMenu onOptionChange={handleOptionChange} filters={filters}></FilterMenu>
                    </Sidebar>
                    <MainView>
                        <Selector>
                            <p>12,911 items in Mobile accessory</p>
                            <div className='buttons'>
                                <select name="Features" className='dropdown'>
                                    <option value="features">Features</option>
                                    <option value="metallic">Metallic</option>
                                    <option value="plastic">Plastic</option>
                                </select>
                                <div className='icons'>
                                    <SelectIcon onClick={handleGrid} active={mode === 'grid'}>
                                        <BiSolidGridAlt size="24px" />
                                    </SelectIcon>
                                    <SelectIcon onClick={handleList} active={mode === 'list'}>
                                        <PiListFill size="24px" />
                                    </SelectIcon>
                                </div>
                            </div>
                        </Selector>
                        {hasFilter && 
                            <Filters>
                                {Object.entries(filters).map(([key, array]) => (
                                    array.map((filter) => <FilterTag>{filter}<HiXMark size="20px" onClick={()=>handleOptionChange(key, filter)}>x</HiXMark></FilterTag>)
                                ))}
                                <span className="clear" onClick={() => clearFilters()}>Clear all filter</span>
                            </Filters>
                        }
                        
                        <View 
                            className="view" mode={mode} 
                            gridItems={Array(9).fill(null)} 
                            itempergrid={3} type="productGrid" 
                            gap='20px' />
                    </MainView>
                </Wrapper> 
            </Container>
        </Page>
    )
}

const SearchPage = () => {
    // const { loading } = useSelector((store: any) => store.products);
    return <Layout layout={"full"} component={Screen} state={false} />;
  };

export default SearchPage