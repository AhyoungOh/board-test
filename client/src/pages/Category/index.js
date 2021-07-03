import './style.scss';
import CategoryList from '../../components/CategoryList';
import CategoryInput from '../../components/CategoryInput';
import useApiCall from '../../hooks/useApiCall';
import { useState } from 'react';
function CategoryPage() {
  const [loading, categoryData, error, fetchData] = useApiCall(
    'http://localhost:4000/api/category'
  );

  const categoryList = [
    {
      title: '가전',
    },
    {
      title: '노트북',
    },
    {
      title: '가구',
    },
    {
      title: '가전',
    },
    {
      title: '노트북',
    },
    {
      title: '가구',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  if (!categoryData) {
    return <></>;
  }

  if (loading) {
    return <>로딩중</>;
  }

  if (error) {
    return <>{error}</>;
  }

  return (
    <div className='category-page'>
      <CategoryList
        categoryList={categoryData}
        categoryFetch={fetchData}
        setSelectedCategory={setSelectedCategory}
      />
      <CategoryInput
        categoryFetch={fetchData}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className='category-page'>
        <CategoryList categoryList={categoryList} />
        <CategoryInput />
      </div>
    </div>
  );
}
export default CategoryPage;
