import './style.scss';

function CategoryInput({ selectedCategory = null }) {
  if (selectedCategory) {
    return (
      <div className='category-input'>
        <input type='text' />
        <button>추가하기</button>
      </div>
    );
  }
  return (
    <div className='category-input'>
      <input type='text' />
      <div className='button-wrapper'>
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
}

export default CategoryInput;
