// ReviewSystem.jsx
import React, { useState } from 'react';
import  './ReviewSystem.css';

const ReviewSystem = ({ productName, productImage, initialReviews = [] }) => {
  const [reviews, setReviews] = useState(initialReviews);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [reviewImage, setReviewImage] = useState(null);
  const [rating, setRating] = useState(0);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Tính toán xếp hạng trung bình và số lượng đánh giá cho mỗi mức sao
  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1) 
    : "0.0";

    const handleStarClick = (index) => {
      if (isLoggedIn) {
        setRating(index);
      } else {
        setShowLoginModal(true);
      }
    };
  
    const handleMouseEnter = (index) => {
      setHoverRating(index);
    };
  
    const handleMouseLeave = () => {
      setHoverRating(0);
    };
  
    const handleLogin = (e) => {
      e.preventDefault();
      if (username && password) {
        setIsLoggedIn(true);
        setShowLoginModal(false);
        // We would normally validate credentials here
        // For demo purposes, any non-empty username/password works
      }
    };
  
    const closeModal = () => {
      setShowLoginModal(false);
    };
  
    const handleLogout = () => {
      setIsLoggedIn(false);
      setRating(0);
    };

  const ratingCounts = [5, 4, 3, 2, 1].map(stars => ({
    stars,
    count: reviews.filter(review => review.rating === stars).length
  }));

  // Xử lý khi người dùng nhấp vào sao để đánh giá
  const handleRatingClick = (rating) => {
    if (!isLoggedIn) {
      alert("Bạn cần đăng nhập để đánh giá sản phẩm");
      return;
    }
    setUserRating(rating);
  };

  // Xử lý khi hover chuột qua sao
  const handleRatingHover = (rating) => {
    setHoverRating(rating);
  };

  // Xử lý khi gửi đánh giá
  const handleSubmitReview = () => {
    if (!isLoggedIn) {
      alert("Bạn cần đăng nhập để nhận xét và đánh giá sản phẩm");
      return;
    }

    if (userRating === 0) {
      alert("Vui lòng chọn số sao đánh giá");
      return;
    }

    const newReview = {
      id: Date.now(),
      username: "Người dùng",
      rating: userRating,
      content: reviewText,
      date: new Date().toLocaleDateString(),
      image: reviewImage,
      likes: 0,
      dislikes: 0
    };

    setReviews([...reviews, newReview]);
    setUserRating(0);
    setReviewText('');
    setReviewImage(null);
  };

  // Xử lý khi tải lên hình ảnh
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setReviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Xử lý like/dislike
  const handleReactionClick = (reviewId, type) => {
    if (!isLoggedIn) {
      alert("Bạn cần đăng nhập để thực hiện thao tác này");
      return;
    }

    setReviews(reviews.map(review => {
      if (review.id === reviewId) {
        if (type === 'like') {
          return { ...review, likes: review.likes + 1 };
        } else {
          return { ...review, dislikes: review.dislikes + 1 };
        }
      }
      return review;
    }));
  };

  return (
    <div className="review-system-containerr">
      {/* Phần tổng quan đánh giá */}
      <div className="review-headerr">
        <h2>Đánh giá & Nhận xét</h2>
      </div>

      <div className="review-overviewr">
        <div className="rating-summaryr">
          <div className="average-ratingr">
            <span className="big-starr">★</span>
            <span className="average-rating-numberr">{averageRating}</span>
          </div>
          <div className="rating-countr">{reviews.length} đánh giá</div>
        </div>

        <div className="rating-barsr">
          {ratingCounts.map(rating => (
            <div className="rating-bar-rowr" key={rating.stars}>
              <div className="stars-labelr">
                {'★'.repeat(rating.stars)}{'☆'.repeat(5 - rating.stars)}
              </div>
              <div className="rating-bar-containerr">
                <div 
                  className="rating-barr" 
                  style={{ 
                    width: reviews.length > 0 
                      ? `${(rating.count / reviews.length) * 100}%` 
                      : '0%' 
                  }}
                ></div>
              </div>
              <div className="rating-count-numberr">{rating.count}</div>
            </div>
          ))}
        </div>

        {/* Nếu có đánh giá, hiển thị nút lọc */}
        {reviews.length > 0 && (
          <div className="filter-button-containerr">
            <button className="filter-button">
              <i className="filter-icon">⊞</i> Lọc đánh giá
            </button>
          </div>
        )}
      </div>

      {/* Phần đánh giá của người dùng */}
      <div className="user-review-sectionr">
        <h3>Đánh giá sản phẩm</h3>
        <div className="containerr">
  <div className="starsContainer">
    {[1, 2, 3, 4, 5].map((index) => (
      <div
        key={index}
        className={`star ${(hoverRating || rating) >= index ? 'activeStar' : ''}`}
        onClick={() => handleStarClick(index)}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        <svg 
          className="starIcon"
          fill={(hoverRating || rating) >= index ? '#FFFFFF' : '#FFFFFF'} 
          stroke={(hoverRating || rating) >= index ? 'none' : 'currentColor'}
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      </div>
    ))}
  </div>

  <div>
    {isLoggedIn ? (
      <div className="centerTexty">
        <p className="message">Bạn đã chọn {rating > 0 ? rating : 'chưa'} sao cho sản phẩm</p>
        {rating > 0 && (
          <button 
            className={`button ${isButtonHovered ? 'buttonHover' : ''}`}
            onClick={() => setRating(0)}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Đánh giá lại
          </button>
        )}
        <div className="marginTop150">
          <button 
            className="buttonn" 
            onClick={handleLogout}
          >
            Đăng xuất
          </button>
        </div>
      </div>
    ) : (
      <p className="message"></p>
    )}
  </div>

  {showLoginModal && (
    <div className="modal">
      <div className="modalContent">
        <div className="modalHeader">
          <h3 className="modalTitle">Đăng nhập</h3>
          <button className="closeButton" onClick={closeModal}>×</button>
        </div>
        <form className="formm" onSubmit={handleLogin}>
          <div className="formGroup">
            <label className="labell" htmlFor="username">Tên đăng nhập:</label>
            <input 
              className="inputt"
              type="text" 
              id="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </div>
          <div className="formGroup">
            <label className="labell" htmlFor="password">Mật khẩu:</label>
            <input 
              className="inputt"
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button className="loginButton" type="submit">Đăng nhập</button>
        </form>
      </div>
    </div>
  )}
</div>

        
        {/* Hiển thị sản phẩm đang đánh giá */}
        {productName && (
          <div className="product-info1">
            {productImage && <img src={productImage} alt={productName} className="product-imagee" />}
            <h4>{productName}</h4>
            <div className="star-rating-input">
              {[1, 2, 3, 4, 5].map(star => (
                <span
                  key={star}
                  className={`star-input ${(hoverRating || userRating) >= star ? 'active' : ''}`}
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => handleRatingHover(star)}
                  onMouseLeave={() => setHoverRating(0)}
                >
                  ★
                </span>
              ))}
            </div>
            {userRating > 0 && <div className="rating-label">Tuyệt vời!</div>}
          </div>
        )}

        {!isLoggedIn ? (
          <div className="login-message">
            Bạn cần đăng nhập để nhận xét và đánh giá sản phẩm
            <div className="first-review-message">Hãy là người đầu tiên đánh giá sản phẩm!</div>
          </div>
        ) : (
          <div className="review-form">
            <textarea
              placeholder="Hãy chia sẻ đánh giá của bạn về sản phẩm"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              maxLength={500}
              className="review-textarea"
            ></textarea>
            <div className="review-form-footer">
              <div className="char-count">{reviewText.length}/500 ký tự</div>
              
              <div className="review-options">
                <div className="quick-tags">
                  <button className="tag-button">Giao hàng nhanh</button>
                  <button className="tag-button">Biểu tượng yêu thích của tôi</button>
                </div>

                <div className="image-upload">
                  <label htmlFor="review-image" className="image-upload-label">
                    <div className="upload-icon">+</div>
                    <input
                      type="file"
                      id="review-image"
                      accept="image/jpeg,image/png,image/jpg"
                      onChange={handleImageUpload}
                      style={{ display: 'none' }}
                    />
                  </label>
                  <span className="image-label">Hình ảnh đánh giá (định dạng .jpg, .jpeg, .png)</span>
                </div>
              </div>

              <div className="submit-buttons">
                <button className="cancel-button">Hủy</button>
                <button className="submit-button" onClick={handleSubmitReview}>Gửi đánh giá</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Danh sách các đánh giá đã có */}
      {reviews.length > 0 && (
        <div className="reviews-list">
          {reviews.map(review => (
            <div key={review.id} className="review-item">
              <div className="review-header">
                <div className="reviewer-name">{review.username}</div>
                <div className="review-date">{review.date}</div>
              </div>
              <div className="review-stars">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
              <div className="review-content">{review.content}</div>
              {review.image && (
                <div className="review-image-container">
                  <img src={review.image} alt="Đánh giá" className="review-image" />
                </div>
              )}
              <div className="review-actions">
                <button 
                  className="reaction-button" 
                  onClick={() => handleReactionClick(review.id, 'like')}
                >
                  <span className="like-icon">👍</span> ({review.likes})
                </button>
                <button 
                  className="reaction-button" 
                  onClick={() => handleReactionClick(review.id, 'dislike')}
                >
                  <span className="dislike-icon">👎</span> ({review.dislikes})
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewSystem;