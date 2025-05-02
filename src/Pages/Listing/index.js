import React, { useState } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { TfiFullscreen } from "react-icons/tfi";
import Button from '@mui/material/Button';
import { IoIosHeartEmpty } from "react-icons/io";
import { useContext } from "react";
import { MyContext } from "../../App";
import ProductItem from "../../Components/ProductItem";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';




const Listing = () =>{
  const navigate = useNavigate();

  const context = useContext(MyContext);
  const viewProductDetails=(id)=>{
    context.setisOpenProductModal(true);

}


    const [filters, setFilters] = useState({
        material: '',
        gender: '',
        priceRange: '',
        keyword: '',
        sort: ''
      });
      const products = [
        {
          id: 1,
          image: "https://cdn.pnj.io/images/detailed/237/sp-gnxm00y005207-nhan-vang-dinh-da-ecz-pnj-1.png",
          name: "Nhẫn bạc nữ đính đá cao cấp Swarovski B.N5001",
          oldPrice: "1,679,000đ",
          price: "1,479,000đ",
        },
        {
          id: 2,
          image: "https://cdn.pnj.io/images/detailed/237/sp-gnxm00y005207-nhan-vang-dinh-da-ecz-pnj-1.png",
          name: "Nhẫn đôi bạc đính đá pha lê J.N5001-J.N5002",
          oldPrice: "2,187,000đ",
          price: "1,987,000đ",
        },
        {
          id: 3,
          image: "https://cdn.pnj.io/images/detailed/237/sp-gnxm00y005207-nhan-vang-dinh-da-ecz-pnj-1.png",
          name: "Nhẫn bạc nữ hoa mai đính đá J.N5720 thiết kế đẹp",
          oldPrice: "1,175,000đ",
          price: "975,000đ",
        },
        {
          id: 4,
          image: "https://cdn.pnj.io/images/detailed/237/sp-gnxm00y005207-nhan-vang-dinh-da-ecz-pnj-1.png",
          name: "Nhẫn bạc nữ vàng hồng đính đá J.N5723 cao cấp",
          oldPrice: "975,000đ",
          price: "775,000đ",
        },
        {
          id: 5,
          image: "https://cdn.pnj.io/images/detailed/237/sp-gnxm00y005207-nhan-vang-dinh-da-ecz-pnj-1.png",
          name: "Nhẫn bạc nữ đính đá cao cấp Swarovski B.N5001",
          oldPrice: "1,479,000đ",
          price: "1,279,000đ",
        },
        {
          id: 6,
          image: "https://cdn.pnj.io/images/detailed/237/sp-gnxm00y005207-nhan-vang-dinh-da-ecz-pnj-1.png",
          name: "Nhẫn đôi bạc 925 đính đá sang trọng J.N5025-J.N5026",
          oldPrice: "2,075,000đ",
          price: "1,875,000đ",
        },
        {
          id: 7,
          image: "https://cdn.pnj.io/images/detailed/237/sp-gnxm00y005207-nhan-vang-dinh-da-ecz-pnj-1.png",
          name: "Nhẫn đôi bạc 925 đính đá cao cấp J.N8125-J.N8126",
          oldPrice: "1,780,000đ",
          price: "1,580,000đ",
        },
        {
          id: 8,
          image: "https://cdn.pnj.io/images/detailed/237/sp-gnxm00y005207-nhan-vang-dinh-da-ecz-pnj-1.png",
          name: "Nhẫn bạc nữ đính đá cao cấp J.N5723 cao cấp",
          oldPrice: "1,075,000đ",
          price: "875,000đ",
        },
        {
          id: 9,
          image: "https://cdn.pnj.io/images/detailed/237/sp-gnxm00y005207-nhan-vang-dinh-da-ecz-pnj-1.png",
          name: "Nhẫn bạc nữ đính đá cao cấp Swarovski B.N5001",
          oldPrice: "1,679,000đ",
          price: "1,479,000đ",
        },
        {
          id: 10,
          image: "https://cdn.pnj.io/images/detailed/237/sp-gnxm00y005207-nhan-vang-dinh-da-ecz-pnj-1.png",
          name: "Nhẫn nam bạc đơn giản mặt đá đen B.N5220",
          oldPrice: "975,000đ",
          price: "775,000đ",
        },
        {
          id: 11,
          image: "https://cdn.pnj.io/images/detailed/237/sp-gnxm00y005207-nhan-vang-dinh-da-ecz-pnj-1.png",
          name: "Nhẫn bạc nữ mặt đá xanh dương cao cấp N.N5723",
          oldPrice: "1,175,000đ",
          price: "975,000đ",
        },
        {
          id: 12,
          image: "https://cdn.pnj.io/images/detailed/237/sp-gnxm00y005207-nhan-vang-dinh-da-ecz-pnj-1.png",
          name: "Nhẫn đôi bạc 925 thiết kế sang trọng A.N5025-A.N5026",
          oldPrice: "2,075,000đ",
          price: "1,875,000đ",
        },
      ];
      const handleFilterChange = (filterName, value) => {
        setFilters({
          ...filters,
          [filterName]: value
        });
        // Here you would typically call a function to apply the filters
        console.log('Filters updated:', { ...filters, [filterName]: value });
      };

  
  const filteredProducts = products
  .filter(product => {
    // Lọc theo từ khóa
    if (filters.keyword && !product.name.toLowerCase().includes(filters.keyword.toLowerCase())) {
      return false;
    }

    // Lọc theo chất liệu
    if (filters.material && product.material !== filters.material) {
      return false;
    }

    // Lọc theo giới tính
    if (filters.gender && product.gender !== filters.gender) {
      return false;
    }

    // Lọc theo khoảng giá
    if (filters.priceRange) {
      const priceNum = parseInt(product.price.replace(/\D/g, ''));
      const [min, max] = filters.priceRange.split('-');

      if (max === "plus") {
        if (priceNum <= parseInt(min)) return false;
      } else {
        if (priceNum < parseInt(min) || priceNum > parseInt(max)) return false;
      }
    }

    return true;
  })
  .sort((a, b) => {
    const priceA = parseInt(a.price.replace(/\D/g, ''));
    const priceB = parseInt(b.price.replace(/\D/g, ''));
    if (filters.sort === "price-asc") return priceA - priceB;
    if (filters.sort === "price-desc") return priceB - priceA;
    return 0;
  });


  return (
    <div className="lili-jewelry-page">
      <header className="header">
        <div className="top-bar">
          <div className="container">
            <div className="top-left">
              <a href="/"><AiOutlineHome size={20} className='iconHome'/> Trang chủ</a>
              <span className="separator">|</span>
              <span className="active">Nhẫn</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="main-title">NHẪN<br />CAO CẤP</h1>
            <div className="divider"></div>
            <p className="description">
              Hiện thời hiện có nhiều loại nhẫn bạc khác nhau, nhẫn nữ hay nam đều có đặc điểm riêng và đều đã làm say đắm biết bao người sử dụng của chúng
            </p>
          </div>
          <div className="hero-image">
            <img src="" alt="" />
          </div>
        </section>

        <section className="featured-products">
          <div className="section-title">
            <div className="title-line"></div>
            <h2>SẢN PHẨM ĐỀ XUẤT</h2>
            <div className="title-line"></div>
          </div>

          <div className="product_row productRow2 w-100 mt-4 d-flex">
            {products.map(product => (
                <div key={product.id} className="item productItem"
                onClick={() => navigate(`/product/${product.id}`)} // 👉 chuyển trang chi tiết
        style={{ cursor: 'pointer' }} >
                <div className="imgWrapper">
                <img src={product.image} className="w-100" alt={product.name}/>
                {product.discountPercent && (
                  <span className="badge badge-primary">
                    -{product.discountPercent}%
                  </span>
)}
                <div className="actions">
                  <Button onClick={(e) => { e.stopPropagation(); viewProductDetails(product.id);}}><TfiFullscreen/></Button>
                  <Button onClick={(e) => e.stopPropagation()}><IoIosHeartEmpty style={{fontSize: '20px'}}/></Button>
                </div>
                </div>
                <div className="info">
                <h4 className="spham">{product.name}</h4>
                <div className="d-flex align-items-center">
                <span className="oldPrice">{product.oldPrice}</span>
                <span className="netPrice text-danger ml-2">{product.price}</span>
                </div>
                {product.promotion && (
                  <p className="promotion mt-4">{product.promotion}</p>
                  )}
                {product.sold && (
                  <p className="sold">{product.sold} đã bán</p>
                  )}
            </div>
            </div>
            ))}
            </div>

                                        
                                    
                             
        </section>

        <section className="category-section">
          <div className="section-title">
            <div className="title-line"></div>
            <h2>NHẪN</h2>
            <div className="title-line"></div>
          </div>

          <div className="filter-container">
      <div className="filter-item">
        <select 
          value={filters.material}
          onChange={(e) => handleFilterChange('material', e.target.value)}
          aria-label="Chất liệu"
        >
          <option value="">Chất liệu</option>
          <option value="vang">Vàng</option>
          <option value="bac">Bạc</option>
          <option value="titanium">Titanium</option>
        </select>
        <span className="chevron">▼</span>
      </div>
      
      <div className="filter-item">
        <select
          value={filters.gender}
          onChange={(e) => handleFilterChange('gender', e.target.value)}
          aria-label="Giới tính"
        >
          <option value="">Giới tính</option>
          <option value="nam">Nam</option>
          <option value="nu">Nữ</option>
          <option value="unisex">Unisex</option>
        </select>
        <span className="chevron">▼</span>
      </div>
      
      <div className="filter-item">
        <select
          value={filters.priceRange}
          onChange={(e) => handleFilterChange('priceRange', e.target.value)}
          aria-label="Khoảng giá"
        >
          <option value="">Khoảng giá</option>
          <option value="0-500000">Dưới 500.000₫</option>
          <option value="500000-1000000">500.000₫ - 1.000.000₫</option>
          <option value="1000000-2000000">1.000.000₫ - 2.000.000₫</option>
          <option value="2000000-plus">Trên 2.000.000₫</option>
        </select>
        <span className="chevron">▼</span>
      </div>
      
      <div className="filter-item">
        <input 
          type="text" 
          placeholder="Từ khóa sản phẩm..." 
          value={filters.keyword}
          onChange={(e) => handleFilterChange('keyword', e.target.value)}
          aria-label="Từ khóa sản phẩm"
        />
      </div>
      
      <div className="filter-item">
        <select
          value={filters.sort}
          onChange={(e) => handleFilterChange('sort', e.target.value)}
          aria-label="Sắp xếp"
        >
          <option value="">Sắp xếp</option>
          <option value="price-asc">Giá tăng dần</option>
          <option value="price-desc">Giá giảm dần</option>
          <option value="newest">Mới nhất</option>
          <option value="bestseller">Bán chạy nhất</option>
        </select>
        <span className="chevron">▼</span>
      </div>
          </div>
          <div className="product_row productRow2 w-100 mt-4 d-flex flex-wrap">
  {filteredProducts.length > 0 ? (
    filteredProducts.map(product => (
      <div key={product.id} className="item productItem"
        onClick={() => navigate(`/product/${product.id}`)} // 👉 chuyển trang chi tiết
        style={{ cursor: 'pointer' }} >
        <div className="imgWrapper">
          <img src={product.image} className="w-100" alt={product.name} />
          {product.discountPercent && (
            <span className="badge badge-primary">
              -{product.discountPercent}%
            </span>
)} {/* Bạn có thể tính % giảm nếu muốn */}
          <div className="actions">
            <Button onClick={(e) => { e.stopPropagation(); viewProductDetails(product.id);}}><TfiFullscreen /></Button>
            <Button onClick={(e) => e.stopPropagation()}><IoIosHeartEmpty style={{ fontSize: '20px' }} /></Button>
          </div>
        </div>
        <div className="info">
          <h4 className="spham">{product.name}</h4>
          <div className="d-flex align-items-center">
            <span className="oldPrice">{product.oldPrice}</span>
            <span className="netPrice text-danger ml-2">{product.price}</span>
          </div>
          {product.promotion && (
              <p className="promotion mt-4">{product.promotion}</p>
              )}
          {product.sold && (
              <p className="sold">{product.sold} đã bán</p>
                )} {/* Bạn có thể thay sold số khác nếu muốn */}
        </div>
      </div>
    ))
  ) : (
    <p>Không tìm thấy sản phẩm phù hợp.</p>
  )}
</div>
                           

          
        </section>
      </div>
    </div>
  );
};

export default Listing;